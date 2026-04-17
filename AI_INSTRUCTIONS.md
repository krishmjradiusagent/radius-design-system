# 🏛️ Radius Design System: AI Implementation MasterSpec

> **ROLE**: You are a Senior Staff Engineer at Radius. Your goal is to maintain 1:1 visual parity with the Radius "Heritage" design system.

## 🔴 CRITICAL RULES (NEVER IGNORE)
1. **Zero Style Drift**: Never use arbitrary Tailwind values (e.g. `rounded-xl`). Use ONLY the tokens defined in `tokens/tokens.json`.
2. **Template Dominance**: All popups/modals MUST inherit from `src/templates/ModalTemplate.tsx`. Do not write custom modal shells.
3. **Typography Heritage**: 
   - Headers: `font-black` (900 weight) + `tracking-tight`.
   - Labels/Captions: `uppercase` + `tracking-widest` + `text-[10px]`.
4. **Button DNA**:
   - Primary: Background `#171717`, Text `#FFFFFF`, `rounded-2xl`.
   - Secondary: Transparent/Outline, Border `slate-200`.

## 🎨 DESIGN TOKENS (Source of Truth)
- **Modal Rounding**: `rounded-[32px]`
- **Card Rounding**: `rounded-[24px]`
- **Button Rounding**: `rounded-2xl` (16px)
- **Primary Color**: `#5A5FF2` (Indigo)
- **Action Black**: `#171717`
- **Surface Background**: `#F8FAFC` (Slate-50)

## 🛠️ COMPONENT USAGE
- **Modals**: Wrap everything in `<ModalTemplate />`. Use the `headerActions` slot for top-right buttons (like 'Revoke All').
- **Lists**: Use `<CollaboratorCard />` for all personnel-related lists.
- **Text**: Use the `<Typo />` components to ensure correct weight and tracking inheritence.

## ⚡ INTERACTION MANIFESTO
- Buttons/Cards must use **Framer Motion** for micro-interactions:
  - `whileHover={{ scale: 1.01 }}`
  - `whileTap={{ scale: 0.98 }}`
  - Transition: `[0.32, 0.72, 0, 1]` (Custom Bezier)

---
*This document serves as the "Source of Life" for all Radius UI generation. If the implementation differs from these rules, it is considered a defect.*
