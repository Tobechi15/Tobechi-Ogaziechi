---
name: Kinetic Obsidian
colors:
  surface: '#111415'
  surface-dim: '#111415'
  surface-bright: '#373a3b'
  surface-container-lowest: '#0c0f10'
  surface-container-low: '#191c1d'
  surface-container: '#1d2021'
  surface-container-high: '#282a2b'
  surface-container-highest: '#323536'
  on-surface: '#e1e3e4'
  on-surface-variant: '#e4beb4'
  inverse-surface: '#e1e3e4'
  inverse-on-surface: '#2e3132'
  outline: '#ab8980'
  outline-variant: '#5b4039'
  surface-tint: '#ffb5a0'
  primary: '#ffb5a0'
  on-primary: '#5f1500'
  primary-container: '#ff5722'
  on-primary-container: '#541200'
  inverse-primary: '#b02f00'
  secondary: '#c8c6c8'
  on-secondary: '#303032'
  secondary-container: '#474649'
  on-secondary-container: '#b7b4b7'
  tertiary: '#ffb59e'
  on-tertiary: '#5e1700'
  tertiary-container: '#df714e'
  on-tertiary-container: '#521300'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb5a0'
  on-primary-fixed: '#3b0900'
  on-primary-fixed-variant: '#862200'
  secondary-fixed: '#e5e1e4'
  secondary-fixed-dim: '#c8c6c8'
  on-secondary-fixed: '#1b1b1d'
  on-secondary-fixed-variant: '#474649'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#ffb59e'
  on-tertiary-fixed: '#3a0b00'
  on-tertiary-fixed-variant: '#7f2a0d'
  background: '#111415'
  on-background: '#e1e3e4'
  surface-variant: '#323536'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system delivers a punchy, high-contrast, modern engineering aesthetic tailored for elite software engineers, architects, and technical leaders. It merges high-impact contrast minimalism with kinetic tactile accents: deep obsidian and charcoal grounds paired with an electric, luminous burnt orange / fiery coral accent.

The experience commands authority while retaining approachable elegance. Alternating modular high-contrast sections (crisp, pristine off-white light surfaces transitioning seamlessly into rich charcoal-black technical enclosures) create deliberate pacing throughout the narrative. Subtle glowing borders, pill badges, diagonal action triggers, and structured data modules evoke technical precision, developer craft, and premium finish.

## Colors

The palette leverages tension between high-density dark surfaces and ultra-clean bright canvases, anchored by a fiery kinetic orange.

- **Primary (`#FF5722`)**: Energetic burnt orange / fiery coral. Used for high-priority calls to action, active tab highlights, timeline milestones, and glow effects.
- **Secondary (`#121214`)**: Deep obsidian charcoal. Acts as the bedrock container canvas for dark panels, floating cards, and structural dark-mode islands.
- **Tertiary (`#FF8A65`)**: Warm coral tint. Applied for subtle badge fills, hover shifts, and tinted border halos.
- **Neutral (`#F8F9FA`)**: Crisp off-white. Serves as the primary canvas for daytime sections, high-contrast typography, and clean text surfaces.

### Semantic Color Application
- **Canvas Base**: Alternating sections of `#F8F9FA` and `#121214`.
- **Card Surfaces**: On dark canvases, use `#1A1A1E` with subtle `#2A2A30` borders; on light canvases, use `#FFFFFF` with muted `#E5E7EB` borders.
- **Text & Hierarchy**: Heavy obsidian `#121214` for headers on light backgrounds; pure white `#FFFFFF` and muted ash `#9CA3AF` on dark panels.

## Typography

The type system blends the contemporary, geometric warmth of Plus Jakarta Sans for titles and dynamic metrics with the crisp technical legibility of Inter for continuous body text, code snippets, and narrative descriptions.

- **Headlines**: Tight letter-spacing, pronounced bold weights (`700` and `800`), emphasizing personal brand statements and key section topics.
- **Body & Data**: Inter maintains neutral clarity across diverse viewport densities and complex technical project descriptions.
- **Accents**: Highlighted headline tokens are frequently tinted with the primary orange accent (`#FF5722`) to guide reading cadence.

## Layout & Spacing

A 12-column responsive fluid grid anchors all structural modules, standardizing clean alignments across devices.

- **Desktop**: Max canvas width of `1280px` centered, utilizing `2rem` outer margins and `1.5rem` gutters. Section stacks use expansive vertical breathing room (`space-xl` to double `space-xl`) between theme shifts.
- **Tablet (768px - 1024px)**: 8-column layout with `1.5rem` margins and `1rem` gutters. Cards reflow from 3 columns to 2 columns.
- **Mobile (< 768px)**: 4-column layout with `1rem` margins and `0.75rem` gutters. Stacks collapse into single columns, full-width carousel slides, and consolidated vertical feeds.

## Elevation & Depth

Visual hierarchy uses architectural block-level layering combined with delicate optical borders and ambient chromatic glows rather than heavy realistic drop shadows:

- **Section Foundations**: High-contrast block transitions (e.g., `#FFFFFF` to `#121214`) create primary section elevation.
- **Dark Surface Containers**: Nested panels use `#1A1A1E` elevated above `#121214`, paired with a 1px border (`rgba(255, 255, 255, 0.08)`).
- **Active State Glow**: Hovered project cards and interactive buttons project a diffuse orange aura (`0px 12px 32px rgba(255, 87, 34, 0.28)`).
- **Floating Floating Navigation**: High-blur frosted glass pill navigation bar (`backdrop-filter: blur(16px); background: rgba(18, 18, 20, 0.85); border: 1px solid rgba(255, 255, 255, 0.1)`).

## Shapes

The interface embraces a hyper-rounded, modern tactile geometry. Micro-elements like badges, status pills, and interactive buttons adopt complete pill shaping (`9999px`), while macro components (section cards, interactive showcase viewports, and modal wrappers) employ pronounced curved radii (`rounded-2xl` and `rounded-3xl` / 1.5rem to 2rem).

Accent graphics utilize circular backdrop disks (such as the energetic orange circular arc framing profile portraits or hero headers) to introduce organic geometry against sharp structural grids.

## Components

### Buttons
- **Primary CTA**: Solid `#FF5722` fill, white bold label, pill geometry (`rounded-full`), padding `12px 28px`. Includes right-aligned dynamic diagonal arrow (`↗`) icon inside an inverted circle token or inline.
- **Secondary CTA**: Translucent or outlined style (`border: 1px solid currentColor`), matching pill geometry, smooth background transition on hover.
- **Icon Action Buttons**: Circular pill buttons with centered SVG glyphs, shifting into fiery orange fill when hovered.

### Project & Showcase Cards
- Encased in deep charcoal (`#1A1A1E`) or crisp white container frames with `rounded-3xl`.
- Upper card area features visual screenshot previews nestled inside rounded inner enclosures (`rounded-2xl`).
- Bottom-right corner features a prominent circular action badge containing a diagonal arrow icon (`↗`). Active cards transition the badge background into vibrant `#FF5722`.

### Timeline & Experience
- Vertical hairline path connecting dual-ring milestone nodes.
- Current/featured role nodes are filled with fiery orange `#FF5722` with a concentric faint halo; historical nodes use slate charcoal (`#374151`).
- Two-column or alternating metadata layout displaying organization, date pill badge, role title, and tech stack tags.

### Stats Counters & Badges
- Floating metric modules (`"10+ Years"`, `"450+ Projects"`) featuring oversized bold numerals, high-contrast labels, and optional micro star-rating arrays.
- Greeting badges styled as playful pill tags with micro-callouts (`"Hello!"`).

### Input Fields & Controls
- Pill or rounded-xl inputs with deep charcoal background (`#1A1A1E`), subtle border, and vibrant `#FF5722` focus rings.
- Checkboxes and radios utilize custom orange active fills with clean geometric indicators.