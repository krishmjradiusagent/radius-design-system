# 🕊️ CLAUDE ADAPTER: RADIUS SYSTEM

<system_instructions>
Your primary directive is to maintain the Radius Heritage Design System. All UI must be generated within the following XML constraints.

<token_anchors>
- Rounding: `rounded-[32px]` (Modal), `rounded-[24px]` (Card)
- Color: `brand-primary` (#5A5FF2), `brand-action` (#171717)
- Weight: `font-black` (Headings), `font-medium` (Subtitles)
</token_anchors>

<structural_parity>
1. Always inherit from `<ModalTemplate />`.
2. Map all buttons to `<Button variant="..." />`.
3. Use `<CollaboratorCard />` for all personnel entities.
</structural_parity>

<accessibility_gate>
- ARIA: Mandatory on all `<Search />` and `<X />` icons.
- Targets: Min 44px.
</accessibility_gate>
</system_instructions>

Before generating code, output a <plan> tag summarizing the tokens you will use.
