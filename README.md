# Collectava

A personal full stack learning project for **Collectava**, a custom PC storefront. The project is being built step by step as part of a Full Stack Engineering course. Products, prices, delivery times, and reviews are sample content.

**Live demo:** [Collectava on GitHub Pages](https://f1nh.github.io/collectava/)

## About

The Collectava storefront showcases custom PCs and PC services. The goal of this project is to build it step by step: first the frontend, then the backend, then connect them into one full stack app. Accessibility is a priority from the start, so the site works for everyone, including people who use a keyboard or a screen reader.

## Project status

| Phase | Scope | Status |
|---|---|---|
| 1 | Landing page: semantic HTML, responsive styling, and accessibility (header, hero, feature strip, featured products, WhatsApp contact CTA, and testimonials implemented; remaining page sections are planned) | In progress |
| 2 | Frontend: interactive features and remaining landing-page sections | Planned |
| 3 | Backend: server, API, database | Planned |
| 4 | Full stack integration: connect frontend to backend (for example, newsletter signups and products) | Planned |

## Features

### Implemented

- Sticky header with the Collectava logo and primary navigation
- Responsive mobile navigation menu with keyboard dismissal
- Sticky header styling and Google Fonts (Chakra Petch and Inter)
- Semantic navigation landmark with a descriptive accessible name
- Responsive dark hero banner with an eyebrow, headline, balanced subheading, call-to-action, and PC image
- Desktop hero image blending with the page background; stacked image layout on small screens
- Fluid content width up to 1440px on wide displays, with the hero image capped to preserve its proportions
- Four-item feature strip highlighting build customization, testing, warranty, and support
- Feature-strip icons for customization, testing, warranty, and support
- Responsive featured builds and services grid with four product cards and SVG illustrations
- Product badges, lazy-loaded product images, and hover/focus treatments for links
- Responsive contact banner with a WhatsApp build-advice link and prefilled message
- Responsive testimonials section with sample quotes and text ratings
- Dark color palette defined as CSS variables

### Planned

- Remaining landing-page content for promotional offer, newsletter signup, and footer
- Real product photos and targets or pages for the "View details" links
- Products loaded from a backend API instead of hardcoded HTML
- Newsletter signups saved to a database

The product "View details" links do not have destinations yet.

## Accessibility

- [x] Semantic page landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`)
- [x] Descriptive accessible name for primary navigation
- [x] Descriptive `alt` text and explicit `width`/`height` on the hero image
- [x] Hero call-to-action keeps a 44px minimum target size and grows with larger text
- [x] Visible `:focus-visible` outlines defined for links, buttons, and form fields
- [x] Color palette chosen with text contrast of at least 4.5:1
- [x] Semantic sections and logical heading order for implemented content
- [x] Meaningful `alt` text on informative hero and product images; decorative icons use empty alt text
- [ ] Every form control has an associated `<label>` (no forms are implemented yet)
- [x] ARIA attributes for the mobile menu and decorative icons
- [x] Implemented navigation and links are keyboard accessible with visible focus styles
- [ ] Text color contrast of at least 4.5:1 confirmed with Lighthouse, axe, and WAVE
- [x] Testimonial ratings are shown as text (for example, "5 out of 5 stars"), not only as icons

### Accessibility testing

Keyboard focus and responsive layouts have been partially checked in a browser. Full automated accessibility audits, browser-zoom testing, and screen-reader testing are still pending.

## Design

The frontend design specification is kept locally rather than in the repository. For sections already built, the code takes precedence if it disagrees; planned sections follow the spec.

The layout was originally planned in [Figma](https://www.figma.com/design/RjNEoN2M9H8UIMCI57TzFg), but that design has not yet been updated to match the latest code.

### Colors

All colors are defined once as CSS variables in `:root` and reused across the stylesheet.

| Role | Color | Used for |
|---|---|---|
| Page background | `#090c14` | Page and section backgrounds |
| Surface | `#151b28` | Header and cards |
| Raised surface | `#1c2440` | Icon backgrounds and secondary surfaces |
| Main text | `#f3f6ff` | Headings and body text |
| Muted text | `#9aa6c2` | Supporting descriptions |
| Blue | `#6b83c8` | Primary actions and product badge |
| Deep blue | `#37457c` | Borders and accents |
| Highlight | `#a3c5ff` | Links, logo, and feature icons |
| Violet | `#8b7cff` | Glow accents |
| Border | `#2b3560` | Card and component borders |

### Fonts

- **Chakra Petch** (semi-bold italic): brand name
- **Inter** (400, 500, 600): navigation, headings, and body text

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3 with custom properties, and JavaScript for responsive navigation |
| Backend | _to be decided_ |
| Database | _to be decided_ |

_This table will be updated as each phase is built._