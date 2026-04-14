# Radiogenomes AI™ — Marketing Website

India's first AI-powered genomic intelligence platform — by **ImagingInsight AI Pvt Ltd**.

A 3D-animated, fully responsive Next.js 14 marketing site showcasing the Radiogenomes AI product (17 genomic report types) with a 3D DNA helix hero, interactive risk gauge, animated counters, sample PDF viewer, and the brand's signature rainbow-gradient dividers.

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 14** (App Router) + TypeScript |
| Styling | **Tailwind CSS** + custom design tokens |
| 3D | **React Three Fiber** + **drei** + **three.js** |
| Animation | **Framer Motion** + **GSAP** + **Lenis** smooth scroll |
| Icons | **lucide-react** |
| Fonts | Space Grotesk (display) · Inter (body) · JetBrains Mono (data) |

## Brand palette

- **Primary teal:** `#14B8A6` / `#0D9488` (from logo DNA + "Insight" wordmark)
- **Deep navy base:** `#020617` / `#0F172A` (from logo "A" letter)
- **Cyan glow:** `#5EEAD4` (logo circuit traces)
- **Signature gradient:** teal → blue → purple → pink → orange (lifted from your PDF report dividers)
- **Risk semantics:** green LOW · amber MODERATE · red HIGH

## Page structure

```
1.  Navigation (sticky, blur-glass)
2.  Hero — 3D DNA helix (R3F) + tagline + dual CTA + floating stat chips
3.  Trust strip — 4 animated counters
4.  India's First — 3 differentiator cards
5.  Reports catalog — 17 cards · 5-category filter chips
6.  Risk Gauge — interactive 0-100 demo + 8-panel scorecards
7.  How It Works — 3-step animated pipeline (VCF → AI → Report)
8.  The Science — standards + 8 database sources
9.  Sample Reports — embedded PDF viewer (real PDFs from your folder)
10. Personas — 4 buyer personas
11. About — ImagingInsight AI parent company
12. CTA — "Request Demo" with rainbow gradient backdrop
13. FAQ — 6 questions
14. Footer — rich sitemap + disclaimer
```

## Run it

```bash
# install
npm install

# dev
npm run dev
# → http://localhost:3000

# production
npm run build
npm start
```

## Project layout

```
imagin-insightz-website/
├── app/
│   ├── layout.tsx        # Root + smooth scroll wrapper
│   ├── page.tsx          # Composes all sections
│   └── globals.css       # Tailwind + brand tokens + utilities
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx          # 3D + copy + CTAs
│   ├── DnaHelix.tsx      # React Three Fiber DNA helix
│   ├── TrustStrip.tsx    # Animated stat counters
│   ├── IndiaFirst.tsx    # Differentiator narrative
│   ├── ReportsCatalog.tsx # 17-card grid + filter
│   ├── GaugeDemo.tsx     # Interactive risk gauge
│   ├── HowItWorks.tsx    # 3-step pipeline
│   ├── Science.tsx       # Standards + DB sources
│   ├── SampleReports.tsx # PDF iframe viewer
│   ├── Personas.tsx
│   ├── About.tsx
│   ├── CTASection.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   ├── Divider.tsx       # Signature rainbow line
│   └── SmoothScroll.tsx  # Lenis wrapper
├── lib/
│   ├── reports.ts        # 17-report catalog data
│   └── utils.ts
├── public/
│   ├── brand/
│   │   └── logo.png
│   └── reports/
│       └── *.pdf         # 17 sample PDFs
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## How we beat manentia.ai

| Axis | Manentia | Radiogenomes AI |
|---|---|---|
| 3D | None | Live R3F DNA helix hero |
| Animations | Basic 0.4s fades | Framer Motion + GSAP scroll choreography + Lenis smooth scroll |
| Interactive demo | None | Live risk-gauge slider + 8-panel scorecards |
| Sample output | "Book a demo" only | Embedded PDF viewer with 17 real reports |
| Color signature | Single blue | Teal+navy + signature rainbow gradient dividers |
| Positioning | Generic radiology AI | "India's First Genomic AI" — category creator |
| Methodology | Hidden | Explicit 8-database transparency section |
| Typography | Geomanist | Space Grotesk + Inter + JetBrains Mono |

## Editing content

- **Add or change reports** → edit `lib/reports.ts`
- **Update stats / counters** → `components/TrustStrip.tsx`
- **Change FAQ** → `components/FAQ.tsx`
- **Tagline / hero copy** → `components/Hero.tsx`
- **Brand colors** → `tailwind.config.ts` + `app/globals.css`

## Deployment

The project is Vercel-ready:

```bash
npx vercel
```

Or any Node host that supports Next.js 14 (Netlify, Render, AWS Amplify, self-host with `npm run build && npm start`).

---

**For Research Use Only · Not For Clinical Diagnosis**
© ImagingInsight AI Pvt Ltd · Made in India 🇮🇳
