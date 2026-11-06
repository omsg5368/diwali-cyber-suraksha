# Engineering & AI Agent Rules (RULES.md)

## 1. Documentation & Project Standards
- **Always Maintain the Core 6 Files**:
  1. `PRD.md`: Tracks requirements, user personas, scope, and acceptance criteria.
  2. `ARCHITECHTURE.md`: System topology, tech stack, data flow, and security boundaries.
  3. `DESIGN.md`: Visual design, color tokens, 3D/canvas interaction specs, and component structure.
  4. `MEMORY.md`: Engineering decisions (ADRs), trade-offs, gotchas, and ongoing context.
  5. `RULES.md`: Coding standards, best practices, and agent guidelines (this document).
  6. `TRACKER.md`: Active tasks, completion checklist, and roadmap milestones.
- Any significant architectural change or feature implementation must be reflected across these files.

---

## 2. Code Quality & Conventions
- **TypeScript / React Best Practices**:
  - Clean modular functional components with explicit props interfaces.
  - No `any` types where avoidable.
  - Proper memory cleanup in `useEffect` hooks for animation frames, canvas render loops, and Web Audio contexts.
  - Strict accessibility attributes (`aria-label`, semantic tags) for elders using screen readers or zoomed displays.
- **Styling**:
  - Tailwind CSS with rich festive palette (gold, vermilion, saffron, deep slate).
  - Maintain WCAG AA contrast compliance for text readability over glowing backgrounds.

---

## 3. Cyber Safety Advisory Standards
- Ensure all advice is strictly verified against Indian cyber authorities:
  - National Cyber Crime Reporting Portal: `cybercrime.gov.in`
  - National Helpline: `1930`
  - Sanchar Saathi / Chakshu Portal
  - RBI and NPCI guidelines on UPI PIN security.
- Avoid technical jargon when writing tips for family members; translate concepts into intuitive, actionable instincts.

---

## 4. Writing & Tone Guidelines (Unslop Standard)
- Maintain an authentic, warm, respectful tone suitable for Indian family culture.
- Avoid AI clichés, generic marketing fluff, or preachy corporate slogans.
- Combine genuine cultural reverence (respect for parents, elders, traditions) with sharp, vigilant cybersecurity awareness.
