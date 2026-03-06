import { useState } from 'react';
import {
  ArrowRight,
  BatteryFull,
  CaretDown,
  SlidersHorizontal,
  Translate,
} from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import AccessibilityToggle from '../components/AccessibilityToggle';
import ConnectivityIndicator from '../components/ConnectivityIndicator';
import EmergencyHelpline from '../components/EmergencyHelpline';
import LanguageSelector from '../components/LanguageSelector';
import PromotionalCarousel from '../components/PromotionalCarousel';
import StationStatusBanner from '../components/StationStatusBanner';
import { useHomeIdle } from '../HomeIdleContext';
import { SUPPORTED_LANGUAGES } from '../homeIdleData';
import './IdleAttractScreen.css';

export default function IdleAttractScreen() {
  const navigate = useNavigate();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const {
    accessibility,
    announce,
    copy,
    language,
    promotions,
    simulationMode,
    setLanguage,
    station,
    telemetry,
    toggleAccessibility,
  } = useHomeIdle();

  const primaryActionLabel = telemetry.operationalStatus === 'maintenance'
    ? copy.actionUnavailable
    : telemetry.connectivity === 'offline'
      ? copy.actionOfflineSwap
      : copy.actionStartSwap;

  const primaryActionHint = telemetry.operationalStatus === 'maintenance'
    ? copy.ctaMaintenanceHint
    : telemetry.connectivity === 'offline'
      ? copy.ctaOfflineHint
      : telemetry.connectivity === 'degraded'
        ? copy.ctaDegradedHint
        : '';

  return (
    <div className={`idle-screen-container ${accessibility.highContrast ? 'high-contrast' : ''} ${accessibility.largeText ? 'large-text' : ''}`}>
      <section className="idle-hero-panel kiosk-panel">
        <div className="hero-stage">
          <div className="hero-copy">
            <div className="hero-copy__headline">
              <StationStatusBanner copy={copy} telemetry={telemetry} />
              <h1>{copy.heroTitle}</h1>
            </div>

            <PromotionalCarousel items={promotions} />
          </div>

          <div className="cta-column">
            <aside className={`cta-card ${telemetry.operationalStatus === 'maintenance' ? 'cta-card--maintenance' : ''}`}>
              <div className="availability-visual" aria-hidden="true">
                <span className="availability-visual__ring availability-visual__ring--outer" />
                <span className="availability-visual__ring availability-visual__ring--middle" />
                <span className="availability-visual__ring availability-visual__ring--inner" />
              </div>

              <div className="cta-card__summary">
                <span className="availability-chip">
                  <BatteryFull size={16} weight="fill" />
                  <span>{copy.stationReady}</span>
                </span>

                <div className="availability-stat">
                  <strong>{telemetry.availableBatteries}</strong>
                  <span>{copy.readyNow}</span>
                </div>

                <div className="availability-meta">
                  <span>{copy.cabinetLabel}: {telemetry.cabinetTempC.toFixed(1)}°C {copy.cabinetStable}</span>
                </div>
              </div>

              <button
                className="start-swap-button"
                onClick={() => {
                  if (telemetry.operationalStatus === 'maintenance') {
                    announce(copy.ctaMaintenanceHint);
                    return;
                  }

                  navigate(telemetry.connectivity === 'offline' ? '/customer/auth/rfid' : '/customer/auth-select');
                }}
                disabled={telemetry.operationalStatus === 'maintenance'}
              >
                <span>{primaryActionLabel}</span>
                <ArrowRight size={20} weight="bold" />
              </button>

              {primaryActionHint && <p className="cta-support-copy">{primaryActionHint}</p>}
            </aside>

            <ConnectivityIndicator
              copy={copy}
              simulationMode={simulationMode}
              telemetry={telemetry}
            />
          </div>
        </div>
      </section>

      <section className="idle-toolbar kiosk-panel kiosk-panel--soft">
        <button
          type="button"
          className={`idle-toolbar__trigger ${settingsOpen ? 'is-open' : ''}`}
          onClick={() => setSettingsOpen((currentValue) => !currentValue)}
          aria-expanded={settingsOpen}
          aria-controls="idle-settings-tray"
          aria-label="Toggle accessibility and language settings"
        >
          <SlidersHorizontal size={16} weight="bold" />
          <span className="idle-toolbar__trigger-label">Settings</span>
          <CaretDown className="idle-toolbar__trigger-caret" size={16} weight="bold" />
        </button>

        <span className="idle-toolbar__language-chip">
          <Translate size={15} weight="bold" />
          <span>{language.label}</span>
        </span>
      </section>

      <section
        id="idle-settings-tray"
        className={`idle-settings-tray kiosk-panel ${settingsOpen ? 'is-open' : ''}`}
        aria-hidden={!settingsOpen}
      >
        <div className="idle-settings-tray__inner">
          <AccessibilityToggle
            label={copy.accessibilityLabel}
            highContrastLabel={copy.highContrastLabel}
            largeTextLabel={copy.largeTextLabel}
            onToggle={toggleAccessibility}
            screenReaderLabel={copy.screenReaderLabel}
            state={accessibility}
          />
          <div className="utility-divider" aria-hidden="true" />
          <LanguageSelector
            activeLanguage={language.code}
            label={copy.languageLabel}
            languages={SUPPORTED_LANGUAGES}
            onSelect={setLanguage}
          />
        </div>
      </section>

      <EmergencyHelpline
        announce={announce}
        copy={copy}
        emergencyNumber={station.emergencyNumber}
        etaMinutes={telemetry.etaMinutes || 2}
        supportNumber={station.supportNumber}
      />
    </div>
  );
}
