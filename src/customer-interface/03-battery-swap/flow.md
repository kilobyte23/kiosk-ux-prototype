# Battery Slot & Swap — Flow

## Screens
1. **SlotMapScreen** — Cabinet slot map (green/amber/blue/red states)
2. **BatteryInfoScreen** — Health %, charge level, estimated range
3. **AutoAssignScreen** — System selects best available battery
4. **ManualSlotSelectScreen** — Manual override for slot selection
5. **SwapConfirmationScreen** — Old SoC → New SoC, estimated range gain
6. **SwapTimerScreen** — Countdown after door unlock, auto-cancel on timeout
7. **PostSwapReceiptScreen** — Summary + printable QR

## Transitions
- Auth success → SlotMap
- SlotMap → AutoAssign or ManualSelect
- Assign → BatteryInfo → SwapConfirmation
- Confirmation → SwapTimer (door unlocks)
- Timer complete → PostSwapReceipt → Payment
- Timer timeout → auto-cancel → Home
