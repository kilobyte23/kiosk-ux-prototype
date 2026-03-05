# Alerts, Errors & Safety — Flow

## Screens
1. **TempWarningScreen** — Yellow / Orange / Red severity
2. **OvertempLockoutScreen** — Countdown until reset
3. **SlotJamErrorScreen** — Support ticket prompt
4. **FireSmokeOverlayScreen** — Full-screen emergency overlay
5. **PowerOutageScreen** — Limited service on battery backup
6. **TamperDetectionScreen** — CCTV recording indicator
7. **PostSwapFeedbackScreen** — Emoji or star rating

## Transitions
- Any screen → Emergency overlay (fire/smoke: highest priority)
- Temp warning → Lockout if threshold exceeded
- Slot jam → Support ticket → Home
- Post-swap → Feedback → Home
