---
name: TheraNode
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#414943'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#717973'
  outline-variant: '#c0c9c2'
  surface-tint: '#396752'
  primary: '#396752'
  on-primary: '#ffffff'
  primary-container: '#90c1a7'
  on-primary-container: '#21503c'
  inverse-primary: '#a0d1b7'
  secondary: '#516352'
  on-secondary: '#ffffff'
  secondary-container: '#d4e8d2'
  on-secondary-container: '#576958'
  tertiary: '#496456'
  on-tertiary: '#ffffff'
  tertiary-container: '#a0bdad'
  on-tertiary-container: '#334d40'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bbeed2'
  primary-fixed-dim: '#a0d1b7'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#204f3b'
  secondary-fixed: '#d4e8d2'
  secondary-fixed-dim: '#b8ccb7'
  on-secondary-fixed: '#0f1f12'
  on-secondary-fixed-variant: '#3a4b3b'
  tertiary-fixed: '#cbead8'
  tertiary-fixed-dim: '#b0cdbc'
  on-tertiary-fixed: '#052015'
  on-tertiary-fixed-variant: '#324c3f'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  headline-lg:
    fontFamily: Lexend
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Lexend
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Lexend
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Lexend
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Lexend
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Lexend
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-display:
    fontFamily: Lexend
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 20px
  stack-gap: 16px
  section-gap: 32px
  card-inner-padding: 16px
---

## Brand & Style
The brand personality is a sophisticated intersection of clinical reliability and organic empathy. It is designed for high-performing individuals who value data-driven self-optimization but require a soothing, non-judgmental environment to process their mental well-being.

The design style is **Corporate / Modern** with a strong emphasis on **Minimalism**. It leverages the precision of health-tech analytics—crisp lines, clear data visualization, and structured grids—softened by an organic, sage-focused color palette. This "Clinical Zen" approach ensures the interface feels like a professional medical tool while maintaining the approachability of a personal wellness sanctuary. Generous whitespace is used strategically to prevent cognitive overload, reinforcing a sense of calm during data entry and review.

## Colors
The palette is rooted in a spectrum of sage greens to evoke growth and tranquility. 

- **Primary & Secondary:** Medium Sage (#90C1A7) and Soft Sage (#C0D4BF) are used for interactive elements like sliders and primary buttons, providing a soft but clear visual signal.
- **Background:** The near-white (#F6F7F8) serves as a sterile, "clinical-clean" canvas that allows the greens to stand out without high-contrast strain.
- **Text:** Deep Slate (#1E293B) provides maximum legibility for data points and long-form notes.
- **Privacy Mode:** A specialized Dark Sage (#394740) is reserved for secure sections (PIN entry, biometric screens), signaling a change in the "safety" of the environment.
- **Accent:** Emerald Green (#10B981) is used sparingly for success states, confirmations, and significant positive data trends.

## Typography
This design system utilizes **Lexend** exclusively to capitalize on its high readability and geometric clarity, which supports the app's data-driven nature.

- **Headlines:** Use a Semi-Bold (600) weight with slight negative letter-spacing for a modern, premium editorial feel.
- **Labels:** Applied to categories like "Personal Notes" or "Energy," these use a Medium (500) weight with increased letter-spacing and uppercase styling to provide clear section hierarchy without needing heavy dividers.
- **Data Points:** Quantitative values (e.g., "9.5" or "Mood: 7.6") should use the Deep Sage color and Semi-Bold weight to distinguish them from standard body text.

## Layout & Spacing
The layout follows a **Fluid Grid** logic optimized for mobile-first usage. 

- **Grid:** A 4-column system for mobile with 16px gutters and 20px outer margins.
- **Rhythm:** An 8px linear scale (using a 4px base unit) governs all vertical spacing.
- **Structure:** Content is organized into discrete card units. To maintain the "airy" feel, sections are separated by 32px of whitespace. 
- **Alignment:** Clinical precision is maintained through strict left-alignment of text and data, while interactive sliders are centered within their respective card containers to create a balanced focal point.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and **Ambient Shadows** to maintain a soft, premium aesthetic.

- **Surfaces:** The primary background is #F6F7F8. Cards and input fields use a pure white (#FFFFFF) surface to "lift" them off the background.
- **Shadows:** Cards use an extremely subtle, diffused shadow: `0px 4px 12px rgba(30, 41, 59, 0.03)`. This provides just enough separation to indicate interactability without looking heavy.
- **Interactive States:** Buttons and active sliders do not use shadows but rather a subtle increase in color saturation (from Soft Sage to Medium Sage) to indicate state changes.

## Shapes
The shape language is consistently **Rounded**, providing the "personal warmth" required by the brand narrative.

- **Cards & Containers:** A mandatory 12px (0.75rem) border radius is applied to all primary cards, ensuring they feel soft and approachable.
- **Interactive Elements:** Buttons and sliders utilize a larger radius (16px or full-pill) to distinguish them from informational containers.
- **Data Visualization:** Bar charts and progress indicators should use rounded caps rather than sharp 90-degree corners to maintain the organic theme.

## Components
- **Sliders:** The primary interaction tool. Tracks should be thin (4px) in Soft Sage, with a larger, circular thumb (24px diameter) in White with a 1px Medium Sage border.
- **Buttons:** High-emphasis actions (e.g., "Submit Daily Log") use a solid Medium Sage fill with White text. Secondary actions use a ghost style with a 1px Soft Sage border.
- **Cards:** White background, 12px radius, subtle shadow. Cards should always have a 16px internal padding.
- **Charts:** Use the Medium Sage for primary data bars and Soft Sage for comparison/secondary data. All axes and grid lines should be rendered in a very light slate (#E2E8F0).
- **Tags/Chips:** Small, 4px radius, using a light sage background (#E9F0E8) with Deep Sage text.
- **Privacy PIN Pad:** Large, square-rounded buttons (12px radius) with generous spacing, utilizing the Privacy Section Background for the screen and White for the numeric keys to ensure high focus.