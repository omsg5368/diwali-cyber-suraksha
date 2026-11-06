# Design Specification Document (DESIGN.md)

## 1. Design Concept: "Festive Splendor & Cyber Citadel"
The aesthetic unites the sacred warmth and golden radiance of Indian festivals (Dhanteras and Deepavali) with the clean, reassuring authority of a modern cybersecurity operations center.

### 1.1. Color Palette Tokens
- **Midnight Velvet (`#070A12`)**: Deep cosmic background reminiscent of Amavasya night, allowing diyas and fireworks to glow.
- **Deep Slate Base (`#0B1120` / `#0F172A`)**: Primary card background providing contrast and readability.
- **Shubh Gold (`#F59E0B` / `#FBBF24` / `#D97706`)**: Symbol of Dhanteras, Goddess Lakshmi, prosperity, and golden auspiciousness.
- **Vermilion Kumkum (`#E11D48` / `#BE123C`)**: Festive vermilion red for celebratory accents and critical danger warnings.
- **Deep Saffron (`#EA580C` / `#C2410C`)**: Sacred saffron tone representing spiritual illumination and traditional marigold garlands.
- **Cyber Emerald (`#10B981` / `#059669`)**: Trust, verified status, safe links, and authorized merchant badges.
- **Laser Amber (`#FFB000`)**: Cautionary indicators for suspicious links and social engineering warnings.

### 1.2. Typography System
- **Hero & Cultural Headers**: `Cinzel` & `Rozha One` — classical, regal, traditional Indian festival authority.
- **Interface & Prose**: `Outfit` / `Inter` — modern, hyper-legible sans-serif with excellent hindi-numeral and mobile clarity.
- **Terminal & Domain Inspector**: `Fira Code` / monospace — authentic security domain inspection, URL breakdowns, and verification codes.

---

## 2. Interactive Micro-Interactions

### 2.1. The Virtual Diya Engine
- Clicking any unlit diya triggers:
  1. Procedural flame lighting animation with pulsating orange-yellow radial gradients.
  2. Flame flicker CSS animation with floating embers.
  3. Harmonic 528Hz healing bell chime generated on-the-fly via Web Audio API.
  4. Incremental lighting counter ("X of 5 Diyas Lit — Illuminating Family Happiness").

### 2.2. Eco-Friendly Cracker Fireworks
- Sparkler / Anar / Rocket confetti particle physics on canvas without environmental smoke.
- Sound toggle for crisp celebration pop effects.

### 2.3. The Cyber Shield Indicator
- Dynamic badge calculating Family Cyber Safety Readiness (0% to 100%).
- Real-time visual feedback on URL safety:
  - Green Shield: Official verified merchant (e.g., `amazon.in`, `flipkart.com`, `myntra.com`).
  - Red Warning: Typosquatting or high-risk domain (e.g., `*.xyz`, `*-deals.top`, `*-offers.online`).

