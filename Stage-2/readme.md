# Multi-Framework Ticket Web App – Frontend Stage 2 Task

This repository contains three **complete, independent implementations** of a **Ticket Management Web Application**, built using:
- **React**
- **Vue.js**
- **Twig (with plain HTML/CSS/JS)**

Each implementation delivers the same user experience, feature set, and design language while adhering strictly to the task requirements.

---

## 📋 Table of Contents

- [Core Features](#-core-features)
- [Design & Layout Rules](#-design--layout-rules)
- [Security & Auth](#-security--authorization)
- [Validation & Error Handling](#-validation--error-handling)
- [Accessibility](#-accessibility)
- [Frameworks & Libraries](#-frameworks--libraries)
- [Setup & Execution](#-setup--execution)
- [Switching Between Implementations](#-switching-between-implementations)
- [UI Components & State Structure](#-ui-components--state-structure)
- [Test Credentials](#-test-credentials)
- [Known Issues](#-known-issues)

---

## ✅ Core Features

### 1. **Landing Page**
- App name, catchy description, and CTA buttons: **"Login"** and **"Get Started"**
- Hero section with **wavy SVG background** (bottom edge)
- At least **one decorative circle** overlapping the hero
- **Box-shaped content sections** with shadows and rounded corners
- Max-width: **1440px**, centered on large screens
- Fully **responsive** (mobile, tablet, desktop)
- Consistent **footer** across all pages

### 2. **Authentication Screens**
- Separate **Login** and **Signup** pages
- Form validation with **inline error messages**
- **Toast/snackbar notifications** for failures (e.g., invalid credentials)
- On success: redirect to **Dashboard**
- Auth simulated via **`localStorage`** using key: `ticketapp_session`

### 3. **Dashboard**
- Summary stats:
  - Total tickets
  - Open tickets
  - Resolved tickets
- Navigation link to **Ticket Management**
- **Logout button** → clears session → redirects to **Login**
- Same layout rules: `max-width: 1440px`, centered

### 4. **Ticket Management (CRUD)**
- **Create**: Form with validation
- **Read**: List of tickets as **cards** with **status tags**
- **Update**: Edit form with validation
- **Delete**: Confirmation step before removal
- All actions include:
  - Real-time validation
  - Clear **success/error feedback** (inline or toast)

---

## 🎨 Design & Layout Rules (Identical Across All Frameworks)

- **Max-width**: `1440px` centered container
- **Hero**: Wavy SVG background at bottom
- **Decorative elements**:
  - ≥1 circle in hero
  - ≥2 total circular decorative elements site-wide
- **Card-style boxes** for stats, tickets, features (rounded corners, shadows)
- **Responsive behavior**:
  - Mobile: stacked layout, collapsible nav
  - Tablet/Desktop: grid layouts, consistent spacing
- **Status color coding**:
  - `open` → **Green**
  - `in_progress` → **Amber**
  - `closed` → **Gray**

---

## 🔒 Security & Authorization

- **Protected routes**: Dashboard & Ticket Management
- Access requires valid session in `localStorage` under key: `ticketapp_session`
- Unauthorized access → redirect to `/auth/login`
- **Logout**:
  - Clears `ticketapp_session`
  - Redirects to **Landing Page**

---

## ⚠️ Validation & Error Handling

### Required Fields
- `title` (string, non-empty)
- `status` (must be one of: `"open"`, `"in_progress"`, `"closed"`)

### Validation Feedback
- Inline errors beneath fields **OR** toast notifications
- Optional fields (e.g., `description`, `priority`) validated for type/length

### Error Messages Examples
- “Your session has expired — please log in again.”
- “Failed to load tickets. Please retry.”
- “Title cannot be empty.”

### Error Scenarios Handled
- Invalid form input
- Unauthorized route access
- Simulated API/network failures

---

## ♿ Accessibility

- Semantic HTML (`<header>`, `<main>`, `<section>`, etc.)
- Meaningful `alt` text for decorative/functional images
- Visible focus indicators
- Sufficient color contrast (WCAG compliant)
- Keyboard navigable

---

## 📚 Frameworks & Libraries

| Implementation | Tech Stack |
|----------------|-----------|
| **React**      | React 18, React Router, Axios (mock), Tailwind CSS or vanilla CSS |
| **Vue.js**     | Vue 3 (Composition API), Vue Router, Pinia (or reactive refs), Axios (mock), Tailwind CSS or vanilla CSS |
| **Twig**       | Plain HTML, CSS (with utility classes), JavaScript (ES6), localStorage, no build step |

> Note: All versions use **client-side-only** logic. No backend required.

---

## ⚙️ Setup & Execution

### React
```bash
cd react/ticketinn
npm install
npm run dev
# Open http://localhost:5173 (or as configured)
```

### Vue.js

```bash
cd vue/ticketinn
npm install
npm run dev
# Open http://localhost:5173
```

### Twig (Static)

# Serve using any static server (e.g., Python, Live Server, etc.)

```bash
cd twig/ticketinn
python3 -m http.server 8000
# Open http://localhost:8000
```

## Switching Between Implementations
Each framework lives in its own directory:

```bash
./stage-2/
├── react/ticketinn/
├── vue/ticketinn/
└── twig/ticketinn/
```

Navigate into the desired folder and follow its specific setup instructions above.