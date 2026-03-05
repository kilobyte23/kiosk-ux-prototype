# Battery-Swapping Kiosk — UX Prototype

> High-fidelity UX prototype for a 2-wheeler EV battery-swapping kiosk.
> Built with **React + TypeScript + Vite** — designed for easy stack migration later.

## Quick Start

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── customer-interface/        # Kiosk touchscreen UI (6 modules)
│   ├── 01-home-idle/
│   ├── 02-authentication/
│   ├── 03-battery-swap/
│   ├── 04-payment-billing/
│   ├── 05-alerts-errors-safety/
│   └── 06-accessibility-ux-polish/
│
├── admin-interface/           # LAN admin dashboard (6 modules)
│   ├── 01-local-dashboard/
│   ├── 02-bms-charging/
│   ├── 03-connectivity-network/
│   ├── 04-security-access/
│   ├── 05-diagnostics-maintenance/
│   └── 06-reporting-logs/
│
└── shared/                    # Design system & reusable pieces
    ├── components/
    ├── design-tokens/
    ├── color-system/
    ├── typography/
    ├── layout-grid/
    └── interaction-docs/
```

### Module Conventions

Every module follows the same internal layout:

| Folder        | Contents                                          |
|---------------|---------------------------------------------------|
| `pages/`      | Full-screen React components (one per screen)     |
| `components/` | Sub-components, states, widgets for this module   |
| `animations/` | GIFs / Lottie / CSS animation assets              |
| `assets/`     | Icons, illustrations, images specific to module   |
| `flow.md`     | Screen flow, transitions, and interaction notes   |

## User Groups

| Group      | Interface          | Access                            |
|------------|--------------------|-----------------------------------|
| Customers  | Kiosk touchscreen  | QR / NFC / OTP / RFID / Biometric |
| Admins     | LAN web dashboard  | Role-based (Tech / Manager / OEM) |

## Documentation

See the [`docs/`](./docs) folder:
- `project-overview.md` — Full project context
- `screen-inventory.md` — Master list of every screen
- `flow-map.md` — End-to-end user journey map
- `design-guidelines.md` — Visual & interaction standards
- `accessibility-spec.md` — WCAG compliance & kiosk-specific a11y
- `stakeholder-demo-guide.md` — How to walk through the prototype
- `dev-handoff-notes.md` — Mapping prototype → production
