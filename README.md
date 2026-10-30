# Collectava

A full stack ecommerce web app for **Collectava**, a custom PC building business. The project starts with an accessible landing page (semantic HTML and CSS) and will grow into a complete full stack application as part of a Full Stack Engineering course.

<!-- Add a screenshot after you build the page: -->
<!-- ![Collectava landing page](frontend/images/screenshot.png) -->

**Live demo:** _add your link here_

## About

Collectava builds custom PCs and offers PC services. The goal of this project is to build the Collectava storefront step by step: first the frontend, then the backend, then connect them into one full stack app. Accessibility is a priority from the start, so the site works for everyone, including people who use a keyboard or a screen reader.

## Project status

| Phase | Scope | Status |
|---|---|---|
| 1 | Landing page: semantic HTML, accessibility (WCAG, ARIA, keyboard navigation) | In progress |
| 2 | Frontend: styling, responsive layout, JavaScript | Planned |
| 3 | Backend: server, API, database | Planned |
| 4 | Full stack integration: connect frontend to backend (for example, newsletter signups and products) | Planned |

## Features

### Phase 1: landing page (current)

- **Header** with the logo and a navigation menu
- **Hero section** with a headline, subheading, and call-to-action button
- **Product showcase** with images, titles, descriptions, and prices for featured builds and services
- **Customer testimonials** to build trust
- **Newsletter signup form** to capture email addresses
- **Footer** with important links, contact information, and social media icons

### Later phases (planned)

- Products loaded from a backend API instead of hardcoded HTML
- Newsletter signups saved to a database
- _More features to be decided as the project grows_

## Accessibility

- [ ] Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- [ ] Logical heading order (one `<h1>`, then `<h2>` for each section)
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

## Project structure

```
collectava/
├── frontend/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── images/
├── backend/        # added in phase 3
├── docs/
└── README.md
```

## Getting started

### Frontend (current)

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/collectava.git
   ```
2. Open the frontend folder:
   ```bash
   cd collectava/frontend
   ```
3. Open `index.html` in your browser. No build step or dependencies are needed yet.

### Backend

_Setup instructions will be added when the backend is built._

## Author

**Fahad**, Full Stack Engineering course.

## License

This project is for educational purposes. The Collectava name and logo belong to their owner.
