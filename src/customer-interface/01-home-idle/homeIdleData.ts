export type LanguageCode = 'en' | 'hi' | 'mr' | 'ta' | 'te' | 'kn' | 'bn';

export type ConnectivityMode = 'online' | 'degraded' | 'offline';

export type OperationalStatus = 'online' | 'partial' | 'maintenance';

export type PowerMode = 'solarHybrid' | 'gridPriority' | 'batteryBuffer' | 'serviceBackup';

export type SimulationMode = 'auto' | 'manual';

export interface SupportedLanguage {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
  locale: string;
}

export interface StationProfile {
  stationCode: string;
  locality: string;
  city: string;
  supportNumber: string;
  emergencyNumber: string;
}

export interface AccessibilityState {
  highContrast: boolean;
  largeText: boolean;
  screenReader: boolean;
}

export interface TelemetryState {
  availableBatteries: number;
  totalBatteries: number;
  ambientTempC: number;
  cabinetTempC: number;
  powerMode: PowerMode;
  connectivity: ConnectivityMode;
  operationalStatus: OperationalStatus;
  offlineQueue: number;
  baysInService: number;
  etaMinutes: number;
  maintenanceTicksRemaining: number;
}

export interface StatusBannerCopy {
  label: string;
  title: string;
  message: string;
}

export interface PromotionCopy {
  eyebrow: string;
  title: string;
  detail: string;
  badge: string;
}

export interface LocalizedCopy {
  heroTitle: string;
  heroSubtitle: string;
  stationReady: string;
  actionStartSwap: string;
  actionOfflineSwap: string;
  actionUnavailable: string;
  ctaOnlineHint: string;
  ctaDegradedHint: string;
  ctaOfflineHint: string;
  ctaMaintenanceHint: string;
  availabilityLabel: string;
  readyNow: string;
  cabinetLabel: string;
  cabinetStable: string;
  statusWidgetsLabel: string;
  clockLabel: string;
  ambientLabel: string;
  powerLabel: string;
  connectivityLabel: string;
  connectivityOnline: string;
  connectivityDegraded: string;
  connectivityOffline: string;
  connectivityOnlineNote: string;
  connectivityDegradedNote: string;
  connectivityOfflineNote: string;
  queueLabel: string;
  queueEmpty: string;
  fallbackRfid: string;
  fallbackGuest: string;
  accessibilityLabel: string;
  highContrastLabel: string;
  largeTextLabel: string;
  screenReaderLabel: string;
  languageLabel: string;
  languageUpdated: string;
  emergencyLabel: string;
  emergencyTitle: string;
  emergencyDetail: string;
  emergencyCallNow: string;
  emergencySticky: string;
  emergencyOperatorEta: string;
  screenReaderEnabled: string;
  screenReaderDisabled: string;
  shellSupportOnline: string;
  shellSupportOffline: string;
  shellSupportMaintenance: string;
  statusOnline: StatusBannerCopy;
  statusPartial: StatusBannerCopy;
  statusMaintenance: StatusBannerCopy;
  powerModes: Record<PowerMode, string>;
  promotions: {
    saver: PromotionCopy;
    fleet: PromotionCopy;
    rescue: PromotionCopy;
  };
}

export interface PromotionCard extends PromotionCopy {
  id: string;
  accent: string;
}

export const SUPPORTED_LANGUAGES: SupportedLanguage[] = [
  { code: 'en', label: 'English', nativeLabel: 'English', locale: 'en-IN' },
];

const STATIONS: StationProfile[] = [
  {
    stationCode: '042',
    locality: 'Indiranagar',
    city: 'Bengaluru',
    supportNumber: '1800-120-2424',
    emergencyNumber: '1800-120-9110',
  },
  {
    stationCode: '067',
    locality: 'T Nagar',
    city: 'Chennai',
    supportNumber: '1800-120-3555',
    emergencyNumber: '1800-120-9112',
  },
  {
    stationCode: '118',
    locality: 'Hinjawadi',
    city: 'Pune',
    supportNumber: '1800-120-4888',
    emergencyNumber: '1800-120-9114',
  },
  {
    stationCode: '054',
    locality: 'Gachibowli',
    city: 'Hyderabad',
    supportNumber: '1800-120-5222',
    emergencyNumber: '1800-120-9116',
  },
  {
    stationCode: '031',
    locality: 'Sector 18',
    city: 'Noida',
    supportNumber: '1800-120-6111',
    emergencyNumber: '1800-120-9118',
  },
];

const COPY: Record<LanguageCode, LocalizedCopy> = {
  en: {
    heroTitle: 'Start your battery swap.',
    heroSubtitle: 'Tap to begin. Most swaps complete in under 60 seconds.',
    stationReady: 'Station ready',
    actionStartSwap: 'Start Swap',
    actionOfflineSwap: 'Continue Offline',
    actionUnavailable: 'Temporarily unavailable',
    ctaOnlineHint: 'Live swap allocation is active for this station.',
    ctaDegradedHint: 'Network retries are active. RFID and saved QR still work.',
    ctaOfflineHint: 'Offline mode is active. Use RFID or guest access while sync catches up.',
    ctaMaintenanceHint: 'A service crew is on-site. Use SOS for assisted support.',
    availabilityLabel: 'Availability',
    readyNow: 'ready now',
    cabinetLabel: 'Cabinet',
    cabinetStable: 'stable',
    statusWidgetsLabel: 'Live station status',
    clockLabel: 'Clock',
    ambientLabel: 'Ambient',
    powerLabel: 'Grid power',
    connectivityLabel: 'Connectivity',
    connectivityOnline: 'Online',
    connectivityDegraded: 'Retrying',
    connectivityOffline: 'Offline mode',
    connectivityOnlineNote: 'Cloud sync, payments, and live inventory checks are healthy.',
    connectivityDegradedNote: 'Short retries are running. Cached auth paths stay available.',
    connectivityOfflineNote: 'Cloud sync is paused. Saved QR, RFID, and guest flow remain available.',
    queueLabel: 'Queued syncs',
    queueEmpty: 'No pending sync',
    fallbackRfid: 'Use RFID',
    fallbackGuest: 'Guest swap',
    accessibilityLabel: 'Accessibility',
    highContrastLabel: 'High contrast',
    largeTextLabel: 'Large text',
    screenReaderLabel: 'Screen reader',
    languageLabel: 'Language',
    languageUpdated: 'Language updated.',
    emergencyLabel: 'Emergency',
    emergencyTitle: 'Emergency helpline',
    emergencyDetail: 'Always available for stuck doors, smoke alerts, or rider assistance.',
    emergencyCallNow: 'Call operator',
    emergencySticky: 'SOS / Helpline',
    emergencyOperatorEta: 'Operator response ETA',
    screenReaderEnabled: 'Screen reader mode enabled.',
    screenReaderDisabled: 'Screen reader mode disabled.',
    shellSupportOnline: 'Support live: average kiosk response under 45 seconds.',
    shellSupportOffline: 'Offline mode active: RFID, guest swap, and saved QR continue locally.',
    shellSupportMaintenance: 'Station support on-site: assisted swaps available through SOS.',
    statusOnline: {
      label: 'Online',
      title: 'All cabinets are ready for live swaps.',
      message: 'Charging, payments, and live assignment are responding normally.',
    },
    statusPartial: {
      label: 'Partial service',
      title: 'Swap service is running with reduced capacity.',
      message: 'Some cabinets are paused while the station keeps core swap access online.',
    },
    statusMaintenance: {
      label: 'Maintenance',
      title: 'Planned service is in progress.',
      message: 'Direct swap starts are paused while a technician clears the station.',
    },
    powerModes: {
      solarHybrid: 'Solar + grid',
      gridPriority: 'Grid prioritised',
      batteryBuffer: 'Battery buffer + grid',
      serviceBackup: 'Service backup',
    },
    promotions: {
      saver: {
        eyebrow: 'Night saver',
        title: '15% off swaps after 10 PM',
        detail: 'Auto-applies to active commuter plans while station demand is low.',
        badge: 'Auto-applied',
      },
      fleet: {
        eyebrow: 'Fleet pocket plan',
        title: 'Monthly cap for delivery riders',
        detail: 'Predictable invoices, priority battery holds, and GST-ready export.',
        badge: 'Best for fleets',
      },
      rescue: {
        eyebrow: 'Monsoon rescue add-on',
        title: 'Operator dispatch included',
        detail: 'Get roadside assistance and emergency cabinet unlock support during storms.',
        badge: 'Seasonal',
      },
    },
  },
  hi: {
    heroTitle: 'अपना बैटरी स्वैप शुरू करें।',
    heroSubtitle: 'शुरू करने के लिए टैप करें। अधिकांश स्वैप 60 सेकंड से कम में पूरे हो जाते हैं।',
    stationReady: 'स्टेशन तैयार',
    actionStartSwap: 'स्वैप शुरू करें',
    actionOfflineSwap: 'ऑफलाइन जारी रखें',
    actionUnavailable: 'अभी उपलब्ध नहीं',
    ctaOnlineHint: 'इस स्टेशन पर लाइव स्वैप आवंटन चालू है।',
    ctaDegradedHint: 'नेटवर्क फिर से कोशिश कर रहा है। RFID और सेव किया हुआ QR अभी भी काम करते हैं।',
    ctaOfflineHint: 'ऑफलाइन मोड चालू है। सिंक पूरा होने तक RFID या गेस्ट एक्सेस का उपयोग करें।',
    ctaMaintenanceHint: 'सेवा टीम साइट पर है। सहायता के लिए SOS दबाएं।',
    availabilityLabel: 'उपलब्धता',
    readyNow: 'अभी तैयार',
    cabinetLabel: 'कैबिनेट',
    cabinetStable: 'स्थिर',
    statusWidgetsLabel: 'लाइव स्टेशन स्थिति',
    clockLabel: 'घड़ी',
    ambientLabel: 'तापमान',
    powerLabel: 'ग्रिड पावर',
    connectivityLabel: 'कनेक्टिविटी',
    connectivityOnline: 'ऑनलाइन',
    connectivityDegraded: 'रीट्राई जारी',
    connectivityOffline: 'ऑफलाइन मोड',
    connectivityOnlineNote: 'क्लाउड सिंक, भुगतान और लाइव इन्वेंटरी जांच सामान्य हैं।',
    connectivityDegradedNote: 'छोटी रीट्राई चल रही हैं। कैश्ड ऑथ पाथ उपलब्ध हैं।',
    connectivityOfflineNote: 'क्लाउड सिंक रुका है। सेव किया हुआ QR, RFID और गेस्ट मोड उपलब्ध हैं।',
    queueLabel: 'कतार में सिंक',
    queueEmpty: 'कोई लंबित सिंक नहीं',
    fallbackRfid: 'RFID उपयोग करें',
    fallbackGuest: 'गेस्ट स्वैप',
    accessibilityLabel: 'सुगम्यता',
    highContrastLabel: 'हाई कॉन्ट्रास्ट',
    largeTextLabel: 'बड़ा टेक्स्ट',
    screenReaderLabel: 'स्क्रीन रीडर',
    languageLabel: 'भाषा',
    languageUpdated: 'भाषा अपडेट हो गई।',
    emergencyLabel: 'आपातकाल',
    emergencyTitle: 'आपातकालीन हेल्पलाइन',
    emergencyDetail: 'अटके हुए दरवाजे, धुआं अलर्ट या राइडर सहायता के लिए हमेशा उपलब्ध।',
    emergencyCallNow: 'ऑपरेटर को कॉल करें',
    emergencySticky: 'SOS / हेल्पलाइन',
    emergencyOperatorEta: 'ऑपरेटर आने का समय',
    screenReaderEnabled: 'स्क्रीन रीडर मोड चालू हुआ।',
    screenReaderDisabled: 'स्क्रीन रीडर मोड बंद हुआ।',
    shellSupportOnline: 'सपोर्ट लाइव है: औसत प्रतिक्रिया 45 सेकंड से कम।',
    shellSupportOffline: 'ऑफलाइन मोड चालू है: RFID, गेस्ट स्वैप और सेव किया हुआ QR लोकली उपलब्ध हैं।',
    shellSupportMaintenance: 'स्टेशन सपोर्ट साइट पर है: SOS से सहायता प्राप्त करें।',
    statusOnline: {
      label: 'ऑनलाइन',
      title: 'सभी कैबिनेट लाइव स्वैप के लिए तैयार हैं।',
      message: 'चार्जिंग, भुगतान और लाइव असाइनमेंट सामान्य रूप से काम कर रहे हैं।',
    },
    statusPartial: {
      label: 'आंशिक सेवा',
      title: 'कम क्षमता के साथ स्वैप सेवा चालू है।',
      message: 'कुछ कैबिनेट रुके हैं, लेकिन मुख्य स्वैप सेवा उपलब्ध है।',
    },
    statusMaintenance: {
      label: 'रखरखाव',
      title: 'निर्धारित सेवा जारी है।',
      message: 'तकनीशियन स्टेशन साफ करने तक सीधे स्वैप शुरू अस्थायी रूप से रुके हैं।',
    },
    powerModes: {
      solarHybrid: 'सोलर + ग्रिड',
      gridPriority: 'ग्रिड प्राथमिक',
      batteryBuffer: 'बैटरी बफर + ग्रिड',
      serviceBackup: 'सर्विस बैकअप',
    },
    promotions: {
      saver: {
        eyebrow: 'नाइट सेवर',
        title: 'रात 10 बजे के बाद स्वैप पर 15% छूट',
        detail: 'कम मांग के समय सक्रिय कम्यूटर प्लान पर अपने आप लागू होता है।',
        badge: 'अपने आप लागू',
      },
      fleet: {
        eyebrow: 'फ्लीट पॉकेट प्लान',
        title: 'डिलीवरी राइडर्स के लिए मासिक कैप',
        detail: 'निश्चित बिल, प्राथमिक बैटरी होल्ड और GST-तैयार एक्सपोर्ट।',
        badge: 'फ्लीट के लिए',
      },
      rescue: {
        eyebrow: 'मानसून रेस्क्यू',
        title: 'ऑपरेटर डिस्पैच शामिल',
        detail: 'तूफानी मौसम में रोडसाइड सहायता और इमरजेंसी अनलॉक सपोर्ट।',
        badge: 'मौसमी',
      },
    },
  },
  mr: {
    heroTitle: 'तुमचा बॅटरी स्वॅप सुरू करा.',
    heroSubtitle: 'सुरू करण्यासाठी टॅप करा. बहुतांश स्वॅप 60 सेकंदांच्या आत पूर्ण होतात.',
    stationReady: 'स्टेशन तयार',
    actionStartSwap: 'स्वॅप सुरू करा',
    actionOfflineSwap: 'ऑफलाइन सुरू ठेवा',
    actionUnavailable: 'तात्पुरते उपलब्ध नाही',
    ctaOnlineHint: 'या स्टेशनवर लाईव्ह स्वॅप वाटप सुरू आहे.',
    ctaDegradedHint: 'नेटवर्क पुन्हा प्रयत्न करत आहे. RFID आणि सेव केलेला QR चालू आहेत.',
    ctaOfflineHint: 'ऑफलाइन मोड सुरू आहे. सिंक पूर्ण होईपर्यंत RFID किंवा गेस्ट वापरा.',
    ctaMaintenanceHint: 'सेवा टीम साइटवर आहे. मदतीसाठी SOS वापरा.',
    availabilityLabel: 'उपलब्धता',
    readyNow: 'आत्ता तयार',
    cabinetLabel: 'कॅबिनेट',
    cabinetStable: 'स्थिर',
    statusWidgetsLabel: 'लाईव्ह स्टेशन स्थिती',
    clockLabel: 'घड्याळ',
    ambientLabel: 'तापमान',
    powerLabel: 'ग्रिड पॉवर',
    connectivityLabel: 'कनेक्टिव्हिटी',
    connectivityOnline: 'ऑनलाइन',
    connectivityDegraded: 'पुन्हा प्रयत्न',
    connectivityOffline: 'ऑफलाइन मोड',
    connectivityOnlineNote: 'क्लाउड सिंक, पेमेंट्स आणि लाईव्ह इन्व्हेंटरी तपासणी सुरळीत आहे.',
    connectivityDegradedNote: 'लहान रीट्राय सुरू आहेत. कॅश्ड ऑथ पर्याय उपलब्ध आहेत.',
    connectivityOfflineNote: 'क्लाउड सिंक थांबले आहे. सेव केलेला QR, RFID आणि गेस्ट मोड उपलब्ध आहेत.',
    queueLabel: 'रांगेतील सिंक',
    queueEmpty: 'लंबित सिंक नाही',
    fallbackRfid: 'RFID वापरा',
    fallbackGuest: 'गेस्ट स्वॅप',
    accessibilityLabel: 'सुलभता',
    highContrastLabel: 'हाय कॉन्ट्रास्ट',
    largeTextLabel: 'मोठा मजकूर',
    screenReaderLabel: 'स्क्रीन रीडर',
    languageLabel: 'भाषा',
    languageUpdated: 'भाषा बदलली.',
    emergencyLabel: 'आपत्काल',
    emergencyTitle: 'आपत्कालीन हेल्पलाइन',
    emergencyDetail: 'अडकलेले दरवाजे, धूर अलर्ट किंवा रायडर सहाय्यासाठी नेहमी उपलब्ध.',
    emergencyCallNow: 'ऑपरेटरला कॉल करा',
    emergencySticky: 'SOS / हेल्पलाइन',
    emergencyOperatorEta: 'ऑपरेटर प्रतिसाद वेळ',
    screenReaderEnabled: 'स्क्रीन रीडर मोड सुरू झाला.',
    screenReaderDisabled: 'स्क्रीन रीडर मोड बंद झाला.',
    shellSupportOnline: 'सपोर्ट लाईव्ह आहे: सरासरी प्रतिसाद 45 सेकंदांखाली.',
    shellSupportOffline: 'ऑफलाइन मोड सुरू आहे: RFID, गेस्ट स्वॅप आणि सेव केलेला QR स्थानिक पातळीवर उपलब्ध आहेत.',
    shellSupportMaintenance: 'स्टेशन सपोर्ट साइटवर आहे: SOS द्वारे सहाय्य घ्या.',
    statusOnline: {
      label: 'ऑनलाइन',
      title: 'सर्व कॅबिनेट लाईव्ह स्वॅपसाठी तयार आहेत.',
      message: 'चार्जिंग, पेमेंट्स आणि लाईव्ह असाइनमेंट सामान्यपणे चालू आहेत.',
    },
    statusPartial: {
      label: 'आंशिक सेवा',
      title: 'कमी क्षमतेसह स्वॅप सेवा सुरू आहे.',
      message: 'काही कॅबिनेट थांबले असले तरी मुख्य स्वॅप सेवा चालू आहे.',
    },
    statusMaintenance: {
      label: 'देखभाल',
      title: 'नियोजित सेवा सुरू आहे.',
      message: 'तंत्रज्ञ स्टेशन साफ करत असताना थेट स्वॅप तात्पुरते थांबवले आहेत.',
    },
    powerModes: {
      solarHybrid: 'सौर + ग्रिड',
      gridPriority: 'ग्रिड प्राधान्य',
      batteryBuffer: 'बॅटरी बफर + ग्रिड',
      serviceBackup: 'सेवा बॅकअप',
    },
    promotions: {
      saver: {
        eyebrow: 'नाईट सेवर',
        title: 'रात्री 10 नंतर स्वॅपवर 15% सूट',
        detail: 'स्टेशनवरील कमी गर्दीच्या वेळी कम्यूटर प्लॅनवर आपोआप लागू.',
        badge: 'आपोआप लागू',
      },
      fleet: {
        eyebrow: 'फ्लीट पॉकेट प्लॅन',
        title: 'डिलिव्हरी रायडर्ससाठी मासिक मर्यादा',
        detail: 'निश्चित बिल, प्राधान्य बॅटरी राखीव आणि GST एक्सपोर्ट.',
        badge: 'फ्लीटसाठी',
      },
      rescue: {
        eyebrow: 'मान्सून रेस्क्यू',
        title: 'ऑपरेटर डिस्पॅच समाविष्ट',
        detail: 'पावसाळ्यात रोडसाइड मदत आणि आपत्कालीन अनलॉक सपोर्ट.',
        badge: 'हंगामी',
      },
    },
  },
  ta: {
    heroTitle: 'உங்கள் பேட்டரி மாற்றத்தை தொடங்குங்கள்.',
    heroSubtitle: 'தொடங்கத் தட்டவும். பெரும்பாலான மாற்றங்கள் 60 வினாடிகளுக்குள் முடிகின்றன.',
    stationReady: 'நிலையம் தயாராக உள்ளது',
    actionStartSwap: 'மாற்றத்தை தொடங்கு',
    actionOfflineSwap: 'ஆஃப்லைனில் தொடரவும்',
    actionUnavailable: 'தற்காலிகமாக இல்லை',
    ctaOnlineHint: 'இந்த நிலையத்தில் நேரடி மாற்ற ஒதுக்கீடு இயங்குகிறது.',
    ctaDegradedHint: 'நெட்வொர்க் மீண்டும் முயல்கிறது. RFID மற்றும் சேமிக்கப்பட்ட QR இன்னும் செயல்படும்.',
    ctaOfflineHint: 'ஆஃப்லைன் பயன்முறை இயங்குகிறது. ஒத்திசைவு முடியும் வரை RFID அல்லது விருந்தினர் அணுகலைப் பயன்படுத்துங்கள்.',
    ctaMaintenanceHint: 'சேவை குழு தளத்தில் உள்ளது. உதவிக்கு SOS அழுத்தவும்.',
    availabilityLabel: 'கிடைக்கும்',
    readyNow: 'இப்போது தயார்',
    cabinetLabel: 'கேபினெட்',
    cabinetStable: 'நிலையானது',
    statusWidgetsLabel: 'நேரடி நிலைய நிலை',
    clockLabel: 'நேரம்',
    ambientLabel: 'சுற்றுப்புறம்',
    powerLabel: 'மின் வலை',
    connectivityLabel: 'இணைப்பு',
    connectivityOnline: 'ஆன்லைன்',
    connectivityDegraded: 'மீண்டும் முயற்சி',
    connectivityOffline: 'ஆஃப்லைன் பயன்முறை',
    connectivityOnlineNote: 'கிளவுட் ஒத்திசைவு, கட்டணங்கள், மற்றும் நேரடி கையிருப்பு சரியாக உள்ளன.',
    connectivityDegradedNote: 'குறுகிய மீண்டும் முயற்சிகள் நடக்கின்றன. சேமிக்கப்பட்ட அங்கீகாரம் கிடைக்கும்.',
    connectivityOfflineNote: 'கிளவுட் ஒத்திசைவு நிறுத்தப்பட்டுள்ளது. சேமித்த QR, RFID மற்றும் விருந்தினர் முறை கிடைக்கும்.',
    queueLabel: 'வரிசை ஒத்திசைவுகள்',
    queueEmpty: 'நிலுவை ஒத்திசைவு இல்லை',
    fallbackRfid: 'RFID பயன்படுத்தவும்',
    fallbackGuest: 'விருந்தினர் மாற்றம்',
    accessibilityLabel: 'அணுகல்',
    highContrastLabel: 'உயர் மாறுபாடு',
    largeTextLabel: 'பெரிய உரை',
    screenReaderLabel: 'ஸ்கிரீன் ரீடர்',
    languageLabel: 'மொழி',
    languageUpdated: 'மொழி மாற்றப்பட்டது.',
    emergencyLabel: 'அவசரம்',
    emergencyTitle: 'அவசர உதவி எண்',
    emergencyDetail: 'சிக்கிய கதவுகள், புகை எச்சரிக்கை அல்லது பயணி உதவிக்காக எப்போதும் கிடைக்கும்.',
    emergencyCallNow: 'ஆப்பரேட்டரை அழைக்கவும்',
    emergencySticky: 'SOS / உதவி எண்',
    emergencyOperatorEta: 'ஆப்பரேட்டர் வருகை நேரம்',
    screenReaderEnabled: 'ஸ்கிரீன் ரீடர் பயன்முறை இயக்கப்பட்டது.',
    screenReaderDisabled: 'ஸ்கிரீன் ரீடர் பயன்முறை நிறுத்தப்பட்டது.',
    shellSupportOnline: 'நேரடி உதவி செயலில் உள்ளது: சராசரி பதில் 45 வினாடிகளுக்குள்.',
    shellSupportOffline: 'ஆஃப்லைன் பயன்முறை செயலில் உள்ளது: RFID, விருந்தினர் மாற்றம் மற்றும் சேமித்த QR உள்ளூரில் இயங்கும்.',
    shellSupportMaintenance: 'நிலைய உதவி தளத்தில் உள்ளது: SOS மூலம் உதவி பெறுங்கள்.',
    statusOnline: {
      label: 'ஆன்லைன்',
      title: 'அனைத்து கேபினெட்டுகளும் நேரடி மாற்றத்திற்கு தயார்.',
      message: 'சார்ஜிங், கட்டணம், மற்றும் நேரடி ஒதுக்கீடு இயல்பாக செயல்படுகின்றன.',
    },
    statusPartial: {
      label: 'பகுதி சேவை',
      title: 'குறைக்கப்பட்ட திறனுடன் சேவை இயங்குகிறது.',
      message: 'சில கேபினெட்டுகள் நிறுத்தப்பட்டுள்ளன, ஆனால் முக்கிய சேவை கிடைக்கிறது.',
    },
    statusMaintenance: {
      label: 'பராமரிப்பு',
      title: 'திட்டமிட்ட சேவை நடைபெறுகிறது.',
      message: 'தொழில்நுட்ப நிபுணர் பணியில் இருக்கும் போது நேரடி மாற்றம் தற்காலிகமாக நிறுத்தப்பட்டுள்ளது.',
    },
    powerModes: {
      solarHybrid: 'சோலார் + கிரிட்',
      gridPriority: 'கிரிட் முன்னுரிமை',
      batteryBuffer: 'பேட்டரி பஃபர் + கிரிட்',
      serviceBackup: 'சேவை காப்பு',
    },
    promotions: {
      saver: {
        eyebrow: 'இரவு சலுகை',
        title: 'இரவு 10 மணிக்குப் பிறகு 15% தள்ளுபடி',
        detail: 'குறைந்த நெரிசல் நேரத்தில் செயலில் உள்ள பயணிகள் திட்டத்திற்கு தானாக சேர்க்கப்படும்.',
        badge: 'தானாக சேர்க்கப்படும்',
      },
      fleet: {
        eyebrow: 'ஃப்ளீட் திட்டம்',
        title: 'டெலிவரி ரைடர்களுக்கு மாத வரம்பு',
        detail: 'நிலையான பில், முன்னுரிமை பேட்டரி ஒதுக்கீடு, மற்றும் GST ஏற்றுமதி.',
        badge: 'ஃப்ளீட்டிற்கு',
      },
      rescue: {
        eyebrow: 'மழைக்கால மீட்பு',
        title: 'ஆப்பரேட்டர் அனுப்புதல் உட்பட',
        detail: 'புயல் காலங்களில் சாலை உதவி மற்றும் அவசர திறப்பு ஆதரவு.',
        badge: 'காலவரையறை',
      },
    },
  },
  te: {
    heroTitle: 'మీ బ్యాటరీ స్వాప్ ప్రారంభించండి.',
    heroSubtitle: 'ప్రారంభించడానికి ట్యాప్ చేయండి. ఎక్కువ స్వాప్‌లు 60 సెకన్లలో పూర్తవుతాయి.',
    stationReady: 'స్టేషన్ సిద్ధంగా ఉంది',
    actionStartSwap: 'స్వాప్ ప్రారంభించండి',
    actionOfflineSwap: 'ఆఫ్లైన్‌లో కొనసాగించండి',
    actionUnavailable: 'తాత్కాలికంగా అందుబాటులో లేదు',
    ctaOnlineHint: 'ఈ స్టేషన్‌లో లైవ్ స్వాప్ కేటాయింపు అందుబాటులో ఉంది.',
    ctaDegradedHint: 'నెట్‌వర్క్ మళ్లీ ప్రయత్నిస్తోంది. RFID మరియు సేవ్ చేసిన QR ఇంకా పనిచేస్తాయి.',
    ctaOfflineHint: 'ఆఫ్లైన్ మోడ్ కొనసాగుతోంది. సింక్ పూర్తయ్యే వరకు RFID లేదా గెస్ట్ యాక్సెస్ ఉపయోగించండి.',
    ctaMaintenanceHint: 'సర్వీస్ టీమ్ సైట్‌లో ఉంది. సహాయం కోసం SOS నొక్కండి.',
    availabilityLabel: 'అందుబాటు',
    readyNow: 'ఇప్పుడే సిద్ధం',
    cabinetLabel: 'క్యాబినెట్',
    cabinetStable: 'స్థిరంగా',
    statusWidgetsLabel: 'లైవ్ స్టేషన్ స్థితి',
    clockLabel: 'గడియారం',
    ambientLabel: 'వాతావరణం',
    powerLabel: 'గ్రిడ్ పవర్',
    connectivityLabel: 'కనెక్టివిటీ',
    connectivityOnline: 'ఆన్‌లైన్',
    connectivityDegraded: 'మళ్లీ ప్రయత్నిస్తోంది',
    connectivityOffline: 'ఆఫ్లైన్ మోడ్',
    connectivityOnlineNote: 'క్లౌడ్ సింక్, చెల్లింపులు, మరియు లైవ్ ఇన్వెంటరీ తనిఖీలు సరిగా ఉన్నాయి.',
    connectivityDegradedNote: 'చిన్న రీట్రైలు జరుగుతున్నాయి. క్యాష్డ్ ఆత్ మార్గాలు అందుబాటులో ఉన్నాయి.',
    connectivityOfflineNote: 'క్లౌడ్ సింక్ ఆగిపోయింది. సేవ్ చేసిన QR, RFID మరియు గెస్ట్ మోడ్ అందుబాటులో ఉన్నాయి.',
    queueLabel: 'క్యూలో ఉన్న సింక్‌లు',
    queueEmpty: 'పెండింగ్ సింక్ లేదు',
    fallbackRfid: 'RFID ఉపయోగించండి',
    fallbackGuest: 'గెస్ట్ స్వాప్',
    accessibilityLabel: 'అందుబాటు సౌలభ్యం',
    highContrastLabel: 'హై కాంట్రాస్ట్',
    largeTextLabel: 'పెద్ద అక్షరాలు',
    screenReaderLabel: 'స్క్రీన్ రీడర్',
    languageLabel: 'భాష',
    languageUpdated: 'భాష మార్చబడింది.',
    emergencyLabel: 'అత్యవసరం',
    emergencyTitle: 'అత్యవసర హెల్ప్‌లైన్',
    emergencyDetail: 'ఇరుక్కున్న తలుపులు, పొగ హెచ్చరికలు లేదా రైడర్ సహాయం కోసం ఎప్పుడూ అందుబాటులో ఉంటుంది.',
    emergencyCallNow: 'ఆపరేటర్‌కు కాల్ చేయండి',
    emergencySticky: 'SOS / హెల్ప్‌లైన్',
    emergencyOperatorEta: 'ఆపరేటర్ ప్రతిస్పందన సమయం',
    screenReaderEnabled: 'స్క్రీన్ రీడర్ మోడ్ ఆన్ అయింది.',
    screenReaderDisabled: 'స్క్రీన్ రీడర్ మోడ్ ఆఫ్ అయింది.',
    shellSupportOnline: 'సపోర్ట్ లైవ్‌లో ఉంది: సగటు స్పందన 45 సెకన్లలోపు.',
    shellSupportOffline: 'ఆఫ్లైన్ మోడ్ యాక్టివ్‌లో ఉంది: RFID, గెస్ట్ స్వాప్ మరియు సేవ్ చేసిన QR స్థానికంగా పనిచేస్తాయి.',
    shellSupportMaintenance: 'స్టేషన్ సపోర్ట్ సైట్‌లో ఉంది: SOS ద్వారా సహాయం పొందండి.',
    statusOnline: {
      label: 'ఆన్‌లైన్',
      title: 'అన్ని క్యాబినెట్లు లైవ్ స్వాప్‌లకు సిద్ధంగా ఉన్నాయి.',
      message: 'చార్జింగ్, చెల్లింపులు, మరియు లైవ్ అసైన్‌మెంట్ సాధారణంగా పనిచేస్తున్నాయి.',
    },
    statusPartial: {
      label: 'పాక్షిక సేవ',
      title: 'తగ్గిన సామర్థ్యంతో సేవ కొనసాగుతోంది.',
      message: 'కొన్ని క్యాబినెట్లు ఆగిపోయినా, ప్రధాన స్వాప్ సేవ అందుబాటులో ఉంది.',
    },
    statusMaintenance: {
      label: 'నిర్వహణ',
      title: 'ప్లాన్ చేసిన సేవ కొనసాగుతోంది.',
      message: 'టెక్నీషియన్ పని చేస్తున్నప్పుడు నేరుగా స్వాప్ ప్రారంభం తాత్కాలికంగా ఆగింది.',
    },
    powerModes: {
      solarHybrid: 'సోలార్ + గ్రిడ్',
      gridPriority: 'గ్రిడ్ ప్రాధాన్యం',
      batteryBuffer: 'బ్యాటరీ బఫర్ + గ్రిడ్',
      serviceBackup: 'సర్వీస్ బ్యాకప్',
    },
    promotions: {
      saver: {
        eyebrow: 'నైట్ సేవర్',
        title: 'రాత్రి 10 తర్వాత 15% తగ్గింపు',
        detail: 'తక్కువ డిమాండ్ సమయంలో యాక్టివ్ కమ్యూటర్ ప్లాన్‌కు ఆటోమేటిక్‌గా వర్తిస్తుంది.',
        badge: 'ఆటో అప్లై',
      },
      fleet: {
        eyebrow: 'ఫ్లీట్ ప్లాన్',
        title: 'డెలివరీ రైడర్లకు నెలవారీ పరిమితి',
        detail: 'నిశ్చిత బిల్లు, ప్రాధాన్య బ్యాటరీ హోల్డ్, మరియు GST ఎగుమతి.',
        badge: 'ఫ్లీట్‌కు అనుకూలం',
      },
      rescue: {
        eyebrow: 'మాన్సూన్ రెస్క్యూ',
        title: 'ఆపరేటర్ డిస్పాచ్‌తో',
        detail: 'వర్షకాలంలో రోడ్‌సైడ్ సహాయం మరియు అత్యవసర అన్‌లాక్ సపోర్ట్.',
        badge: 'సీజనల్',
      },
    },
  },
  kn: {
    heroTitle: 'ನಿಮ್ಮ ಬ್ಯಾಟರಿ ಸ್ವಾಪ್ ಪ್ರಾರಂಭಿಸಿ.',
    heroSubtitle: 'ಪ್ರಾರಂಭಿಸಲು ಟ್ಯಾಪ್ ಮಾಡಿ. ಹೆಚ್ಚಿನ ಸ್ವಾಪ್‌ಗಳು 60 ಸೆಕೆಂಡುಗಳಲ್ಲಿ ಪೂರ್ಣಗೊಳ್ಳುತ್ತವೆ.',
    stationReady: 'ಸ್ಟೇಷನ್ ಸಿದ್ಧವಾಗಿದೆ',
    actionStartSwap: 'ಸ್ವಾಪ್ ಪ್ರಾರಂಭಿಸಿ',
    actionOfflineSwap: 'ಆಫ್‌ಲೈನ್‌ನಲ್ಲಿ ಮುಂದುವರಿಸಿ',
    actionUnavailable: 'ತಾತ್ಕಾಲಿಕವಾಗಿ ಲಭ್ಯವಿಲ್ಲ',
    ctaOnlineHint: 'ಈ ಸ್ಟೇಷನ್‌ನಲ್ಲಿ ಲೈವ್ ಸ್ವಾಪ್ ಹಂಚಿಕೆ ಲಭ್ಯವಿದೆ.',
    ctaDegradedHint: 'ನೆಟ್‌ವರ್ಕ್ ಮರುಪ್ರಯತ್ನಿಸುತ್ತಿದೆ. RFID ಮತ್ತು ಉಳಿಸಿದ QR ಇನ್ನೂ ಕೆಲಸ ಮಾಡುತ್ತವೆ.',
    ctaOfflineHint: 'ಆಫ್‌ಲೈನ್ ಮೋಡ್ ಸಕ್ರಿಯವಾಗಿದೆ. ಸಿಂಕ್ ಆಗುವವರೆಗೆ RFID ಅಥವಾ ಅತಿಥಿ ಪ್ರವೇಶ ಬಳಸಿ.',
    ctaMaintenanceHint: 'ಸೇವಾ ತಂಡ ಸ್ಥಳದಲ್ಲಿದೆ. ಸಹಾಯಕ್ಕಾಗಿ SOS ಒತ್ತಿರಿ.',
    availabilityLabel: 'ಲಭ್ಯತೆ',
    readyNow: 'ಈಗ ಸಿದ್ಧ',
    cabinetLabel: 'ಕ್ಯಾಬಿನೆಟ್',
    cabinetStable: 'ಸ್ಥಿರ',
    statusWidgetsLabel: 'ಲೈವ್ ಸ್ಟೇಷನ್ ಸ್ಥಿತಿ',
    clockLabel: 'ಗಡಿಯಾರ',
    ambientLabel: 'ಪರಿಸರ',
    powerLabel: 'ಗ್ರಿಡ್ ಪವರ್',
    connectivityLabel: 'ಕನೆಕ್ಟಿವಿಟಿ',
    connectivityOnline: 'ಆನ್‌ಲೈನ್',
    connectivityDegraded: 'ಮರುಪ್ರಯತ್ನ',
    connectivityOffline: 'ಆಫ್‌ಲೈನ್ ಮೋಡ್',
    connectivityOnlineNote: 'ಕ್ಲೌಡ್ ಸಿಂಕ್, ಪಾವತಿಗಳು ಮತ್ತು ಲೈವ್ ಇನ್‌ವೆಂಟರಿ ಪರಿಶೀಲನೆಗಳು ಆರೋಗ್ಯಕರವಾಗಿವೆ.',
    connectivityDegradedNote: 'ಸಣ್ಣ ಮರುಪ್ರಯತ್ನಗಳು ನಡೆಯುತ್ತಿವೆ. ಕ್ಯಾಶ್ ಮಾಡಿದ ದೃಢೀಕರಣ ಮಾರ್ಗಗಳು ಲಭ್ಯವಿವೆ.',
    connectivityOfflineNote: 'ಕ್ಲೌಡ್ ಸಿಂಕ್ ತಾತ್ಕಾಲಿಕವಾಗಿ ನಿಂತಿದೆ. ಉಳಿಸಿದ QR, RFID ಮತ್ತು ಅತಿಥಿ ಮೋಡ್ ಲಭ್ಯವಿವೆ.',
    queueLabel: 'ಸರದಿಯ ಸಿಂಕ್‌ಗಳು',
    queueEmpty: 'ಬಾಕಿ ಸಿಂಕ್ ಇಲ್ಲ',
    fallbackRfid: 'RFID ಬಳಸಿ',
    fallbackGuest: 'ಅತಿಥಿ ಸ್ವಾಪ್',
    accessibilityLabel: 'ಪ್ರವೇಶಾರ್ಹತೆ',
    highContrastLabel: 'ಹೈ ಕಾಂಟ್ರಾಸ್ಟ್',
    largeTextLabel: 'ದೊಡ್ಡ ಅಕ್ಷರ',
    screenReaderLabel: 'ಸ್ಕ್ರೀನ್ ರೀಡರ್',
    languageLabel: 'ಭಾಷೆ',
    languageUpdated: 'ಭಾಷೆ ನವೀಕರಿಸಲಾಗಿದೆ.',
    emergencyLabel: 'ತುರ್ತು',
    emergencyTitle: 'ತುರ್ತು ಸಹಾಯವಾಣಿ',
    emergencyDetail: 'ಅಟಕಿದ ಬಾಗಿಲುಗಳು, ಹೊಗೆ ಎಚ್ಚರಿಕೆ ಅಥವಾ ರೈಡರ್ ಸಹಾಯಕ್ಕಾಗಿ ಯಾವಾಗಲೂ ಲಭ್ಯ.',
    emergencyCallNow: 'ಆಪರೇಟರ್‌ಗೆ ಕರೆ ಮಾಡಿ',
    emergencySticky: 'SOS / ಸಹಾಯವಾಣಿ',
    emergencyOperatorEta: 'ಆಪರೇಟರ್ ಪ್ರತಿಕ್ರಿಯೆ ಸಮಯ',
    screenReaderEnabled: 'ಸ್ಕ್ರೀನ್ ರೀಡರ್ ಮೋಡ್ ಆನ್ ಆಗಿದೆ.',
    screenReaderDisabled: 'ಸ್ಕ್ರೀನ್ ರೀಡರ್ ಮೋಡ್ ಆಫ್ ಆಗಿದೆ.',
    shellSupportOnline: 'ಸಹಾಯ ಲೈವ್‌ನಲ್ಲಿ ಇದೆ: ಸರಾಸರಿ ಪ್ರತಿಕ್ರಿಯೆ 45 ಸೆಕೆಂಡುಗಳೊಳಗೆ.',
    shellSupportOffline: 'ಆಫ್‌ಲೈನ್ ಮೋಡ್ ಸಕ್ರಿಯವಾಗಿದೆ: RFID, ಅತಿಥಿ ಸ್ವಾಪ್ ಮತ್ತು ಉಳಿಸಿದ QR ಸ್ಥಳೀಯವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ.',
    shellSupportMaintenance: 'ಸ್ಟೇಷನ್ ಸಹಾಯ ಸ್ಥಳದಲ್ಲಿದೆ: SOS ಮೂಲಕ ಸಹಾಯ ಪಡೆಯಿರಿ.',
    statusOnline: {
      label: 'ಆನ್‌ಲೈನ್',
      title: 'ಎಲ್ಲಾ ಕ್ಯಾಬಿನೆಟ್‌ಗಳು ಲೈವ್ ಸ್ವಾಪ್‌ಗೆ ಸಿದ್ಧವಾಗಿವೆ.',
      message: 'ಚಾರ್ಜಿಂಗ್, ಪಾವತಿಗಳು ಮತ್ತು ಲೈವ್ ಹಂಚಿಕೆ ಸಾಮಾನ್ಯವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿವೆ.',
    },
    statusPartial: {
      label: 'ಆಂಶಿಕ ಸೇವೆ',
      title: 'ಕಡಿಮೆ ಸಾಮರ್ಥ್ಯದೊಂದಿಗೆ ಸೇವೆ ನಡೆಯುತ್ತಿದೆ.',
      message: 'ಕೆಲವು ಕ್ಯಾಬಿನೆಟ್‌ಗಳು ವಿರಾಮದಲ್ಲಿದ್ದರೂ ಮುಖ್ಯ ಸ್ವಾಪ್ ಸೇವೆ ಲಭ್ಯವಿದೆ.',
    },
    statusMaintenance: {
      label: 'ನಿರ್ವಹಣೆ',
      title: 'ಯೋಜಿತ ಸೇವೆ ನಡೆಯುತ್ತಿದೆ.',
      message: 'ತಂತ್ರಜ್ಞರು ಕೆಲಸ ಮಾಡುತ್ತಿರುವಾಗ ನೇರ ಸ್ವಾಪ್ ಪ್ರಾರಂಭ ತಾತ್ಕಾಲಿಕವಾಗಿ ನಿಲ್ಲಿಸಲಾಗಿದೆ.',
    },
    powerModes: {
      solarHybrid: 'ಸೋಲಾರ್ + ಗ್ರಿಡ್',
      gridPriority: 'ಗ್ರಿಡ್ ಆದ್ಯತೆ',
      batteryBuffer: 'ಬ್ಯಾಟರಿ ಬಫರ್ + ಗ್ರಿಡ್',
      serviceBackup: 'ಸೇವಾ ಬ್ಯಾಕಪ್',
    },
    promotions: {
      saver: {
        eyebrow: 'ನೈಟ್ ಸೇವರ್',
        title: 'ರಾತ್ರಿ 10 ನಂತರ 15% ರಿಯಾಯಿತಿ',
        detail: 'ಕಡಿಮೆ ಬೇಡಿಕೆಯ ಸಮಯದಲ್ಲಿ ಸಕ್ರಿಯ ಕಮ್ಯೂಟರ್ ಯೋಜನೆಗೆ ಸ್ವಯಂ ಅನ್ವಯವಾಗುತ್ತದೆ.',
        badge: 'ಸ್ವಯಂ ಅನ್ವಯ',
      },
      fleet: {
        eyebrow: 'ಫ್ಲೀಟ್ ಯೋಜನೆ',
        title: 'ಡೆಲಿವರಿ ರೈಡರ್‌ಗಳಿಗೆ ಮಾಸಿಕ ಮಿತಿ',
        detail: 'ಸ್ಥಿರ ಬಿಲ್, ಆದ್ಯತೆಯ ಬ್ಯಾಟರಿ ಹೋಲ್ಡ್ ಮತ್ತು GST ರಫ್ತು.',
        badge: 'ಫ್ಲೀಟ್‌ಗೆ',
      },
      rescue: {
        eyebrow: 'ಮಳೆಗಾಲ ರಕ್ಷಣೆ',
        title: 'ಆಪರೇಟರ್ ಡಿಸ್ಪ್ಯಾಚ್ ಒಳಗೊಂಡಿದೆ',
        detail: 'ಮಳೆಯ ಸಮಯದಲ್ಲಿ ರಸ್ತೆಬದಿ ಸಹಾಯ ಮತ್ತು ತುರ್ತು ಅನ್ಲಾಕ್ ಬೆಂಬಲ.',
        badge: 'ಹಂಗಾಮಿ',
      },
    },
  },
  bn: {
    heroTitle: 'আপনার ব্যাটারি সোয়াপ শুরু করুন।',
    heroSubtitle: 'শুরু করতে ট্যাপ করুন। বেশিরভাগ সোয়াপ 60 সেকেন্ডের মধ্যে শেষ হয়।',
    stationReady: 'স্টেশন প্রস্তুত',
    actionStartSwap: 'সোয়াপ শুরু করুন',
    actionOfflineSwap: 'অফলাইনে চালিয়ে যান',
    actionUnavailable: 'অস্থায়ীভাবে উপলব্ধ নয়',
    ctaOnlineHint: 'এই স্টেশনে লাইভ সোয়াপ বরাদ্দ চালু আছে।',
    ctaDegradedHint: 'নেটওয়ার্ক আবার চেষ্টা করছে। RFID এবং সেভ করা QR এখনও কাজ করবে।',
    ctaOfflineHint: 'অফলাইন মোড চালু আছে। সিঙ্ক শেষ হওয়া পর্যন্ত RFID বা গেস্ট অ্যাক্সেস ব্যবহার করুন।',
    ctaMaintenanceHint: 'সার্ভিস টিম সাইটে আছে। সাহায্যের জন্য SOS চাপুন।',
    availabilityLabel: 'উপলব্ধ',
    readyNow: 'এখন প্রস্তুত',
    cabinetLabel: 'ক্যাবিনেট',
    cabinetStable: 'স্থিতিশীল',
    statusWidgetsLabel: 'লাইভ স্টেশন অবস্থা',
    clockLabel: 'ঘড়ি',
    ambientLabel: 'পরিবেশ',
    powerLabel: 'গ্রিড পাওয়ার',
    connectivityLabel: 'সংযোগ',
    connectivityOnline: 'অনলাইন',
    connectivityDegraded: 'পুনরায় চেষ্টা',
    connectivityOffline: 'অফলাইন মোড',
    connectivityOnlineNote: 'ক্লাউড সিঙ্ক, পেমেন্ট এবং লাইভ ইনভেন্টরি ঠিকভাবে চলছে।',
    connectivityDegradedNote: 'স্বল্প রিট্রাই চলছে। ক্যাশ করা অথ পথগুলো চালু আছে।',
    connectivityOfflineNote: 'ক্লাউড সিঙ্ক থেমে আছে। সেভ করা QR, RFID এবং গেস্ট মোড চালু আছে।',
    queueLabel: 'কিউতে থাকা সিঙ্ক',
    queueEmpty: 'কোনও মুলতুবি সিঙ্ক নেই',
    fallbackRfid: 'RFID ব্যবহার করুন',
    fallbackGuest: 'গেস্ট সোয়াপ',
    accessibilityLabel: 'সহজপ্রাপ্যতা',
    highContrastLabel: 'হাই কনট্রাস্ট',
    largeTextLabel: 'বড় লেখা',
    screenReaderLabel: 'স্ক্রিন রিডার',
    languageLabel: 'ভাষা',
    languageUpdated: 'ভাষা পরিবর্তন হয়েছে।',
    emergencyLabel: 'জরুরি',
    emergencyTitle: 'জরুরি হেল্পলাইন',
    emergencyDetail: 'আটকে যাওয়া দরজা, ধোঁয়া সতর্কতা বা রাইডার সহায়তার জন্য সবসময় উপলব্ধ।',
    emergencyCallNow: 'অপারেটরকে কল করুন',
    emergencySticky: 'SOS / হেল্পলাইন',
    emergencyOperatorEta: 'অপারেটর সাড়া দেওয়ার সময়',
    screenReaderEnabled: 'স্ক্রিন রিডার মোড চালু হয়েছে।',
    screenReaderDisabled: 'স্ক্রিন রিডার মোড বন্ধ হয়েছে।',
    shellSupportOnline: 'সাপোর্ট লাইভ আছে: গড় সাড়া 45 সেকেন্ডের মধ্যে।',
    shellSupportOffline: 'অফলাইন মোড সক্রিয়: RFID, গেস্ট সোয়াপ এবং সেভ করা QR লোকালি কাজ করছে।',
    shellSupportMaintenance: 'স্টেশন সাপোর্ট সাইটে আছে: SOS দিয়ে সহায়তা নিন।',
    statusOnline: {
      label: 'অনলাইন',
      title: 'সব ক্যাবিনেট লাইভ সোয়াপের জন্য প্রস্তুত।',
      message: 'চার্জিং, পেমেন্ট এবং লাইভ বরাদ্দ স্বাভাবিকভাবে চলছে।',
    },
    statusPartial: {
      label: 'আংশিক পরিষেবা',
      title: 'কম ক্ষমতায় পরিষেবা চলছে।',
      message: 'কিছু ক্যাবিনেট থেমে আছে, তবে মূল সোয়াপ পরিষেবা চলছে।',
    },
    statusMaintenance: {
      label: 'রক্ষণাবেক্ষণ',
      title: 'নির্ধারিত পরিষেবা চলছে।',
      message: 'টেকনিশিয়ান কাজ শেষ না করা পর্যন্ত সরাসরি সোয়াপ শুরু বন্ধ আছে।',
    },
    powerModes: {
      solarHybrid: 'সোলার + গ্রিড',
      gridPriority: 'গ্রিড অগ্রাধিকার',
      batteryBuffer: 'ব্যাটারি বাফার + গ্রিড',
      serviceBackup: 'সার্ভিস ব্যাকআপ',
    },
    promotions: {
      saver: {
        eyebrow: 'নাইট সেভার',
        title: 'রাত 10টার পরে 15% ছাড়',
        detail: 'কম চাহিদার সময় সক্রিয় কমিউটার প্ল্যানে স্বয়ংক্রিয়ভাবে প্রয়োগ হয়।',
        badge: 'স্বয়ংক্রিয়',
      },
      fleet: {
        eyebrow: 'ফ্লিট প্ল্যান',
        title: 'ডেলিভারি রাইডারদের জন্য মাসিক সীমা',
        detail: 'নির্দিষ্ট বিল, অগ্রাধিকার ব্যাটারি হোল্ড এবং GST এক্সপোর্ট।',
        badge: 'ফ্লিটের জন্য',
      },
      rescue: {
        eyebrow: 'বর্ষা সহায়তা',
        title: 'অপারেটর ডিসপ্যাচসহ',
        detail: 'ঝড়ের সময় রাস্তার পাশে সহায়তা এবং জরুরি আনলক সাপোর্ট।',
        badge: 'মৌসুমি',
      },
    },
  },
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function roundToOneDecimal(value: number) {
  return Math.round(value * 10) / 10;
}

function pickWeighted<T>(entries: Array<{ value: T; weight: number }>) {
  const totalWeight = entries.reduce((sum, entry) => sum + entry.weight, 0);
  let threshold = Math.random() * totalWeight;

  for (const entry of entries) {
    threshold -= entry.weight;
    if (threshold <= 0) {
      return entry.value;
    }
  }

  return entries[entries.length - 1].value;
}

export function getStationLabel(station: StationProfile) {
  return `Station ${station.stationCode} • ${station.locality}, ${station.city}`;
}

export function getStationProfile(seed = Date.now()) {
  return STATIONS[seed % STATIONS.length];
}

export function getLocalizedCopy(languageCode: LanguageCode) {
  return COPY[languageCode];
}

export function getLocalizedPromotions(copy: LocalizedCopy): PromotionCard[] {
  return [
    { id: 'saver', accent: 'var(--color-secondary)', ...copy.promotions.saver },
    { id: 'fleet', accent: 'var(--color-accent)', ...copy.promotions.fleet },
    { id: 'rescue', accent: '#F3CFA4', ...copy.promotions.rescue },
  ];
}

export function createNominalTelemetry(): TelemetryState {
  return {
    availableBatteries: 16,
    totalBatteries: 24,
    ambientTempC: 28.2,
    cabinetTempC: 26.4,
    powerMode: 'solarHybrid',
    connectivity: 'online',
    operationalStatus: 'online',
    offlineQueue: 0,
    baysInService: 12,
    etaMinutes: 0,
    maintenanceTicksRemaining: 0,
  };
}

function getDaytimePowerMode(now: Date, availableBatteries: number, connectivity: ConnectivityMode): PowerMode {
  if (connectivity === 'offline') {
    return 'batteryBuffer';
  }

  const hour = now.getHours();
  if (hour >= 10 && hour <= 16) {
    return availableBatteries > 14 ? 'solarHybrid' : 'gridPriority';
  }

  if (hour >= 17 && hour <= 22) {
    return availableBatteries < 8 ? 'batteryBuffer' : 'gridPriority';
  }

  return 'gridPriority';
}

export function createInitialTelemetry(now: Date): TelemetryState {
  const availableBatteries = 10 + Math.floor(Math.random() * 7);
  const ambientTempC = roundToOneDecimal(24 + Math.random() * 8);
  const cabinetTempC = roundToOneDecimal(ambientTempC - 2 + Math.random() * 2.5);
  const connectivity = pickWeighted<ConnectivityMode>([
    { value: 'online', weight: 72 },
    { value: 'degraded', weight: 20 },
    { value: 'offline', weight: 8 },
  ]);
  const powerMode = getDaytimePowerMode(now, availableBatteries, connectivity);
  const operationalStatus: OperationalStatus = connectivity === 'offline'
    ? 'partial'
    : availableBatteries < 6
      ? 'partial'
      : 'online';

  return {
    availableBatteries,
    totalBatteries: 24,
    ambientTempC,
    cabinetTempC,
    powerMode,
    connectivity,
    operationalStatus,
    offlineQueue: connectivity === 'online' ? 0 : 2 + Math.floor(Math.random() * 5),
    baysInService: operationalStatus === 'online' ? 12 : 8 + Math.floor(Math.random() * 2),
    etaMinutes: operationalStatus === 'online' ? 0 : 4 + Math.floor(Math.random() * 5),
    maintenanceTicksRemaining: 0,
  };
}

export function advanceTelemetry(previous: TelemetryState, now: Date): TelemetryState {
  let connectivity = previous.connectivity;
  const connectivityRoll = Math.random();

  if (previous.connectivity === 'online') {
    if (connectivityRoll < 0.08) {
      connectivity = 'degraded';
    } else if (connectivityRoll < 0.1) {
      connectivity = 'offline';
    }
  } else if (previous.connectivity === 'degraded') {
    if (connectivityRoll < 0.18) {
      connectivity = 'offline';
    } else if (connectivityRoll < 0.62) {
      connectivity = 'online';
    }
  } else if (connectivityRoll < 0.48) {
    connectivity = 'degraded';
  } else if (connectivityRoll < 0.63) {
    connectivity = 'online';
  }

  const availableBatteries = clamp(
    previous.availableBatteries + pickWeighted([
      { value: -1, weight: 18 },
      { value: 0, weight: 52 },
      { value: 1, weight: 30 },
    ]),
    3,
    previous.totalBatteries,
  );

  const ambientTempC = roundToOneDecimal(
    clamp(previous.ambientTempC + (Math.random() * 0.7 - 0.35), 22.5, 36.8),
  );
  const cabinetTempC = roundToOneDecimal(
    clamp(previous.cabinetTempC + (Math.random() * 0.5 - 0.25), 21.5, 33.5),
  );

  let maintenanceTicksRemaining = Math.max(previous.maintenanceTicksRemaining - 1, 0);
  if (
    maintenanceTicksRemaining === 0
    && previous.operationalStatus !== 'maintenance'
    && connectivity !== 'offline'
    && Math.random() < 0.04
  ) {
    maintenanceTicksRemaining = 2 + Math.floor(Math.random() * 2);
  }

  const operationalStatus: OperationalStatus = maintenanceTicksRemaining > 0
    ? 'maintenance'
    : connectivity === 'offline' || availableBatteries < 6 || (connectivity === 'degraded' && previous.offlineQueue > 3)
      ? 'partial'
      : 'online';

  const offlineQueue = connectivity === 'online'
    ? clamp(previous.offlineQueue - (1 + Math.floor(Math.random() * 2)), 0, 18)
    : clamp(previous.offlineQueue + (1 + Math.floor(Math.random() * 2)), 1, 18);

  const baysInService = operationalStatus === 'maintenance'
    ? Math.floor(Math.random() * 3)
    : operationalStatus === 'partial'
      ? 7 + Math.floor(Math.random() * 3)
      : 11 + Math.floor(Math.random() * 2);

  const etaMinutes = operationalStatus === 'maintenance'
    ? 12 + Math.floor(Math.random() * 11)
    : operationalStatus === 'partial'
      ? 3 + Math.floor(Math.random() * 6)
      : 0;

  const powerMode = operationalStatus === 'maintenance'
    ? 'serviceBackup'
    : getDaytimePowerMode(now, availableBatteries, connectivity);

  return {
    ...previous,
    availableBatteries,
    ambientTempC,
    cabinetTempC,
    powerMode,
    connectivity,
    operationalStatus,
    offlineQueue,
    baysInService,
    etaMinutes,
    maintenanceTicksRemaining,
  };
}

export function getStatusBannerCopy(copy: LocalizedCopy, telemetry: TelemetryState): StatusBannerCopy {
  if (telemetry.operationalStatus === 'maintenance') {
    return copy.statusMaintenance;
  }

  if (telemetry.operationalStatus === 'partial') {
    return copy.statusPartial;
  }

  return copy.statusOnline;
}
