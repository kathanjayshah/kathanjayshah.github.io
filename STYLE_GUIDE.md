# Style Guide: SpaceX-inspired portfolio

Living design document for the portfolio.  
**Update this file whenever you add colors, type, spacing, imagery, or UI patterns.**

Last updated: 2026-10-01

Reference look: [spacex.com](https://www.spacex.com) (visual language only, not assets or branding).

---

## Direction

**Mood:** SpaceX-style hero with launch photo through the name, then a normal white content page.  
**Preference:** Light content, dark fixed header.

### Avoid

- Em dash (`—`) and en dash (`–`). Use comma, colon, period, or hyphen (`-`).
- Warm copper themes, engineering grids, sandwich galleries, soft "AI portfolio" cards
- Purple gradients, glass stacks, pill clusters, skill chip walls
- Custom display / mono fonts (use Helvetica stack)

---

## Copy

Never write `—` or `–`.

---

## Color

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#ffffff` | Content page |
| `--bg-soft` | `#f7f7f5` | Company panels |
| `--text` | `#1a1a1a` | Content text |
| `--muted` | `#5c5c5c` | Secondary text |
| `--dim` | `#8a8a8a` | Meta |
| `--accent` | `#2557a7` | Links |
| `--hero-text` | `#ffffff` | Hero type on photo |

---

## Typography

```css
--font-sans: Helvetica, Arial, "Helvetica Neue", -apple-system, BlinkMacSystemFont,
  "Segoe UI", sans-serif;
```

Nav and section titles: small, uppercase, wide letter-spacing.  
Hero name: large, uppercase, tight tracking.

---

## Imagery

Background file: `src/Assets/background/falcon9-launch.jpg` (also copied to `public/background/`)

- Subject: SpaceX Starship Flight 14 launch
- Source: Space.com article image (SpaceX credit); used with site owner permission
- Article: https://www.space.com/space-exploration/launches-spacecraft/starship-just-reached-orbit-for-the-1st-time-whats-next-for-the-spacex-megarocket
- Size used: 2560 x 1440
- Treatment: hero-only full-viewport background under the fixed nav (`background-size: cover` on `.hero`). Content below uses white `--bg` plus a quiet engineering grid.

When replacing the launch photo: keep HD and update the Contact credit line.

### Engineering grid (white content)

| Token | Value | Use |
| --- | --- | --- |
| `--grid-minor` | `24px` | Fine cell |
| `--grid-major` | `120px` | Major cell |
| `--grid-line` | `rgba(26, 26, 26, 0.05)` | Fine lines |
| `--grid-line-strong` | `rgba(26, 26, 26, 0.09)` | Major lines |

Applied on `.page-content` only, not the hero.

---

## Components

### Header
Fixed solid black bar (`position: fixed`) with a thin white bottom edge. Hero image starts at the top of the page and runs under the nav, so there is no gap when scrolling.

### Hero
Near full viewport over the launch image. Name, short lead, two square outlined CTAs (filled + ghost).

### Sections
Text only over the background photo. No boxed panels or white borders.

### Experience / Education
Plain stacked company rows on the white page, no panel background and no connector line. Plain company icons. Local logos: `ground-control.svg`, `opas-mobile.png`.

### About + Skills
Two-column layout on desktop (About left, Skills right). Stacks under 720px. Skills icons sit in a 4-column grid with small `28px` icons and labels.

---

## How to extend

1. Update tokens in `src/styles/tokens.css`
2. Document here
3. Bump **Last updated**
