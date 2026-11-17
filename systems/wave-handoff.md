# WAVE Design System v0.1 — Working Foundation

Status: DRAFT. Brand colours, official assets and final validation are awaiting.
This export is reference documentation, not a native Figma file or compliance claim.

## Sections
1. Cover
2. Brand Foundation
3. Colour
4. Typography
5. Grid & Layout
6. Spacing, Radius & Effects
7. Iconography
8. Image & Media
9. Motion
10. Buttons
11. Navigation
12. Cards
13. Forms
14. Other Components
15. Accessibility
16. Responsive Rules
17. Tokens & Handoff
18. Open Inputs

## Component contracts
### buttons
- purpose: Express one clear action. Primary brand treatment is pending; the neutral action is a provisional functional fallback.
- anatomy: Container → optional leading icon → label → optional trailing icon.
- props: variant, size, disabled, leadingIcon, trailingIcon, children, aria-label, onClick
- bindings: button.primary.background.*, button.primary.text, button.padding.x, button.gap, button.radius, button.focus, button.height.*
- keys: Tab to focus; Enter or Space to activate. Native disabled buttons leave the tab order. Icon buttons require aria-label.
- responsive: 56 / 48 / 40px desktop sizes. Small becomes at least 48px on mobile. Stacked groups become full-width.

### navigation
- purpose: Locate the current destination and expose adjacent routes.
- anatomy: Link label → active underline; dropdown label → chevron → disclosure.
- props: active, disabled, mobile, open, children, href, onOpenChange
- bindings: navigation.padding, navigation.gap, color.text.*, color.interactive.*, spacing.200
- keys: Tab / Shift+Tab between items; Enter to follow a link; Enter or Space to toggle disclosure; Esc closes it and returns focus. Use aria-current="page".
- responsive: Horizontal desktop items become full-width mobile rows with at least 48px targets; no auto-scaled desktop navigation.

### cards
- purpose: Present a single experience, service, collaboration, image or editorial item. All specimen copy is placeholder copy.
- anatomy: Optional media → optional eyebrow → title → supporting text → arrow link affordance.
- props: kind, media, compact, title, description, href, state
- bindings: card.padding, card.gap, card.radius, card.background, color.text.*, button.focus
- keys: A single whole-card link is the only tab stop. Enter follows it. Never nest interactive elements inside the link. Focus ring wraps the card.
- responsive: 4 / 3 / 2 / 1-up at reference viewports. Compact mobile variants use portrait 4:5 media and reduced spacing.

### forms
- purpose: Collect user input with persistent labels, clear assistance and actionable feedback.
- anatomy: Visible label + required text → control → optional helper → icon + error or success message.
- props: id, label, required, helper, error, success, disabled, value, onChange, type
- bindings: input.height, input.padding, input.radius, input.border.*, form.label.gap, form.field.gap
- keys: Native input semantics. Associate labels with htmlFor; helper/error with aria-describedby and errors with aria-invalid. Tab between fields; arrows for select/radio; Space for checkbox.
- responsive: Single-column mobile/tablet. Two-column desktop permitted for short fields only. Labels always above controls; targets at least 48px on mobile.

### other
- purpose: Composable supporting UI: labels, dividers, tags, status badges, breadcrumbs, social glyphs, pagination and footer parts.
- anatomy: Semantic text or control + optional functional icon; no assembled footer or website layout.
- props: label, current, total, disabled, href, status, onPageChange, onSubmit
- bindings: tag.padding.*, spacing.*, color.text.*, color.border.*, color.feedback.*
- keys: Breadcrumbs use a labelled navigation landmark and aria-current. Pagination buttons expose page names. Generic social glyphs need a platform label once confirmed.
- responsive: Wrap tag and link rows; shorten pagination on mobile; keep all interactive targets at 44px or larger.

## Fonts
Oswald (500/600/700) and DM Sans (400/500/600/700). This reference self-hosts the Latin variable fonts from the Fontsource packages; retain their OFL licences on redistribution.

## Native Figma setup
Create Primitive, Semantic and Component variable collections and an independent Responsive collection with Desktop/Laptop/Tablet/Mobile modes. Semantic colour modes are Dark and Light. Create all 14 text styles and four layout-grid styles. Build components with Auto Layout and text, boolean, icon-slot and variant properties. The web reference does not create these native objects.

## Open inputs
- [ ] Official brand colours: Primary, secondary and accent hex values, plus usage rules. Owner: WAVE · Brand team. Status: Awaiting.
- [ ] Official logo files: All lockups, minimum sizes and clear-space specifications. Owner: WAVE · Brand team. Status: Awaiting.
- [ ] Default theme confirmation: Confirm dark-first or light-first. Dark is provisionally applied. Owner: WAVE · Brand lead. Status: Awaiting.
- [ ] Existing hero video: Source file, designated poster, aspect ratio and duration. Owner: WAVE · Production team. Status: Awaiting.
- [ ] Approved photography: Image library, rights and approved direction samples. Owner: WAVE · Creative team. Status: Awaiting.
- [ ] Social platforms: Confirm platforms and official account links. Owner: WAVE · Marketing team. Status: Awaiting.
- [ ] Corner-radius direction: Confirm sharp or softly rounded. Restrained radii are proposed. Owner: WAVE · Brand lead. Status: Awaiting.
- [ ] Final contrast results: Recompute pairings after brand hex values are supplied. Owner: Design & engineering. Status: Awaiting.

## Approval gate
Confirm brand hex values, assets, theme and radius. Measure final brand pairings. Test keyboard, screen readers, reflow, zoom, text spacing and motion. Verification status: Not yet tested.
