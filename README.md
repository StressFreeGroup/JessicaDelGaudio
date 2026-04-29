# Jessica Del Gaudio, LMHC — Website

Private practice site for Jessica Del Gaudio, LMHC. Built with React + Vite, deployable to Vercel.

## Stack

- **React 18** + **Vite 5**
- **React Router 6** for client-side routing
- **CSS Modules** for component-scoped styling
- **Newsreader** (display) + **Manrope** (body) — Google Fonts
- **Calendly** embed for scheduling
- **Stripe + PayPal** for payments (to be wired in subsequent build phases)

## Brand: "Hudson Sage"

| Token | Hex | Use |
|---|---|---|
| `--cream` | `#F5F1EA` | Primary background |
| `--cream-deep` | `#EDE6D8` | Alternating section bg |
| `--sage-700` | `#3D5446` | Primary brand color |
| `--sage-900` | `#2A3D32` | Deepest sage, sparingly |
| `--terracotta-500` | `#C97A5C` | Accent / CTA |
| `--ink` | `#2A2A28` | Body text (warm charcoal, never pure black) |

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push to a GitHub repo
2. Import in Vercel dashboard
3. Set the build command to `npm run build` and output directory to `dist`
4. Set domain: `jessicadelgaudio.com` (and add `www.jessicadelgaudio.com` redirect)

## Required environment / configuration before launch

Before the site goes live, the following must be done:

### 1. Google Workspace + HIPAA BAA
- Set up Google Workspace **Business Standard** ($14/user/mo) under the domain `jessicadelgaudio.com`
- Sign Google's HIPAA BAA in the Workspace admin console
- Disable non-HIPAA-covered services for the account
- Create `jess@jessicadelgaudio.com`
- See `HIPAA_SETUP_CHECKLIST.docx` for the full step-by-step

### 2. Google Appointment Scheduling
- In Google Calendar (signed in as `jess@jessicadelgaudio.com`), click **+ Create → Appointment schedule**
- Create 4 schedules:
  - "Free 15-min Consultation" (15 min, no payment)
  - "Paid Session" (60 min — used as Stripe redirect target)
  - "Plan Member Session" (60 min — used as Stripe redirect target for plans)
  - "Add-on 45-min Session" (45 min — Stripe redirect target)
- Copy each schedule's public URL into `src/config/booking.js`

### 3. Stripe Payment Links
- Create Stripe account → request HIPAA BAA via Stripe support
- Create products: On the Spot ($80), Weekly Plan ($399/mo), Annual Plan ($3,750/yr), Add-on ($45)
- For each product, create a Payment Link with **"After payment → Redirect to your website"** pointing to the matching Google Appointment Scheduling URL
- Copy each Payment Link URL into `src/config/booking.js`

### 4. Domain
- Register `jessicadelgaudio.com` (Namecheap or Cloudflare)
- Set DNS to Vercel
- Defensive registrations (recommended): `delgaudiotherapy.com`, `jdgcounseling.com` — 301-redirect to main

### 5. Image assets needed
- Professional headshot (replace placeholder in Hero)
- Optional: 2-3 environmental photos for About page

## Standing rules embedded in the design system

- No black or very dark navy backgrounds (sage-900 is the deepest)
- No italic anywhere (reset disables italic globally)
- Body text floor: 15px (small UI), 17px (default body), 19px (lead)
- No "thin-line accent on white card" pattern — all panels are full color blocks
- No on-site client testimonials (third-party Mind-Diagnostics link only)

## Project structure

```
src/
├── main.jsx               # Entry point
├── App.jsx                # Router + layout
├── styles/
│   ├── tokens.css         # Design tokens (Hudson Sage)
│   ├── reset.css          # Modern reset
│   └── global.css         # Global typography
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── Button/
│   ├── TrustStrip/
│   ├── SectionHeading/
│   └── VerifiedBadge/
└── pages/
    └── Home/
        ├── Home.jsx
        └── sections/
            ├── Hero.jsx
            ├── Approach.jsx
            ├── HelpsWith.jsx
            ├── Pricing.jsx
            ├── HowItWorks.jsx
            ├── Booking.jsx
            └── FinalCTA.jsx
```

## What's left to build

- About page (bio, full credentials, training)
- Services page (full specialty list, modalities, who I work with)
- Rates page (detail on plans, cancellation policy, superbill info)
- Booking page (full Calendly + intake explanation)
- Payment page (Stripe + PayPal + alt-method instructions)
- Contact page (intake form, no PHI)
- Privacy / HIPAA Notice page (required NPP)
