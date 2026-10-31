# Collectava

A full stack ecommerce web app for **Collectava**, a custom PC building business. The project is being built step by step as part of a Full Stack Engineering course.

## About

Collectava builds custom PCs and offers PC services. The goal of this project is to build the Collectava storefront step by step: first the frontend, then the backend, then connect them into one full stack app. Accessibility is a priority from the start, so the site works for everyone, including people who use a keyboard or a screen reader.

## Project status

| Phase | Scope | Status |
|---|---|---|
| 1 | Landing page: semantic HTML, styling, and accessibility (header and hero done; products, testimonials, newsletter, and footer next) | In progress |
| 2 | Frontend: interactive features and remaining landing-page sections | Planned |
| 3 | Backend: server, API, database | Planned |
| 4 | Full stack integration: connect frontend to backend (for example, newsletter signups and products) | Planned |

## Features

### Implemented

- Semantic header with a logo icon, the Collectava brand name, and primary navigation
- Responsive header layout that places navigation on a second row on small screens
- Sticky header styling and Google Fonts (Chakra Petch and Inter)
- Semantic navigation landmark with a descriptive accessible name
- Hero section with a headline, subheading, call-to-action link, trust line, and hero image
- Responsive hero layout: two columns on desktop, one column on small screens
- Color palette defined as CSS variables, with section backgrounds for depth

### Planned

- Landing-page sections for the product showcase, testimonials, newsletter signup, and footer content
- Products loaded from a backend API instead of hardcoded HTML
- Newsletter signups saved to a database
- _More features to be decided as the project grows_

## Accessibility

- [x] Semantic page landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`)
- [x] Descriptive accessible name for primary navigation
- [x] Descriptive `alt` text and explicit `width`/`height` on the hero image
- [x] Hero call-to-action keeps a 44px minimum target size and grows with larger text
- [x] Visible `:focus-visible` outlines defined for links, buttons, and form fields
- [x] Color palette chosen with text contrast of at least 4.5:1
- [ ] Semantic sections and logical heading order as landing-page content is added
- [ ] Meaningful `alt` text on all images (hero done; product images next)
- [ ] Every form control has an associated `<label>`
- [ ] ARIA attributes on interactive elements (`aria-label`, `aria-describedby`, `aria-live`)
- [ ] Fully usable with a keyboard only, with clearly visible focus styles
- [ ] Text color contrast of at least 4.5:1 confirmed with Lighthouse, axe, and WAVE
- [ ] Rating shown as text (for example, "5 out of 5 stars"), not only as icons

### Accessibility testing

| Tool | What it checks | Result |
|---|---|---|
| Lighthouse (Chrome DevTools) | Automated accessibility audit | _add score_ |
| axe DevTools | WCAG issues in the page | _add result_ |
| WAVE | Structure, labels, and contrast | _add result_ |
| Keyboard-only test | Tab, Shift+Tab, Enter, Space | _add notes_ |
| Screen reader (NVDA) | Reading order and labels | _add notes_ |

## Design

The layout was planned in Figma before coding: [Collectava Landing Page Skeleton](https://www.figma.com/design/RjNEoN2M9H8UIMCI57TzFg).

### Colors

All colors are defined once as CSS variables in `:root` and reused across the stylesheet.

| Role | Color | Used for |
|---|---|---|
| Page background | `#eef2f6` | Body and product section |
| Tint | `#e6f4f8` | Testimonials and hero gradient |
| Surface | `#ffffff` | Header and cards |
| Main text | `#1a1a1a` | Headings and body text |
| Secondary text | `#4a4f5a` | Descriptions and hints |
| Dark | `#111318` | Buttons and newsletter band |
| Darker | `#0b0d11` | Footer |
| Dark cyan | `#066982` | Links, hover, and focus on light backgrounds |
| Bright cyan | `#19c2e6` | Highlights on dark backgrounds only |

### Fonts

- **Chakra Petch** (semi-bold italic): brand name
- **Inter** (400, 500, 600): navigation, headings, and body text

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3 with custom properties (JavaScript in a later phase) |
| Backend | _to be decided_ |
| Database | _to be decided_ |

_This table will be updated as each phase is built._