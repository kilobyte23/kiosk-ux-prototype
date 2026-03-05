# End-to-End Flow Map

## Customer Journey

```
┌──────────────┐
│  Idle Screen  │  ← Attract mode, availability counter
└──────┬───────┘
       ▼
┌──────────────┐
│  Auth Select  │  ← QR / NFC / OTP / RFID / Bio / Guest
└──────┬───────┘
       ▼
┌──────────────┐
│  Slot Map     │  ← Visual cabinet, slot states
└──────┬───────┘
       ▼
┌──────────────┐
│  Auto-Assign  │  ← Best battery or manual override
└──────┬───────┘
       ▼
┌──────────────┐
│  Battery Info │  ← Health, charge, range
└──────┬───────┘
       ▼
┌──────────────┐
│  Swap Confirm │  ← Old SoC → New SoC
└──────┬───────┘
       ▼
┌──────────────┐
│  Swap Timer   │  ← Door unlock, countdown
└──────┬───────┘
       ▼
┌──────────────┐
│  Payment      │  ← Wallet / UPI / Subscription
└──────┬───────┘
       ▼
┌──────────────┐
│  Receipt      │  ← Summary + QR
└──────┬───────┘
       ▼
┌──────────────┐
│  Feedback     │  ← Emoji / star rating
└──────┬───────┘
       ▼
┌──────────────┐
│  Idle Screen  │  ← Loop
└──────────────┘
```

## Admin Journey
Dashboard → Module → Page → Action → Confirm → Dashboard
