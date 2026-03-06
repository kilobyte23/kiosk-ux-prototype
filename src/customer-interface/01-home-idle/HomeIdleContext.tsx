/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  startTransition,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type {
  AccessibilityState,
  LanguageCode,
  LocalizedCopy,
  PromotionCard,
  SimulationMode,
  StationProfile,
  SupportedLanguage,
  TelemetryState,
} from './homeIdleData';
import {
  SUPPORTED_LANGUAGES,
  createNominalTelemetry,
  getLocalizedCopy,
  getLocalizedPromotions,
  getStationLabel,
  getStationProfile,
} from './homeIdleData';

const PERSISTENCE_KEY = 'prototype.homeIdle.preferences';
const PERSISTENCE_WINDOW_MS = 60_000;
const DEFAULT_LANGUAGE = SUPPORTED_LANGUAGES[0];

interface StoredPreferences {
  timestamp: number;
  accessibility: AccessibilityState;
}

interface HomeIdleContextValue {
  accessibility: AccessibilityState;
  copy: LocalizedCopy;
  language: SupportedLanguage;
  liveAnnouncement: string;
  now: Date;
  promotions: PromotionCard[];
  simulationMode: SimulationMode;
  setLanguage: (languageCode: LanguageCode) => void;
  shellSupportText: string;
  shellTimeLabel: string;
  station: StationProfile;
  stationLabel: string;
  telemetry: TelemetryState;
  updateTelemetry: (patch: Partial<TelemetryState>) => void;
  toggleAccessibility: (key: keyof AccessibilityState) => void;
  announce: (message: string) => void;
}

const HomeIdleContext = createContext<HomeIdleContextValue | null>(null);

function readStoredPreferences(): StoredPreferences | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const rawValue = window.sessionStorage.getItem(PERSISTENCE_KEY);
  if (!rawValue) {
    return null;
  }

  try {
    const parsedValue = JSON.parse(rawValue) as StoredPreferences;
    if (Date.now() - parsedValue.timestamp > PERSISTENCE_WINDOW_MS) {
      window.sessionStorage.removeItem(PERSISTENCE_KEY);
      return null;
    }

    return parsedValue;
  } catch {
    window.sessionStorage.removeItem(PERSISTENCE_KEY);
    return null;
  }
}

function getInitialAccessibilityState() {
  return readStoredPreferences()?.accessibility ?? {
    highContrast: false,
    largeText: false,
    screenReader: false,
  };
}

export function HomeIdleProvider({ children }: { children: React.ReactNode }) {
  const [accessibility, setAccessibility] = useState<AccessibilityState>(getInitialAccessibilityState);
  const [station] = useState(() => getStationProfile(new Date().getDate() + new Date().getMonth() * 11));
  const [now, setNow] = useState(() => new Date());
  const [telemetry, setTelemetry] = useState(() => createNominalTelemetry());
  const simulationMode: SimulationMode = 'manual';
  const [liveAnnouncement, setLiveAnnouncement] = useState('');

  const language = DEFAULT_LANGUAGE;
  const copy = useMemo(() => getLocalizedCopy('en'), []);
  const promotions = useMemo(() => getLocalizedPromotions(copy), [copy]);

  const announce = useCallback((message: string) => {
    setLiveAnnouncement(message);

    if (!accessibility.screenReader || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = language.locale;
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  }, [accessibility.screenReader, language.locale]);

  useEffect(() => {
    const clockInterval = window.setInterval(() => {
      setNow(new Date());
    }, 1_000);

    return () => {
      window.clearInterval(clockInterval);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const valueToStore: StoredPreferences = {
      timestamp: Date.now(),
      accessibility,
    };

    window.sessionStorage.setItem(PERSISTENCE_KEY, JSON.stringify(valueToStore));
  }, [accessibility]);

  const shellTimeLabel = useMemo(
    () => new Intl.DateTimeFormat(language.locale, { hour: 'numeric', minute: '2-digit' }).format(now),
    [language.locale, now],
  );

  const shellSupportText = telemetry.operationalStatus === 'maintenance'
    ? copy.shellSupportMaintenance
    : telemetry.connectivity === 'offline'
      ? copy.shellSupportOffline
      : copy.shellSupportOnline;

  const updateTelemetry = useCallback((patch: Partial<TelemetryState>) => {
    setTelemetry((currentTelemetry) => ({
      ...currentTelemetry,
      ...patch,
    }));
  }, []);

  const value = useMemo<HomeIdleContextValue>(() => ({
    accessibility,
    announce,
    copy,
    language,
    liveAnnouncement,
    now,
    promotions,
    simulationMode,
    setLanguage: (nextLanguageCode: LanguageCode) => {
      if (nextLanguageCode === 'en') {
        announce(`${copy.languageUpdated} English`);
      }
    },
    shellSupportText,
    shellTimeLabel,
    station,
    stationLabel: getStationLabel(station),
    telemetry,
    updateTelemetry,
    toggleAccessibility: (key: keyof AccessibilityState) => {
      startTransition(() => {
        setAccessibility((currentState) => {
          const nextState = {
            ...currentState,
            [key]: !currentState[key],
          };

          return nextState;
        });
      });

      if (key === 'screenReader') {
        announce(accessibility.screenReader ? copy.screenReaderDisabled : copy.screenReaderEnabled);
      }
    },
  }), [
    accessibility,
    announce,
    copy,
    language,
    liveAnnouncement,
    now,
    promotions,
    simulationMode,
    shellSupportText,
    shellTimeLabel,
    station,
    telemetry,
    updateTelemetry,
  ]);

  return <HomeIdleContext.Provider value={value}>{children}</HomeIdleContext.Provider>;
}

export function useHomeIdle() {
  const context = useContext(HomeIdleContext);

  if (!context) {
    throw new Error('useHomeIdle must be used within HomeIdleProvider');
  }

  return context;
}
