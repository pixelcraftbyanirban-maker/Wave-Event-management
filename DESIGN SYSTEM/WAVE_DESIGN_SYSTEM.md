# WAVE --- Design System

**Version:** 0.1 --- Working Foundation\
**Brand:** WAVE\
**Category:** Live Concert Production & New-Age Event Management\
**Primary audience:** Gen Z and millennials, primarily ages 16--36\
**Status:** Working design-system specification. Accessibility and
production implementation checks remain in progress.

------------------------------------------------------------------------

## 1. Purpose

This document defines the shared visual and interaction language for
WAVE's digital experiences. It is the reference for the five-page WAVE
website and future brand touchpoints.

WAVE should feel like a contemporary live-culture brand: energetic,
expressive, experimental and professional. Its visual language combines
playful pop graphics, cinematic concert imagery, bold typography and
editorial layouts.

The system must remain usable, accessible, responsive and maintainable.
Visual impact must never come at the expense of clarity.

## 2. Brand foundation

### Positioning

WAVE creates contemporary live experiences that bring music, people,
culture and brands together.

### Brand attributes

-   Energetic
-   Expressive
-   Experimental
-   Contemporary
-   Youthful
-   Culturally aware
-   Bold
-   Professional

### Experience principles

1.  **Live-culture first:** Design should feel connected to music,
    audiences and shared experiences.
2.  **Expressive, not chaotic:** Use strong typography and imagery with
    deliberate hierarchy.
3.  **Editorial, not templated:** Avoid generic event-management and
    SaaS layouts.
4.  **Clear journeys:** Keep audience ticket-discovery journeys separate
    from commercial production-enquiry journeys.
5.  **Accessible by design:** Preserve readable contrast, keyboard
    access, responsive reflow and reduced-motion alternatives.

## 3. Colour

### 3.1 Official brand colours

  Token             HEX         Intended role
  ----------------- ----------- -----------------------------
  Ice Blue          `#DDF7FF`   Light surfaces and contrast
  Cyan Wave         `#39BDF5`   Brand highlights
  Electric Cobalt   `#087BFF`   Interactive brand colour
  Abyssal Navy      `#00061F`   Deep brand background
  Monochrome Navy   `#152B46`   Supporting brand colour
  Deep Black        `#000000`   Dark surfaces

Do not alter these official colours.

### 3.2 Blue primitive scale

  Token      HEX
  ---------- -----------
  Blue 50    `#DDF7FF`
  Blue 100   `#B9ECFF`
  Blue 200   `#83DFFF`
  Blue 300   `#39BDF5`
  Blue 400   `#159DEB`
  Blue 500   `#087BFF`
  Blue 600   `#0764DB`
  Blue 700   `#084DB5`
  Blue 800   `#073477`
  Blue 900   `#00061F`

### 3.3 Neutral primitive scale

  Token          HEX
  -------------- -----------
  Neutral 0      `#FFFFFF`
  Neutral 50     `#F4F4F5`
  Neutral 100    `#E4E5E7`
  Neutral 200    `#C9CBD0`
  Neutral 300    `#B0B3BA`
  Neutral 400    `#969AA3`
  Neutral 500    `#70747C`
  Neutral 600    `#555960`
  Neutral 700    `#3B3E44`
  Neutral 800    `#292B30`
  Neutral 900    `#191B1F`
  Neutral 950    `#111215`
  Neutral 1000   `#0B0C0E`

### 3.4 Proposed supporting colours --- not approved brand colours

These are optional proposals and must not be treated as official WAVE
colours without approval.

  Token                             HEX
  --------------------------------- -----------
  UI accent --- proposed            `#0A4DFF`
  Dark charcoal --- proposed        `#0F172A`
  Slate neutral --- proposed        `#334155`
  Stage amber --- proposed          `#F59E0B`
  Atmospheric violet --- proposed   `#8B5CF6`

Use these only where a documented interface need exists. The official
palette remains dominant.

## 4. Semantic colour architecture

Use semantic variables in components and layouts. Avoid applying raw HEX
values directly throughout the interface when a token exists.

  Semantic token           Dark mode      Light mode
  ------------------------ -------------- -------------
  Background / Primary     Deep Black     Neutral 0
  Background / Secondary   Neutral 950    Neutral 50
  Background / Inverse     Neutral 0      Neutral 950
  Text / Primary           Neutral 0      Neutral 950
  Text / Secondary         Neutral 300    Neutral 600
  Text / Inverse           Abyssal Navy   Neutral 0
  Text / Disabled          Neutral 500    Neutral 500
  Border / Default         Neutral 500    Neutral 500
  Border / Strong          Neutral 300    Neutral 600
  Border / Subtle          Neutral 800    Neutral 100
  Interactive / Default    Cyan Wave      Blue 700
  Interactive / Hover      Blue 200       Blue 800
  Interactive / Active     Blue 100       Blue 900

The system also includes focus, feedback, overlay and scrim tokens.
Preserve existing token definitions and aliases in the Figma source file
rather than creating duplicates.

### Token architecture

Use three layers:

1.  **Primitive tokens:** raw colour, spacing and other foundational
    values.
2.  **Semantic tokens:** purpose-based values such as text, background,
    border and interactive states.
3.  **Component tokens:** component-specific aliases that reference
    semantic tokens.

Component tokens should alias semantic tokens wherever possible.

## 5. Typography

### Typeface roles

  -----------------------------------------------------------------------
  Role                    Typeface                Usage
  ----------------------- ----------------------- -----------------------
  Primary display         **Oswald**              Hero headlines, page
                                                  titles, section
                                                  headings, event titles
                                                  and short expressive
                                                  statements

  Secondary / body        **DM Sans**             Navigation, paragraphs,
                                                  descriptions, buttons,
                                                  labels, captions and
                                                  supporting information
  -----------------------------------------------------------------------

Do not use Syne. Do not introduce unrelated typefaces without an
explicit brand decision.

### Text styles

The system includes 14 text styles:

1.  Display / Hero
2.  Display / Large
3.  Heading / H1
4.  Heading / H2
5.  Heading / H3
6.  Heading / H4
7.  Body / Large
8.  Body / Regular
9.  Body / Small
10. Caption
11. Overline
12. Button / Large
13. Button / Regular
14. Button / Small

Use appropriate line heights and letter spacing. Avoid excessive
uppercase body text. Do not use Oswald for long-form paragraphs.

## 6. Spacing, grid and layout

### 6.1 Spacing scale

Use a 4px base unit and the following spacing values:

`4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160px`

Create reusable variables for section spacing, container padding,
component gaps, card spacing, text spacing, navigation spacing and form
spacing.

### 6.2 Responsive grid

  Breakpoint reference     Frame width   Columns
  ---------------------- ------------- ---------
  Desktop                       1440px        12
  Laptop                        1280px        12
  Tablet                         768px         8
  Mobile                         390px         4

Use consistent gutters and margins. Align major sections to the grid.
Use responsive constraints and layout changes rather than simply scaling
desktop layouts down.

**Pending validation:** 320px viewport reflow and 200% text zoom.

## 7. Component library

Build and maintain components using native Figma components, component
sets, variants, properties and Auto Layout. Reuse existing library
components before creating new ones.

### 7.1 Buttons

Five component sets:

-   Primary
-   Secondary
-   Tertiary
-   Text
-   Icon

Each set supports Small, Medium and Large sizes, with Default, Hover,
Active, Focus and Disabled states.

Where appropriate, expose properties for label, leading icon, trailing
icon, icon visibility and icon swap.

Use a minimum 48px touch target on mobile where practical.

### 7.2 Navigation

Existing component sets:

-   Navigation Item
-   Navigation Disclosure

Support desktop and mobile navigation patterns and Default, Hover,
Active, Focus and Disabled states. Mobile navigation rows should target
a 56px height.

### 7.3 Cards

Five component sets:

-   Experience Card
-   Service Card
-   Collaboration Card
-   Image Card
-   Editorial Card

Support editable headings, descriptions, media placeholders, optional
category labels and optional CTAs. Do not force every content type into
an identical card layout.

### 7.4 Forms

Eight component sets:

-   Text Input
-   Email Input
-   Phone Input
-   Date Input
-   Select Input
-   Textarea
-   Checkbox
-   Radio Button

Support Default, Hover, Focus, Filled, Disabled, Error and Success
states. Provide clear labels, helper text and validation messaging. Use
48px as the standard starting height for input controls.

### 7.5 Supporting components

-   Tag
-   Section Divider
-   Breadcrumb Item
-   Pagination Control
-   Footer Link Group
-   Footer Newsletter Block
-   Footer Legal Row
-   Footer Social Glyph Row

The presence of these elements does not mean a complete footer
composition has been assembled.

## 8. Interaction and motion

Motion should feel energetic, cinematic and deliberate---not
distracting.

Define consistent behaviour for buttons, navigation, cards, image
galleries, event listings, forms, mobile navigation, page transitions
and scroll-based sections.

Create reusable motion tokens for duration, easing, entrance, exit,
hover and scroll transitions.

Requirements:

-   Provide reduced-motion alternatives.
-   Do not make essential content dependent on animation.
-   Preserve keyboard access and clear interaction states.
-   Avoid animation used only as decoration.

## 9. Responsive behaviour

### Desktop --- 1440px

-   Full navigation.
-   Multi-column layouts.
-   Large display typography.
-   Cinematic media sections.
-   Generous section spacing.

### Laptop --- 1280px

-   Preserve hierarchy.
-   Adjust container widths.
-   Maintain readable text sizes.
-   Prevent horizontal overflow.

### Tablet --- 768px

-   Reduce column counts.
-   Reorganise navigation.
-   Adjust typography.
-   Stack complex layouts where appropriate.

### Mobile --- 390px

-   Mobile navigation.
-   Single-column content where appropriate.
-   Readable body text.
-   Proper image cropping.
-   Comfortable touch targets.
-   Clear CTA hierarchy.

Also validate at 320px and 200% browser text zoom.

## 10. Accessibility

**Target: WCAG 2.2 AA. This is a target, not a claim of conformance.**

Design for:

-   Text contrast.
-   Non-text contrast.
-   Keyboard navigation.
-   Visible focus indicators.
-   Adequate target sizes.
-   Accessible form labels and errors.
-   Colour-independent communication.
-   Responsive reflow.
-   Reduced motion.
-   Video captions and controls.
-   Alternatives to dragging interactions.

Selected colour-pair calculations have been checked for both themes.
These are sample checks, not a complete audit.

### Current documented status

  Area                    Status
  ----------------------- -----------------------------------------
  Text contrast           Pass --- token sample
  Non-text contrast       Pass --- token sample
  Focus and keyboard      Partial --- keyboard testing pending
  Target sizes            Partial --- sizes reviewed
  Forms                   Partial --- browser/DOM testing pending
  Colour independence     Partial --- visual review pending
  Resizing and reflow     Not tested
  Reduced motion          Not tested
  Video accessibility     Not tested
  Dragging alternatives   Not tested
  Annotations             Partial --- design notes

Do not claim WCAG compliance until the implemented website has been
tested. Recommended validation includes keyboard-only testing, screen
readers, Lighthouse, Playwright with axe-core, browser zoom and
reduced-motion checks.

## 11. Figma organisation and naming

Organise the design system into these pages:

1.  Foundations
2.  Buttons
3.  Navigation
4.  Cards
5.  Forms
6.  Other Components
7.  Accessibility
8.  Responsive Rules
9.  Tokens & Handoff
10. Brand Assets

Use clear, consistent names. Examples:

-   `color/primitive/blue/500`
-   `color/semantic/text/primary`
-   `color/component/button/primary/background`
-   `typography/display/hero`
-   `typography/body/regular`
-   `spacing/section/large`
-   `button/primary`
-   `card/experience`
-   `navigation/item`

Use native Figma variables, text styles, grid styles, components,
variants and Auto Layout. Document component purpose, anatomy, variants,
states, usage and accessibility considerations.

## 12. Current Figma inventory and implementation status

The existing WAVE Master Design System contains:

  Category                 Current inventory
  ---------------------- -------------------
  Primitive variables                    146
  Semantic variables                      22
  Component variables                     32
  Responsive variables                    26
  Text styles                             14
  Native grid styles                       4

Existing component inventory:

  -----------------------------------------------------------------------
  Category                            Current inventory
  ----------------------------------- -----------------------------------
  Buttons                             5 component sets, 75 variants

  Navigation                          2 component sets, 12 variants

  Cards                               5 component sets, 60 variants

  Forms                               8 component sets, 56 variants

  Other components                    Tags, dividers, breadcrumbs,
                                      pagination and footer elements
  -----------------------------------------------------------------------

These counts describe the current working file and should be rechecked
before any future restructuring. Do not recreate existing components
merely to reproduce these counts.

## 13. WAVE website application

The design system supports a five-page website:

1.  Home
2.  Events
3.  Production
4.  About
5.  Contact

Keep two primary journeys distinct:

**Audience journey:** Discover events → event details → ticket
information.

**Commercial journey:** Explore production capabilities → production
enquiry.

The website workflow is Figma-first, followed by implementation in
Antigravity. Do not use Webflow for this WAVE website.

## 14. Visual rules

### Do

-   Use bold Oswald headlines.
-   Use DM Sans for readable content.
-   Use the official blue palette consistently.
-   Use cinematic event imagery and video.
-   Use expressive layouts and playful graphic elements.
-   Maintain strong spacing and grid discipline.
-   Design desktop, tablet and mobile layouts.
-   Keep ticket-booking and production-enquiry journeys separate.

### Do not

-   Use glassmorphism.
-   Use generic SaaS dashboard layouts.
-   Overuse electric blue.
-   Introduce random decorative gradients.
-   Overuse cards.
-   Invent event statistics, client names or testimonials.
-   Sacrifice accessibility for visual effects.
-   Recreate or modify the official WAVE logo.

## 15. Quality control and release checklist

Before treating the system as production-ready:

1.  Check all component variants.
2.  Check typography consistency.
3.  Check variable aliases.
4.  Check Dark and Light semantic modes.
5.  Check component resizing.
6.  Check mobile touch targets.
7.  Check visible focus states.
8.  Check text and non-text contrast.
9.  Check responsive reflow.
10. Check component naming and organisation.
11. Import and verify the supplied official WAVE logo.
12. Assemble and review complete website sections.
13. Test the implemented website with keyboard, browser and
    assistive-technology checks.

Mark incomplete tests clearly. Never convert a design intention into a
claim that implementation or accessibility testing has passed.

------------------------------------------------------------------------

## 16. Core instruction for AI design tools

When using this document as context:

-   Treat it as the WAVE source of truth.
-   Preserve approved brand colours and typography.
-   Audit and reuse existing components before creating new ones.
-   Do not create a disconnected second design system.
-   Do not invent brand facts, clients, events, statistics or contact
    details.
-   Keep designs editable and responsive.
-   Clearly distinguish proposed decisions from approved decisions.
-   Clearly label placeholders.
-   Do not claim that a design has been implemented, tested or published
    unless that work has actually been completed.

**Final design direction:** WAVE should look and behave like a
contemporary live-culture brand with the structure, consistency and
maintainability of a professional digital product design system.
