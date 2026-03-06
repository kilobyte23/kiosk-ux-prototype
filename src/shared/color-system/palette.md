# Color System — Palette

## Core Palette
| Name  | Hex       | Usage |
|-------|-----------|-------|
| Ink   | `#331D2C` | Base background, overlays, deep emphasis |
| Plum  | `#3F2E3E` | Cards, shells, elevated surfaces |
| Mauve | `#A78295` | Primary actions, active accents, progress |
| Cream | `#EFE1D1` | High-priority text, confirmation emphasis, bright UI moments |

## Derived Semantic Tokens
| Token      | Hex       | Context |
|------------|-----------|---------|
| Primary    | `#A78295` | Main CTA, selected state, key interactions |
| Secondary  | `#EFE1D1` | High-visibility controls, success emphasis |
| Highlight  | `#C6A7B6` | Secondary accents, active cards, motion cues |
| Warning    | `#D8C5BE` | Soft caution messaging, queue/wait states |
| Error      | `#6E4D5D` | Faults, lockouts, disruptive alerts |

## Slot State Mapping
| State     | Hex       |
|-----------|-----------|
| Available | `#EFE1D1` |
| Charging  | `#C6A7B6` |
| Reserved  | `#A78295` |
| Fault     | `#6E4D5D` |

## Surface System
| Token      | Value                  |
|------------|------------------------|
| Background | `#24151F`              |
| Card       | `#3F2E3E`              |
| Elevated   | `#594457`              |
| Overlay    | `rgba(51, 29, 44, 0.72)` |

## Usage Notes
- Keep the experience dark and atmospheric, with cream used sparingly for clarity and focus.
- Use mauve as the default interaction accent across customer flows.
- Reserve the cream button treatment for the most important action on a screen.
- Use repeated surface primitives instead of introducing one-off panel colors.
