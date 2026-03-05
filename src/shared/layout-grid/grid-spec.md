# Layout Grid Specification

## Kiosk Display
- **Target resolution**: 1080 × 1920 px (portrait)
- **Orientation**: Portrait (vertical kiosk panel)

## Grid
| Property      | Value    |
|---------------|----------|
| Columns       | 12       |
| Gutter        | 16px     |
| Margin        | 24px     |
| Column width  | fluid    |

## Breakpoints (for admin dashboard)
| Name      | Width    | Columns |
|-----------|----------|---------|
| Mobile    | < 768px  | 4       |
| Tablet    | 768–1199 | 8       |
| Desktop   | ≥ 1200px | 12      |

## Safe Zones (kiosk)
- **Top safe area**: 48px (status bar / station banner)
- **Bottom safe area**: 72px (emergency helpline persistent bar)
- **Touch zone**: 80–1800px from top (shoulder-to-waist reachable range)

## Admin Dashboard
- Fixed sidebar: 240px
- Content area: fluid, min 800px
- Card grid: auto-fit, minmax(320px, 1fr)
