# 🐾 Jeev Daya - Animal Welfare & Emergency Rescue Portal

[![GitHub Pages](https://img.shields.io/badge/Hosted_with-GitHub_Pages-222222.svg?logo=github&logoColor=white)](https://pages.github.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com)

> *"Every Life Deserves Care & Compassion"* — **Jeev Daya** is a full-featured, responsive animal welfare and emergency rescue web portal connecting compassionate citizens with rapid animal rescue teams, veterinary care, adoption, and donation facilities.

---

## 🌟 Key Highlights & Features

- 🚨 **24x7 Emergency Reporting System (`report-rescue.html`)**
  - Urgent distress report submission form with animal type, condition details, and landmark tagging.
  - Live photo upload preview with instant removal option.
  - Dynamic urgency indicator (Critical, Moderate, Low) with automated dispatch ETA calculator.
  - Interactive browser geolocation simulation for rapid ambulance coordination.

- 🩺 **Live Rescue Cases Tracker (`rescue-cases.html`)**
  - Real-time case listing with status badges (*Critical Care*, *In Treatment*, *Recovered*, *Adopted*).
  - Multi-category filter: Filter by species (All, Dogs, Cats, Cattle, Birds, Wildlife) and recovery status.
  - Dynamic treatment progress bar and case-specific medical fund goal trackers.

- 🏥 **Emergency Vet & Clinic Finder (`find-help.html`)**
  - Searchable directory of verified veterinary clinics, trauma centres, and animal shelters.
  - City filtering (Ahmedabad, Gandhinagar, Vadodara, Surat) with 24x7 Emergency availability toggle.
  - Direct one-click calling (`tel:`) and Google Maps directions integration.
  - Emergency animal first-aid guidelines (heatstroke, fractures, bleeding, poison ingestion).

- 💖 **Transparent Donation & Medical Sponsoring (`donate.html`)**
  - One-time and recurring monthly donation options.
  - Preset and custom INR amounts with visual impact breakdown (meals provided, medical supplies funded).
  - Simulated multi-gateway checkout (UPI / QR Code, Debit & Credit Cards, Net Banking).
  - Tax exemption details under Section 80G.

- 🤝 **Volunteer & Foster Care Network (`volunteer.html`)**
  - Multi-role volunteer registration (Rescue Driver, Foster Caregiver, Vet Assistant, Awareness Team).
  - Availability scheduler (Weekdays, Weekends, Emergency on-call).
  - Automatic validation and feedback confirmation modal.

- 📖 **About & Education (`about.html`, `contact.html`, `index.html`)**
  - Mission, shelter vision, leadership, and operational stats (15,000+ rescues, 94% recovery rate).
  - Interactive FAQ accordion for common animal welfare questions.
  - Contact form with embedded Google Map location and shelter timings.

- 📱 **Modern UI/UX & Responsive Design**
  - Built with clean Vanilla CSS variables, responsive CSS Grid, and Flexbox.
  - Mobile slide-out drawer menu with smooth backdrop blur.
  - FontAwesome 6 vector icons and Google Fonts *Outfit* typography.
  - 100% client-side with zero build tools or heavy framework overhead required.

---

## 📁 Repository Structure

```text
JeevDaya/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions static deployment to GitHub Pages
├── css/
│   └── style.css             # Main stylesheet with theme variables & responsive styles
├── js/
│   ├── data.js               # Initial seed data for rescue cases and veterinary clinics
│   └── main.js               # Core JavaScript logic (navigation, forms, filtering, modals)
├── .gitattributes            # Cross-platform line ending normalization
├── .gitignore                # Ignored files, OS metadata, and IDE folders
├── about.html                # About Us, mission, team, and FAQs
├── contact.html              # Contact page, shelter details, and Google Map
├── donate.html               # Donation portal, impact breakdown, and payment modal
├── find-help.html            # Emergency vet clinic locator & first-aid guide
├── index.html                # Landing page / Home with emergency helpline & highlights
├── LICENSE                   # Open-source MIT License
├── README.md                 # Project documentation & GitHub guide
├── report-rescue.html        # Emergency animal distress reporting form
├── rescue-cases.html         # Interactive rescue cases & medical progress tracker
└── volunteer.html            # Volunteer registration & foster application
```

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic structure, accessible forms, meta tags, and document outline |
| **CSS3** | Responsive layouts (Flexbox & CSS Grid), CSS custom properties, transitions, and animations |
| **JavaScript (ES6+)** | Dynamic DOM updates, interactive case filtering, form validation, and event handling |
| **Font Awesome 6.5** | High-quality icons for UI navigation, badges, and action buttons |
| **Google Fonts** | *Outfit* geometric sans-serif typography for clean readability |
| **Unsplash API/CDN** | High-resolution animal welfare and veterinary photography |

---
