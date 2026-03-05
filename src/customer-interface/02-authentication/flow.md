# Authentication & Access — Flow

## Screens
1. **QRScannerScreen** — Animated scan-line overlay, real-time feedback
2. **NFCTapScreen** — Proximity pulse animation
3. **MobileOTPScreen** — OTP countdown timer, auto-resend mechanism
4. **RFIDReaderScreen** — LED ring animation
5. **BiometricScreen** — Match confidence visual bar
6. **GuestModeScreen** — Limited swap quota display
7. **AccountNotFoundScreen** — Inline registration CTA

## Transitions
- Home → Auth method selection
- Auth success → Battery Swap (03-battery-swap)
- Auth failure → retry / Account Not Found
- Guest → limited flow with quota
