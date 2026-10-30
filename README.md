# Collectava

A full stack ecommerce web app for **Collectava**, a custom PC building business. The project is being built step by step as part of a Full Stack Engineering course.

## About

Collectava builds custom PCs and offers PC services. The goal of this project is to build the Collectava storefront step by step: first the frontend, then the backend, then connect them into one full stack app. Accessibility is a priority from the start, so the site works for everyone, including people who use a keyboard or a screen reader.

## Project status

| Phase | Scope | Status |
|---|---|---|
| 1 | Landing page: semantic HTML, styling, and accessibility | In progress |
| 2 | Frontend: interactive features and remaining landing-page sections | Planned |
| 3 | Backend: server, API, database | Planned |
| 4 | Full stack integration: connect frontend to backend (for example, newsletter signups and products) | Planned |

## Features

### Implemented

- Semantic header with a logo icon, the Collectava brand name, and primary navigation
- Responsive header layout that places navigation on a second row on small screens
- Sticky header styling and Google Fonts (Chakra Petch and Inter)
- Semantic navigation landmark with a descriptive accessible name

### Planned

- Landing-page sections for the hero, product showcase, testimonials, newsletter signup, and footer content
- Products loaded from a backend API instead of hardcoded HTML
- Newsletter signups saved to a database
- _More features to be decided as the project grows_

## Accessibility

- [x] Semantic page landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`)
- [x] Descriptive accessible name for primary navigation
- [ ] Semantic sections and logical heading order as landing-page content is added
- [ ] Meaningful `alt` text on all images
- [ ] Every form control has an associated `<label>`
- [ ] ARIA attributes on interactive elements (`aria-label`, `aria-describedby`, `aria-live`)
- [ ] Fully usable with a keyboard only, with clearly visible focus styles
- [ ] Text color contrast of at least 4.5:1
- [ ] Rating shown as text (for example, "5 out of 5 stars"), not only as icons

### Accessibility testing

| Tool | What it checks | Result |
|---|---|---|
| Lighthouse (Chrome DevTools) | Automated accessibility audit | _add score_ |
| axe DevTools | WCAG issues in the page | _add result_ |
| WAVE | Structure, labels, and contrast | _add result_ |
| Keyboard-only test | Tab, Shift+Tab, Enter, Space | _add notes_ |
| Screen reader (NVDA) | Reading order and labels | _add notes_ |

Screenshots of the before and after results are in the `docs/` folder.

## Design

The layout was planned in Figma before coding: [Collectava Landing Page Skeleton](https://www.figma.com/design/RjNEoN2M9H8UIMCI57TzFg).

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3 (JavaScript in a later phase) |
| Backend | _to be decided_ |
| Database | _to be decided_ |

_This table will be updated as each phase is built._
