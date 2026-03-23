<div align="center">

# 🏛️ UI Style Museum

### 37+ Interactive UI Design Styles · AI Fusion Lab · Project Genesis Engine

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/basaka-orion/UI-)
[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-ui--self--two.vercel.app-blue?style=for-the-badge)](https://ui-self-two.vercel.app)

**有想法就必须有配得上的 UI。**

*A curated museum of 37+ distinct UI design styles — from 2026 avant-garde trends to timeless classics — each with interactive demos, production-ready PRD specs, and AI-powered creative tools.*

</div>

---

## ✨ Features

### 🎨 37+ Interactive UI Styles
Each style card is a **fully interactive mini-demo**, not just a screenshot. Organized into tiers:

| Tier | Description | Examples |
|------|-------------|---------|
| **T0** (2026 Trends) | Bleeding-edge avant-garde | Neuro-morphic, Quantum Glass, Ambient Aura, Hyper-Brutalism |
| **T0** (2025 Trends) | Current cutting-edge | Chromium Liquid, Kinetic Typography, Dreamcore, Spatial Bento |
| **T0** (Signature) | High-fidelity showcases | Liquid Glass, Blueprint CAD, AI Abstract, 3D Interactive |
| **T1-T3** (Classic) | Proven design languages | Glassmorphism, Neo-Brutalism, Cassette Futurism, Retro OS |

### 🧬 AI Style Fusion Lab
Select 2-3 styles → AI generates a **brand new hybrid visual language** with:
- Creative name and artistic description
- Live HTML/CSS preview
- Full cross-platform PRD (Web/iOS/Android/Mini Program)

### 🚀 Project Genesis Engine
Describe your app idea → AI assembles an **expert product team** (CPO, CTO, Design Director) that:
1. Conducts **real-time market research** via Google Search
2. Debates and selects the perfect style fusion
3. Generates a **complete PRD** with tech stack, API design, database schema
4. Creates a **high-fidelity UI prototype** with advanced CSS

### 📄 PRD Specifications
Every style includes detailed production specs:
- Border radius, shadows, fonts, color palettes
- Platform-specific implementation guides (Web, iOS, Android, WeChat Mini Program)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI Framework |
| **Vite** | Build Tool |
| **TypeScript** | Type Safety |
| **Tailwind CSS** | Utility Styling |
| **Gemini 2.5 Flash** | AI Fusion & Genesis Engine |
| **Google GenAI SDK** | API Integration |

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) ≥ 18
- A [Gemini API Key](https://aistudio.google.com/apikey)

### Run Locally

```bash
# Clone the repo
git clone https://github.com/basaka-orion/UI-.git
cd UI-

# Install dependencies
npm install

# Create .env.local and add your API key
echo "GEMINI_API_KEY=your_api_key_here" > .env.local

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the museum.

### Build for Production

```bash
npm run build
```

---

## 🌐 Deploy to Vercel

The easiest way to deploy:

1. Fork this repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your fork
4. Add environment variable: `GEMINI_API_KEY` = your API key
5. Deploy!

Or click the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/basaka-orion/UI-)

---

## 📁 Project Structure

```
.
├── App.tsx                  # Main app with gallery grid & UI logic
├── index.html               # Entry HTML with embedded styles
├── index.tsx                # React entry point
├── constants.tsx            # PRD data + style definitions (37+ styles)
├── types.ts                 # TypeScript interfaces
├── vite.config.ts           # Vite configuration
├── components/
│   ├── InteractiveCards.tsx  # All 37+ interactive card components
│   ├── PrdModal.tsx         # PRD specification modal
│   ├── FusionResultModal.tsx # AI fusion result display
│   └── ProjectPrdModal.tsx  # Full project PRD viewer
└── utils/
    └── ai.ts                # Gemini AI integration (fusion + genesis)
```

---

## 📸 Style Gallery Preview

> **2026 Avant-Garde**: Neuro-morphic · Quantum Glass · Ambient Aura · Hyper-Brutalism
>
> **2025 Trends**: Chromium Liquid · Kinetic Typography · Dreamcore Aero · Spatial Bento · Holographic Foil · Dither Punk · Risograph · Ethereal Glow
>
> **Signature Collection**: Anthropic Serif · AI Abstract · Blueprint CAD · Liquid Glass · Neo-Skeuomorphism (Nature & Stone) · 3D Interactive · Aurora Mesh · Atomic Age · Jetsons · Solarpunk Utopia · Brutal B&W · Gen UI
>
> **Classic Library**: Bento Grid · Glassmorphism · Neo-Brutalism · Cassette Futurism · Neomorphism · DOS Terminal · Win95 · Natural · Digital Cute · Micro Industrial · Neon Dark · Fresh Retro · and more...

---

## 📝 Origin

Originally built in [Google AI Studio](https://ai.studio/apps/3ce22aac-a970-4ea2-a5f8-f9ec88533f8e), evolved into a standalone deployable application.

---

## 📄 License

MIT

---

<div align="center">

**Built with 🤖 Gemini + ❤️ by [basaka-orion](https://github.com/basaka-orion)**

</div>
