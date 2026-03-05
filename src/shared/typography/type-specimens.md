# Typography Specimens

## Primary Font
**Inter** — used for all UI text, data labels, and system messages.

```
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
```

## Scale

| Token      | Size  | Weight | Use                       |
|------------|-------|--------|---------------------------|
| display-xl | 48px  | 800    | Idle attract counter      |
| display-lg | 36px  | 700    | Screen titles             |
| heading    | 24px  | 600    | Section headings          |
| subhead    | 18px  | 600    | Card titles, labels       |
| body       | 16px  | 400    | Body text                 |
| body-sm    | 14px  | 400    | Secondary text            |
| caption    | 12px  | 500    | Timestamps, metadata      |
| mono       | 14px  | 400    | Log data, codes (monospace)|

## Line Heights
- Display: 1.2
- Heading: 1.3
- Body: 1.5
- Caption: 1.4

## Kiosk Considerations
- **Large text mode**: all tokens scale ×1.5
- **Minimum readable size**: 14px at arm's length (kiosk distance ~45 cm)
