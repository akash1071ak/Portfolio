# Akash G — UI/UX Designer Portfolio

A world-class, recruiter-focused portfolio web application built for **AKASH G**, UI/UX & Product Designer based in Chennai, India.

## 🌟 Overview & Highlights

- **100% Faithful to Resume**: Zero fabricated experience. Focuses on flagship projects, internships, design systems, and usability testing.
- **Flagship Case Study**: *Vehicle Repair Assistant (FixGo)* with 5 deep-dive tabs (Problem & Background, User Research & Personas, Journey Maps & Information Architecture, Wireframing & Design Decisions, Usability Testing & Learnings).
- **Interactive Live Phone Simulator**: Recruiter-accessible interactive mobile phone frame on the website allowing real-time testing of the 2-tap roadside emergency dispatch flow.
- **Verified Internships**: UI/UX Design Intern at *Login 360* & Python Programming Intern at *Codsoft*.
- **ATS-Ready Formatted Resume Modal**: Interactive printable resume viewer with instant plain-text copying and PDF printing support.
- **Validated Contact Form**: Real-time validation with instant feedback and direct links to phone, email, and LinkedIn.

---

## 🛠 Tech Stack

- **Framework**: React 18 with TypeScript
- **Bundler & Dev Server**: Vite 6
- **Styling**: Tailwind CSS with custom glassmorphism and modern gradient design tokens
- **Typography**: Space Grotesk (Headings) & Plus Jakarta Sans (Body)
- **Icons**: Lucide React

---

## 🚀 How to Run Locally

### Option 1: Run with Vite Dev Server (Recommended)
1. Open terminal inside this directory:
   ```bash
   cd C:\Users\akaka\.gemini\antigravity-ide\scratch\akash-portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 2: Instant Double-Click Standalone Preview
You can also immediately open `preview.html` directly in Google Chrome, Microsoft Edge, or any modern web browser without running any commands!
- Path: `C:\Users\akaka\.gemini\antigravity-ide\scratch\akash-portfolio\preview.html`

---

## 📂 Project Architecture

```
akash-portfolio/
├── preview.html              # Standalone instant browser preview
├── index.html                # Vite HTML entry point with complete SEO & JSON-LD
├── package.json              # NPM dependencies & scripts
├── vite.config.ts            # Vite config (port 3000)
├── tailwind.config.js        # Design tokens, custom dark slate & neon colors
├── tsconfig.json             # TypeScript configuration
├── public/
│   ├── favicon.svg           # Custom AG monogram SVG favicon
│   ├── manifest.json         # PWA Manifest
│   ├── robots.txt            # SEO Robots rules
│   └── sitemap.xml           # XML Sitemap
└── src/
    ├── main.tsx              # React DOM mounting
    ├── App.tsx               # Root app with modal state management
    ├── index.css             # Glassmorphism, scrollbars, and keyframes
    ├── types/
    │   └── portfolio.ts      # TypeScript interfaces
    ├── data/
    │   └── portfolioData.ts  # Resume data (Akash G)
    └── components/
        ├── Navbar.tsx        # Blur glassmorphic header with quick resume button
        ├── Hero.tsx          # Dynamic typewriter roles, CTA & showcase card
        ├── About.tsx         # Career objective, design principles & stats
        ├── InteractivePhoneMockup.tsx # Live interactive mobile phone simulator
        ├── Projects.tsx      # Projects grid with category filters
        ├── CaseStudyModal.tsx# 5-tab deep-dive case study drawer
        ├── DesignProcess.tsx # 5-stage human-centered design thinking stepper
        ├── Skills.tsx        # Categorized matrix with animated progress bars
        ├── Experience.tsx    # Timeline for Login 360 & Codsoft internships
        ├── Education.tsx     # BCA & HSC academic milestones
        ├── Certifications.tsx# Login 360 and Coursera credentials
        ├── Achievements.tsx  # Design Hackathon Finalist & HCI Club
        ├── ResumeModal.tsx   # ATS-formatted printable resume viewer
        ├── Contact.tsx       # Validated form and direct contact channels
        └── Footer.tsx        # Quick links, social icons & back to top
```
