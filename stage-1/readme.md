***

## 📚 Study Material

Ensure you are familiar with the following concepts before proceeding:

* **Semantic HTML & Accessibility:** [MDN - Accessibility: HTML](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
* **Form Validation in HTML/JS:** [MDN - Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
* **Accessibility for Forms:** [W3C - Forms Tutorial](https://www.w3.org/WAI/tutorials/forms/)
* **Responsive CSS Layouts:** [CSS Tricks - Media Queries](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)

***

## ✅ Task: Two New Pages

You are required to create two new pages: a **Contact Us Page** with client-side form validation and an **About Me Page** for personal reflections.

### 1. Contact Us Page

Create a simple, accessible contact form with comprehensive client-side validation.

| Field | `data-testid` | Validation Rules |
| :--- | :--- | :--- |
| **Full name** | `test-contact-name` | Required |
| **Email** | `test-contact-email` | Required, Must be valid (e.g., `name@example.com`) |
| **Subject** | `test-contact-subject` | Required |
| **Message** | `test-contact-message` | Required, **Min length: 10 characters** |

#### Submission Handling:

* **Submit Button:** `data-testid="test-contact-submit"`
* **Error Messages:** Use `data-testid="test-contact-error-<field>"` (e.g., `test-contact-error-email`).
* **Success Message:** Use `data-testid="test-contact-success"` (only shows after valid submission).

#### Accessibility:

* All inputs **must** have `<label>`s linked using the `for` attribute.
* Error messages **must** be programmatically tied to their respective inputs using **`aria-describedby`**.
* The entire form must be **keyboard accessible** and navigable.

***

### 2. About Me Page

Create a reflective page to share your thoughts and goals.

| Section | `data-testid` | Semantic Requirements |
| :--- | :--- | :--- |
| **Main Wrapper** | `test-about-page` | Must be the `<main>` element. |
| **Bio** | `test-about-bio` | Use semantic elements for profile image, description, etc. |
| **Goals in this program** | `test-about-goals` | Use an unordered list (`<ul>`). |
| **Areas of low confidence** | `test-about-confidence` | Use an unordered list (`<ul>`). |
| **Note to future self** | `test-about-future-note` | Use paragraphs (`<p>`). |
| **Extra thoughts** | `test-about-extra` | Use blockquote (`<blockquote>`) if quoting. |

#### Semantic Structure:

* Wrap the entire page content with `<main data-testid="test-about-page">`.
* Use `<section>` for each required area/thought group.
* Use **proper heading hierarchy** (`<h1>`, `<h2>`, etc.) for content clarity.

***

## ✨ Acceptance Criteria

### Contact Us Page

* All required fields exist and use the correct `data-testid` attributes.
* Client-side JavaScript or HTML5 validation prevents invalid submissions.
* Success message (`test-contact-success`) is only visible after a valid submission and form reset.

### About Me Page

* All required sections exist with the correct `data-testid` attributes.
* Content is structured using correct semantic HTML (`<main>`, `<section>`, `<h2>`, `<ul>`, `<p>`).

### General Requirements

* **Semantic HTML** is used consistently throughout both new pages.
* **Accessibility** is maintained or improved (labels, `alt` text, ARIA associations).
* The application is **fully responsive** across mobile, tablet, and desktop viewports.
* The code is modular, readable, and follows consistent naming conventions.

***

## 📬 Submission

Host your completed application on a platform (e.g., Netlify, GitHub Pages, Vercel).
