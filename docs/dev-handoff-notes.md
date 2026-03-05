# Developer Handoff Notes

## Prototype → Production Mapping

| Prototype                     | Production                              |
|-------------------------------|-----------------------------------------|
| `src/customer-interface/`     | Kiosk application (Electron / embedded) |
| `src/admin-interface/`        | Local web dashboard (LAN-only)          |
| `src/shared/`                 | Shared component library / design system|
| `pages/` per module           | Route-level components                  |
| `components/` per module      | Feature-scoped components               |
| `flow.md`                     | State machine / flow specifications     |
| `design-tokens/`              | CSS custom properties / theme config    |

## Architecture Notes
- Each module is self-contained; can be independently developed and tested
- Shared components should be published as an internal package
- `flow.md` files should be converted to state machine definitions (e.g., XState)
- Design tokens JSON → CSS custom properties build step
- Animations: evaluate Lottie / Rive for production; GIFs are placeholder only

## Data Layer (not in prototype)
- Customer auth → backend API
- Slot states → MQTT / WebSocket real-time feed
- Payment → payment gateway SDK
- Admin data → local REST API + SQLite
