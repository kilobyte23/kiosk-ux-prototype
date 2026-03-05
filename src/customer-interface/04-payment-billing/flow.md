# Payment & Billing — Flow

## Screens
1. **WalletBalanceScreen** — Balance with low-balance highlight
2. **CostBreakdownScreen** — Base fee, peak/off-peak, GST
3. **SubscriptionBadgeScreen** — Active plan tier, remaining swaps
4. **UPIPaymentScreen** — QR with auto-detection of completion
5. **OneTapConfirmScreen** — Buzzer/haptic feedback
6. **PaymentFailureScreen** — Retry + alternate methods
7. **CorporateBillingScreen** — Cost-center code entry
8. **TransactionHistoryScreen** — Last 5 swaps

## Transitions
- Swap confirmed → CostBreakdown → Payment method
- Payment success → Receipt → Home
- Payment failure → Retry / Alternate methods
