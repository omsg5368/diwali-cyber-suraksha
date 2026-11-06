# Product Requirements Document (PRD.md)

## 1. Executive Summary & Vision
- **Project Name**: Shubh Dhanteras & Diwali Family Greeting with Festive Cyber Suraksha Abhiyan
- **Author & Creator**: Om Shrikrishna Gautam (Ex-Penetration Tester at TMG Security • MSc Cybersecurity Manager, ECE Paris)
- **Primary Objective**: Provide an authentic, emotionally resonant, and culturally rich festive greeting platform for family members during Dhanteras & Diwali, coupled with a high-impact, easy-to-understand **Cyber Awareness Program** (Cyber Jagrukta / Suraksha).
- **Core Problem Solved**: The festive shopping rush during Dhanteras and Diwali in India sees a 400%+ spike in phishing, bogus discount e-commerce sites, WhatsApp lottery forwards, fake cashback scams, and courier delivery APK fraud. Families, especially parents, elders, and young relatives, are prime targets. This application protects and empowers loved ones while celebrating the triumph of light, wisdom, and prosperity.

---

## 2. Target Personas
1. **Family Elders & Parents**: Need clear, high-contrast, accessible instructions in plain English and Hindi/Hinglish on why random links and WhatsApp forwards are dangerous.
2. **Active Festive Shoppers**: Browsing for gold, electronics, clothing, and home gifts; need strict verification rules for authorized platforms (Amazon, Flipkart, Myntra, Tata Neu) vs predatory clone sites.
3. **Cousins & Relatives**: Want interactive, joyful festive elements (diya lighting, fireworks, customizable greeting card) with quick one-click WhatsApp sharing to family groups.

---

## 3. Key Feature Specifications

### 3.1. Festive Family Greetings Suite
1. **Shubh Dhanteras Pavilion**:
   - Golden brass aesthetic, traditional diya motifs, blessings of Goddess Lakshmi & Lord Dhanvantari (wealth, health, longevity).
   - Interactive **Virtual Diya Lighting**: Users click to light clay lamps with glowing flame particles and celebratory chimes.
   - Interactive **Dhanteras Gold Coin Shower**: Blessing celebration with radiant gold particle cascades.
2. **Shubh Deepavali / Diwali Pavilion**:
   - Vibrant festival of lights theme: victory of good over evil, illumination over ignorance (*Tamaso Ma Jyotirgamaya*).
   - Interactive **Eco-Friendly Digital Fireworks & Sparkler Canvas**: Multi-colored fireworks, crackers, and confetti on touch/click.
3. **Personalized Greeting Card & Family Blessing Generator**:
   - Customize recipient name (e.g., "To: Mummy & Papa", "To: Beloved Sharma Parivar", "To: Chacha & Chachi").
   - Select blessing category: "Prosperity & Good Health", "Festive Joy & Warmth", "Cyber-Protected & Blessed Household".
   - Custom signature: "With Love & Cyber Blessings from Om Shrikrishna Gautam & Family".
   - Instant live card preview with copyable greeting message & direct **Share to WhatsApp** action.

### 3.2. Festive Cyber Suraksha (Awareness Program)
1. **Rule 1 — Do Not Click on Random Links / WhatsApp Forwards**:
   - Breakdown of the "Diwali Free ₹5,000 Cadbury Gift Box" and "Ambanis Free Gold Coin" lottery scams.
   - Anatomy of a fraudulent link: Domain inspection (`amazon-festive-loot.xyz` vs `amazon.in`).
2. **Rule 2 — Beware of Discount Shopping & Fake Offer Websites**:
   - Warnings on social media ads (Instagram/Facebook) advertising 90% discount on iPhones, laptops, and gold coins.
   - Dangers of unknown web checkout: UPI theft, credit card skimming, identity compromise, and non-delivery.
3. **Rule 3 — Use ONLY Authorized Platforms & Official Mobile Apps**:
   - Authorized verified ecosystem: **Amazon** (`amazon.in`), **Flipkart** (`flipkart.com`), **Myntra** (`myntra.com`), **Tata Neu / CLiQ**, **Ajio**, and verified brand stores.
   - Mandatory check: Only download applications from official Google Play Store and Apple App Store, never from third-party `.apk` direct links.
4. **Rule 4 — The Golden UPI & Banking Law**:
   - Clear visual rule: **Entering UPI PIN is strictly for PAYING, NEVER for receiving money or festive cashback**.
   - Strict ban on sharing OTPs, CVVs, ATM PINs, or screen-sharing software (AnyDesk, TeamViewer).
5. **Rule 5 — Courier & Parcel Delivery SMS Scams (Fake India Post)**:
   - Analysis of "Your Diwali gift package address is pending, update now" SMS vectors.
6. **Interactive "Spot the Scam" Family Quiz**:
   - 5 interactive real-world festive scam scenarios with instant explanations.
   - Instant score calculation and personalized "Cyber Surakshit Parivar" verification certificate.
7. **Emergency Cyber Incident Response (India National Protocols)**:
   - National Cyber Crime Helpline: **1930**
   - Official Incident Reporting Portal: **cybercrime.gov.in**
   - Sanchar Saathi / Chakshu Portal for reporting spam SMS and calls.
   - Golden hour banking freeze procedure.

### 3.3. Festive Shagun & UPI QR Code Module
1. **Google Pay / Multi-App QR Code Asset**:
   - Official QR code linked to `omgautam721-3@okicici`.
   - Direct 1-tap UPI deep linking (`upi://pay?pa=omgautam721-3@okicici&pn=Om%20Gautam...`).
   - One-click clipboard copy with visual feedback toast.
2. **Professional Profile Showcase**:
   - Creator accreditation: Ex-Penetration Tester at TMG Security, MSc Cybersecurity Manager (ECE Paris), BCA (DYPIU Pune).
3. **Safe UPI Educational Reinforcement**:
   - Explicit visual callout demonstrating that authentic QR code payments require user PIN authorization to SEND money, reinforcing Rule 4.

---

## 4. Technical Non-Functional Requirements
- **Performance**: Instant load, zero external server latency, bundle size optimized under 200KB.
- **Responsiveness**: Mobile-first design tailored for mobile browsers and WhatsApp Web in-app webviews.
- **Accessibility**: High-contrast typography, readable font sizes, WCAG AA compliance.
- **Offline / Static Portability**: Zero backend requirements, deployable to GitHub Pages, Netlify, Vercel, or run locally.

