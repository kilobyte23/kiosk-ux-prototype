# Stakeholder Demo Guide

## Setup
1. `npm install && npm run dev`
2. Open browser to localhost URL
3. Recommended: Chrome DevTools → Toggle device toolbar → Custom: 1080 × 1920

## Demo Flow (15 minutes)

### Act 1: Customer Experience (8 min)
1. **Idle Screen** — Show attract animation, language selector, status widgets
2. **Authentication** — Walk through QR scan → success flow
3. **Battery Swap** — Show slot map → auto-assign → swap confirmation → timer
4. **Payment** — Cost breakdown → UPI payment → success receipt
5. **Feedback** — Post-swap rating

### Act 2: Edge Cases (3 min)
6. **Alerts** — Temperature warning escalation (yellow → orange → red)
7. **Error Recovery** — Slot jam → support ticket
8. **Accessibility** — Toggle high contrast, large text, glove mode

### Act 3: Admin Dashboard (4 min)
9. **Dashboard** — System resource monitor, process health
10. **BMS** — Charging profiles, thermal heatmap
11. **Diagnostics** — Self-test, backup/restore
12. **Reporting** — Transaction logs, energy consumption

## Key Talking Points
- All screens are live React components (not static mockups)
- Every interaction state is prototype-able
- Folder structure maps directly to production architecture
