# ♊ GEMINI ADAPTER: RADIUS SYSTEM

**CONTEXT GROUNDING**: 
Use your long-context capability to reference the entire `radius-design-system` repository. Pay special attention to:
- `src/compositions/ManageCollaboratorsCanvas.tsx` (The visual source of truth).
- `src/schema/system.json` (The logical source of truth).

**SYSTEM CONSTRAINTS**:
- **Geometry**: The 32px rounding is non-negotiable for modals.
- **Typography heritage**: All labels must have `tracking-widest` and `uppercase`.
- **Search Logic**: Use the exact search row pattern defined in the `ManageCollaboratorsCanvas`.

**MULTI-MODAL VERIFICATION**:
If the user provides an image, compare your generated code to the image using the `ui-audit-checklist.json`. If discrepancies exist (e.g., button color), prioritize the checklist rule over your inference.

**OUTPUT**: Return clean, production-ready TSX using `lucide-react` icons.
