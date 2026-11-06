# Project Memory & Context (MEMORY.md)

## 1. Creator & Family Context
- **Creator**: Om Shrikrishna Gautam
- **Academic Background**: MSc Cybersecurity Manager at ECE Paris (2026 – Present) | BCA (Cloud Computing & System Administration) from D.Y. Patil International University, Pune (2024, CGPA 7.11/10).
- **Motivation**: Every festive season (Dhanteras & Diwali), family WhatsApp groups and relatives are flooded with malicious links promising free gifts, huge discounts, and cashbacks. Combining festive cultural blessings with practical cyber protection serves as a meaningful, protective gift from Om to his family and community.

---

## 2. Architectural Decision Records (ADRs)

### ADR-001: Standalone Clean Architecture
- **Decision**: Build `diwali-cyber-suraksha` as an independent, fully autonomous repository under `/Users/__o_m_s_g__/.gemini/antigravity/scratch/diwali-cyber-suraksha`.
- **Reasoning**: Ensures zero interference with the existing `om-gautam-portfolio` codebase while allowing standalone deployment to GitHub Pages or Netlify for instant family sharing.

### ADR-002: Zero-Dependency Sound Synthesizer via Web Audio API
- **Decision**: Implement bell chimes and sparkler audio effects using the native browser `AudioContext` (sine/triangle oscillator synthesis).
- **Reasoning**: Eliminates external MP3/WAV asset loading latency, zero 404 network risks, and operates seamlessly on offline mobile devices.

### ADR-003: Core 6 Documentation Mandate
- **Decision**: Establish and strictly maintain all 6 core documentation files:
  - `PRD.md`
  - `ARCHITECHTURE.md` (with symlink `ARCHITECTURE.md`)
  - `DESIGN.md`
  - `MEMORY.md`
  - `RULES.md`
  - `TRACKER.md`
  - `GEMINI.md`
- **Reasoning**: Aligns with Om Gautam's standardized software engineering and cybersecurity documentation protocol.

### ADR-004: Interactive Scam Simulator with Real Indian Case Studies
- **Decision**: Ground the quiz questions in real-world festive scams prevalent in India:
  1. The "Free Cadbury/Tanishq Festive Gift Box" WhatsApp forward.
  2. The 90% discount iPhone on fake domains (`flipkart-dhamaka-deals.top`).
  3. The "Enter UPI PIN to receive cashback" phone/SMS scam.
  4. The "India Post package stuck" malicious APK delivery SMS.
  5. The authentic official app notification for contrast.
- **Reasoning**: Realism transforms abstract warnings into concrete, memorable instincts for family members.

### ADR-005: Mobile-First WhatsApp Sharing Integration
- **Decision**: Provide pre-formatted WhatsApp direct-share links (`https://api.whatsapp.com/send?text=...`) containing both warm personalized festive greetings and the 5 critical cyber safety tips.
- **Reasoning**: WhatsApp is the primary communication channel for Indian families. Enabling one-tap sharing ensures high virality and genuine protection across extended family circles.
