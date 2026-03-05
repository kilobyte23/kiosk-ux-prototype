# Home Screen & Idle State — Flow

## Screens
1. **IdleAttractScreen** — Default kiosk state: station name, live battery availability counter, animated attract loop
2. **StationStatusScreen** — Online / Maintenance / Partial Service banner

## Components
- **LanguageSelector** — Flag icons, ≥6 regional languages
- **AccessibilityToggle** — High contrast · Large text · Screen reader
- **PromotionalCarousel** — Plans & offers (non-intrusive overlay)
- **ConnectivityIndicator** — Network status + offline degradation
- **StatusWidgets** — Clock · Temperature · Grid power
- **EmergencyHelpline** — Persistent sticky UI element

## Transitions
- Idle → any Auth screen on user interaction
- Idle → Language change → Idle (re-render)
- Idle → Promotional carousel auto-rotate (5 s interval)
