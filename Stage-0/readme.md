# 👤 Accessible & Testable Profile Card Component

A modern, responsive, and highly accessible Profile Card built using pure **HTML, CSS, and Vanilla JavaScript**. This project serves as a clear demonstration of frontend best practices, focusing heavily on **semantic markup**, **WCAG accessibility standards**, and **robust testability** via required data attributes.

---

## ✨ Key Features & Goals

This component was developed with strict adherence to core modern frontend principles:

### 1. **Accessibility First (A11y)**
* **Semantic HTML:** Utilizes appropriate tags like `<article>`, `<figure>`, `<nav>`, and `<section>` to give meaning and structure to the content, enhancing screen reader compatibility.
* **Keyboard Navigation:** All interactive elements (links) are properly **keyboard-focusable** with clear focus styles.
* **Secure Links:** Social links open in a new tab using `target="_blank"` combined with the security attributes `rel="noopener noreferrer"`.
* **Accessible Images:** The avatar image includes a required `alt` attribute.

### 2. **Responsive Design**
* The layout is built using **modern CSS (Flexbox/Grid)** and adapts flawlessly to different screen sizes.
* Content stacks **vertically** on mobile for optimal reading and transitions to a clean **side-by-side** layout on wider screens (tablet/desktop).

### 3. **High Testability**
* Every single required visible element on the card is tagged with a specific `data-testid` attribute, enabling stable and reliable end-to-end automated testing.

---

## 🛠️ Component Requirements & Implementation

The card displays essential user data and dynamic elements:

| Element Description | Required `data-testid` | Implementation Notes |
| :--- | :--- | :--- |
| **Profile Card Root** | `test-profile-card` | Wrapped in an `<article>` tag. |
| **User Name** | `test-user-name` | Typically an `<h2>` for proper document outline. |
| **Short Biography** | `test-user-bio` | A standard `<p>` tag. |
| **Current Time (ms)** | `test-user-time` | Dynamically updated via Vanilla JS (`Date.now()`). |
| **Avatar Image** | `test-user-avatar` | Contained within a `<figure>` with a descriptive `alt` attribute. |
| **Social Links Container** | `test-user-social-links` | Presented as a list (`<ul>` or within a `<nav>`). |
| **Hobbies List** | `test-user-hobbies` | A distinct list (`<ul>/<li>`) within a `<section>`. |
| **Dislikes List** | `test-user-dislikes` | A distinct list (`<ul>/<li>`) within its own `<section>`. |

***Note:** Individual social links can optionally include specific test IDs, e.g., `data-testid="test-user-social-twitter"`.***

---

## 🚀 Getting Started

This project is a static component built entirely with foundational web technologies, meaning there are no build steps required.

### Prerequisites

You only need a modern web browser (Chrome, Firefox, Safari, Edge) to view the component.

### Installation and Viewing

1.  **Clone the repository:**

    ```bash
    git clone [Your Repository URL Here]
    cd accessible-profile-card
    ```

2.  **Open the file:**
    Navigate to the project directory and open the main `index.html` file in your browser.

    ```bash
    # On macOS/Linux
    open index.html 

    # On Windows
    start index.html
    ```

The Profile Card will load immediately, and the **Current Time in Milliseconds** counter will begin updating.
