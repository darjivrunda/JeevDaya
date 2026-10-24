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

---

## 🚀 How to Run Locally

Because Jeev Daya uses standard web technologies (HTML5, CSS3, ES6 JavaScript), you do not need to install Node.js, PHP, or any database!

### Option A: Open directly in your browser
1. Clone or download this repository.
2. Double-click [`index.html`](index.html) to open it in Chrome, Edge, Firefox, or Safari.

### Option B: Using VS Code Live Server (Recommended)
1. Open the project folder in [Visual Studio Code](https://code.visualstudio.com/).
2. Install the **Live Server** extension (`ritwickdey.liveserver`).
3. Right-click [`index.html`](index.html) and select **Open with Live Server**.
4. The site will launch automatically at `http://127.0.0.1:5500/index.html`.

---

## 🌐 Deploy to GitHub Pages (Free Live Hosting)

You can host this project on the web for free using GitHub Pages in under a minute:

1. Push or upload this repository to GitHub.
2. Go to your repository on GitHub.
3. Click on **Settings** (tab at the top right of the repository).
4. On the left sidebar, click **Pages**.
5. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch` (or choose `GitHub Actions` to use `.github/workflows/deploy.yml`).
   - **Branch**: Select `main` (or `master`), folder `/ (root)`, and click **Save**.
6. Wait 1-2 minutes. GitHub will provide your live website link:
   ```text
   https://<your-username>.github.io/<repository-name>/
   ```

---

## 📤 Step-by-Step Guide: How to Upload to GitHub

Choose whichever method is easiest for you:

### Method 1: Using the GitHub Web Interface (No Git installation needed)
1. Go to [github.com](https://github.com/) and sign in.
2. Click the **`+`** icon in the top right corner and select **New repository**.
3. Name your repository (e.g., `JeevDaya` or `jeev-daya-animal-rescue`).
4. Keep it **Public** (or Private). Leave *"Initialize this repository with a README"* **unchecked** (we already have a README).
5. Click **Create repository**.
6. On the new repository page, click the link that says **"uploading an existing file"**.
7. Drag and drop all the files and folders from this project folder into the GitHub browser window.
8. Enter a commit message like `Initial commit: Jeev Daya Animal Rescue Project`.
9. Click **Commit changes**.

---

### Method 2: Using the Git Command Line (Recommended if Git is installed)

If you have Git installed on your computer, open a terminal (PowerShell, Command Prompt, or Git Bash) in this project folder and run:

```bash
# 1. Initialize local Git repository
git init

# 2. Add all files to staging
git add .

# 3. Create initial commit
git commit -m "Initial commit: Jeev Daya Animal Rescue Project"

# 4. Set branch name to main
git branch -M main

# 5. Link to your GitHub repository (replace with your actual repository URL)
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 6. Push code to GitHub
git push -u origin main
```

> **Note:** If you do not have Git installed yet, you can download it from [git-scm.com](https://git-scm.com/download/win) or use **Method 1** or **Method 3**.

---

### Method 3: Using GitHub Desktop (Graphical User Interface)
1. Download and install [GitHub Desktop](https://desktop.github.com/).
2. Open GitHub Desktop and sign in with your GitHub account.
3. Go to **File** &rarr; **Add Local Repository...** (or press `Ctrl + O`).
4. Browse to this folder (`e:\IAR\Sem - 5\Web Technology\Project\JeevDaya`).
5. If it says *"this directory does not appear to be a Git repository"*, click **"create a repository"**.
6. Enter a summary (e.g. `Initial commit`) and click **Commit to main**.
7. Click **Publish repository** to push it to your GitHub account.

---

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

## 👥 Academic Project Details

- **Course:** Web Technology (Semester 5)
- **Project Title:** Jeev Daya — Animal Welfare & Emergency Rescue Portal
- **Domain:** Non-Profit / Public Welfare / Animal Care & Community Assistance

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
