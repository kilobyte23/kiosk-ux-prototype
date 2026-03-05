# Screen Inventory

## Customer Interface (34 screens)

### 01 — Home & Idle (2 pages, 6 components)
- IdleAttractScreen, StationStatusScreen
- LanguageSelector, AccessibilityToggle, PromotionalCarousel, ConnectivityIndicator, StatusWidgets, EmergencyHelpline

### 02 — Authentication (7 pages, 4 components)
- QRScannerScreen, NFCTapScreen, MobileOTPScreen, RFIDReaderScreen, BiometricScreen, GuestModeScreen, AccountNotFoundScreen
- OTPCountdown, ScanFeedback, MatchConfidenceBar, LimitedQuotaDisplay

### 03 — Battery Swap (7 pages, 5 components)
- SlotMapScreen, BatteryInfoScreen, AutoAssignScreen, ManualSlotSelectScreen, SwapConfirmationScreen, SwapTimerScreen, PostSwapReceiptScreen
- SlotStateIndicator, OccupancyRingChart, DoorFeedback, SoCComparison, SwapGuideSteps

### 04 — Payment & Billing (8 pages, 4 components)
- WalletBalanceScreen, CostBreakdownScreen, SubscriptionBadgeScreen, UPIPaymentScreen, OneTapConfirmScreen, PaymentFailureScreen, CorporateBillingScreen, TransactionHistoryScreen
- LowBalanceHighlight, PaymentAutoDetect, RetryPrompt, AlternatePaymentMethods

### 05 — Alerts, Errors & Safety (7 pages, 5 components)
- TempWarningScreen, OvertempLockoutScreen, SlotJamErrorScreen, FireSmokeOverlayScreen, PowerOutageScreen, TamperDetectionScreen, PostSwapFeedbackScreen
- SeverityGradient, LockoutCountdown, SupportTicketPrompt, CCTVIndicator, EmojiStarRating

### 06 — Accessibility & UX Polish (4 pages, 3 components)
- HighContrastScreen, LargeTextScreen, RainGloveScreen, SunlightAntiglareScreen
- VoiceGuidanceToggle, SessionTimeoutWarning, BrightnessAutoAdjust

---

## Admin Interface (48 screens)

### 01 — Local Dashboard (8 pages, 4 components)
### 02 — BMS & Charging (8 pages, 4 components)
### 03 — Connectivity & Network (8 pages, 4 components)
### 04 — Security & Access (8 pages, 4 components)
### 05 — Diagnostics & Maintenance (8 pages, 4 components)
### 06 — Reporting & Logs (8 pages, 3 components)

**Total: ~82 pages + ~46 components = 128 React components**
