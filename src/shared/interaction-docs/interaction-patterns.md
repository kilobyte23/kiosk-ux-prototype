# Interaction Patterns

## Global Patterns

### Touch Targets
- **Minimum**: 48 × 48 px (WCAG 2.5.8)
- **Comfortable**: 56 × 56 px (default)
- **Rain / Glove mode**: 72 × 72 px

### Transitions
| Type              | Duration | Easing                |
|-------------------|----------|-----------------------|
| Page navigation   | 300ms    | ease-in-out           |
| Modal appear      | 250ms    | ease-out              |
| Modal dismiss     | 200ms    | ease-in               |
| Button press      | 100ms    | ease-out              |
| Slot state change | 400ms    | cubic-bezier(0.4,0,0.2,1) |
| Alert appear      | 150ms    | ease-out              |
| Carousel slide    | 500ms    | ease-in-out           |

### Feedback
- **Tap confirmation**: visual ripple + optional buzzer cue
- **Error**: red border flash (150ms) + shake animation (300ms)
- **Success**: green check scale-in (250ms) + optional buzzer
- **Loading**: pulsing ring indicator (infinite, 1.5s cycle)

### Session Management
- **Timeout**: 60 seconds of inactivity
- **Warning**: shown at 15 seconds remaining
- **Reset**: returns to idle attract screen

## Customer-Specific Patterns
- **Back navigation**: always available via persistent back button (top-left)
- **Cancel**: available at every step, requires single-tap confirmation
- **Language switch**: persists for the entire session

## Admin-Specific Patterns
- **Sidebar navigation**: collapsible, always visible
- **Breadcrumb**: shown on all pages
- **Destructive actions**: require explicit confirmation modal
- **Data refresh**: live data auto-refreshes every 5s; manual refresh available
