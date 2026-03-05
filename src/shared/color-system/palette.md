# Color System — Palette

## Brand Colors
| Name      | Hex       | Usage                                 |
|-----------|-----------|---------------------------------------|
| Primary   | `#0A84FF` | CTAs, active states, links            |
| Secondary | `#30D158` | Success, available slots, confirmations|
| Accent    | `#FF9F0A` | Warnings, charging state, highlights  |

## Slot State Colors
| State     | Hex       | Glow Shadow                          |
|-----------|-----------|---------------------------------------|
| Available | `#30D158` | `0 0 20px rgba(48,209,88,0.4)`       |
| Charging  | `#FF9F0A` | `0 0 20px rgba(255,159,10,0.4)`      |
| Reserved  | `#0A84FF` | `0 0 20px rgba(10,132,255,0.4)`      |
| Fault     | `#FF453A` | `0 0 20px rgba(255,69,58,0.5)`       |

## Severity
| Level   | Hex       | Context                              |
|---------|-----------|---------------------------------------|
| Info    | `#64D2FF` | Informational messages               |
| Yellow  | `#FFD60A` | Mild temperature warning             |
| Orange  | `#FF9F0A` | Elevated temperature warning         |
| Red     | `#FF453A` | Critical / emergency                 |

## Dark Theme Surface
| Token        | Value                    |
|--------------|--------------------------|
| Background   | `#000000`                |
| Card         | `#1C1C1E`                |
| Elevated     | `#2C2C2E`                |
| Overlay      | `rgba(0, 0, 0, 0.6)`    |

## High Contrast Mode
All foreground text becomes `#FFFFFF`, all backgrounds become `#000000`, and interactive elements use outline-only styling with 3px borders.
