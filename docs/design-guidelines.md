# Design Guidelines

## Visual Principles
1. **Dark-first** — Kiosk operates in varied lighting; dark theme reduces glare
2. **High contrast** — All text must pass WCAG AA contrast (4.5:1 minimum)
3. **Color-coded states** — Green/Amber/Blue/Red for slot states (consistent everywhere)
4. **Minimal chrome** — Maximum content area, minimum decorative elements
5. **Motion with purpose** — Animations guide attention, never distract

## Component Standards
- Buttons: 56px height minimum, 16px horizontal padding
- Cards: 12px border-radius, 16px internal padding
- Modals: centered, 80% max-width, overlay backdrop
- Icons: 24px standard, 32px for primary actions

## Kiosk-Specific
- Portrait orientation (1080 × 1920)
- Touch-optimized (no hover states on customer UI)
- 48px min touch targets (72px in glove mode)
- Arm-reach consideration: primary actions in 80–1800px vertical range
