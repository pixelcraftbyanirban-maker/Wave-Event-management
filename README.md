# WAVE — Live Concert Production & Event Management

> **"One Crowd, Many Sounds"** — Next-generation touring audio, dynamic stadium lighting, and technical precision for international live concerts and global festivals.

[![Next.js 15](https://img.shields.io/badge/Next.js-15.1.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![WCAG 2.2 AA](https://img.shields.io/badge/Accessibility-WCAG_2.2_AA-green?style=flat-square)](https://www.w3.org/WAI/standards-guidelines/wcag/)

---

## Overview

**WAVE** is an editorial, Swiss-industrial live concert production and event management web application engineered with strict adherence to the **WAVE Master Design System** (Figma).

It showcases end-to-end concert capabilities across Pan-India production desks (Mumbai, Kolkata, and Bengaluru), presenting interactive touring concepts, technical stage engineering frameworks, and commercial B2B inquiry routing.

---

## Key Features

- **Cinematic Video Hero:** Full-viewport looping stage concert visual with high-contrast gradient scrim and responsive typography.
- **Cinematic Audio Preloader:** Real-time audio equalizer visualization with telemetry status sequencing and smooth scroll unblocking.
- **Monochrome-to-Color Dual Hover Transition:** Live performance photography remains in pure black-and-white in rest state and reveals full saturated stage lighting on hover.
- **Interactive Dual-Journey Enquiry Architecture:**
  - *Journey A:* Fan and attendee ticketing router to authorized primary partners (DICE, AXS, Eventim, Ticket Pia).
  - *Journey B:* B2B commercial production dispatch with real-time field validation, loading states, and 24-hour response SLA notice.
- **Balanced Breakpoint Matrix:** Zero-orphan card layouts adapting smoothly from mobile (320px) to ultra-wide desktop (1440px+).
- **Accessibility & Touch Ergonomics:** WCAG 2.2 Level AA compliant contrast ratios, visible keyboard focus rings, and touch targets $\ge 44\text{px}$.

---

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, React 19 Server Components & Client Hooks)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/) + Custom Design Tokens (Oswald, DM Sans, JetBrains Mono)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** Custom CSS Keyframes, IntersectionObserver reveal triggers, and hardware-accelerated transitions
- **Language:** TypeScript 5 (Strict Mode)

---

## Project Structure

```text
website/
├── app/
│   ├── globals.css           # Global tokens, hover filter transitions, scrollbar & scanlines
│   ├── layout.tsx            # Metadata, OpenGraph, Favicon, and Google Fonts
│   └── page.tsx              # Main single-page application composing all 11 sections
├── components/
│   ├── Preloader.tsx         # Telemetry audio equalizer preloader
│   ├── SmoothScrollReveal.tsx # IntersectionObserver scroll animator
│   ├── Navbar.tsx            # Sticky header with brand mark & directory menu
│   ├── Hero.tsx              # Section 01: Looping concert video background
│   ├── BrandIntroduction.tsx # Section 02: 4-block telemetry metric strip
│   ├── Capabilities.tsx      # Section 03: 5 balanced capability cards
│   ├── FeaturedExperiences.tsx # Section 04: 3 interactive touring concepts
│   ├── ProductionMethod.tsx  # Section 05: 5-stage coordination framework
│   ├── PartnersEcosystem.tsx # Section 06: Stakeholder collaboration cards
│   ├── BrandPhilosophy.tsx   # Section 07: Directive quote & production desks
│   ├── OneCrowdSection.tsx   # Section 08: Dual-layer B&W to color showcase
│   ├── ContactEnquiry.tsx    # Section 09: Dual-journey commercial form
│   └── Footer.tsx            # Section 10: 4-column directory & compliance notice
├── public/
│   ├── images/               # High-resolution optimized concert photography & logos
│   └── videos/               # Optimized 1080p stage video
└── tailwind.config.ts        # Extended color schemes & font definitions
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.18 or higher)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/wave-website.git

# Navigate to the project directory
cd wave-website

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### Production Build

```bash
npm run build
npm run start
```

---

## License

Proprietary — All rights reserved © 2026 WAVE Event Management Ltd.
