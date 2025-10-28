# Claire Quest - Design Guidelines

## Design Philosophy
Create a **cozy, romantic, playful, and slightly nerdy** treasure hunt experience. The design should evoke the warmth of Taylor Swift piano covers, the gentle drift of soft pastel autumn leaves, and the intimacy of a personal love letter. This is a mobile-first, one-handed scrolling experience optimized for emotional connection and ease of use.

## Color System

**Primary Palette:**
- **Plum**: #83425B (Primary accent, CTAs, emphasis)
- **Mauve**: #BBB3C8 (Secondary elements, borders)
- **Dusty Blue**: #A1CBDB (Calm accents, backgrounds)
- **Rose**: #E59EA9 (Interactive highlights, hearts)
- **Blush**: #FBB9CB (Soft backgrounds, gentle emphasis)

Use soft gradients blending these colors for backgrounds and subtle overlays. Maintain high contrast for text readability against pastel backgrounds.

## Typography

**Headings**: Quicksand or Baloo 2 (rounded, friendly, display font)
- Hero headlines: 2.5rem to 3rem, font-weight 600-700
- Section titles: 1.75rem to 2rem, font-weight 600
- Sub-headings: 1.25rem to 1.5rem, font-weight 500

**Body Text**: Inter
- Primary text: 1rem (16px), font-weight 400, line-height 1.6
- Small text/hints: 0.875rem (14px), font-weight 400

## Layout Architecture

**Mobile-First Structure** (320px - 428px primary viewport):
- Single column, vertically scrollable
- Persistent top navigation bar: 56px height with heart icon (left) and music toggle (right)
- Persistent bottom bar: 72px height containing sparkly "Next" button
- Main content area: Fills space between top and bottom bars with generous vertical padding (py-8 to py-12)

**Spacing System**:
Use Tailwind units consistently: 2, 4, 6, 8, 12, 16, 20, 24 for spacing
- Section padding: py-12 to py-16
- Element spacing: gap-6 to gap-8
- Content max-width: max-w-md centered

## Component Design

**Persistent Top Bar**:
- Fixed position, backdrop-blur with subtle Mauve/Blush gradient overlay
- Tiny heart icon (20px) on left with gentle pulse animation
- Music toggle button on right with vinyl record icon that rotates when playing
- Optional progress dots (6-8px circles) centered, filled with Rose as user advances

**Animated Headlines**:
- Use react-bits AnimatedText with fade-up or typewriter effects
- Soft glow effect around text using text-shadow with Blush/Rose colors
- Include relevant emoji (☕, 💆‍♀️, 🧦, 🦢, ❤️) inline with headlines

**Message Cards**:
- Rounded-2xl cards with frosted glass effect (backdrop-blur-md)
- Soft gradient backgrounds blending palette colors
- Padding: p-6 to p-8
- Subtle shadow for depth: shadow-lg with Rose/Mauve tint

**Hint Accordions**:
- Collapsed state: Single line with "💡 Need a hint?" text and chevron icon
- Expanded: Smooth height transition revealing hint text
- Border-l-4 with Plum accent when expanded
- Background: Light Blush with subtle gradient

**Next Button** (Bottom Bar):
- Large touch target: min-height 56px, full-width with mx-4 margins
- Rounded-full with gradient background (Plum → Rose)
- Sparkly pulse animation on idle using framer-motion
- Text: "Continue →" or "Next Stop →" in white, font-weight 600
- On tap: Scale down to 0.95, then burst of small sparkle particles

**Hold-to-Unlock Trigger** (/pasta page only):
- Circular progress ring (120px diameter) overlaid on main content
- Ring starts as thin outline in Mauve, gradually fills with glowing Rose gradient
- Center displays "Hold for a surprise..." text with countdown (10s → 0s)
- Progress fills clockwise over 10 seconds
- On completion: Gentle vibration (if supported), confetti burst, auto-navigate to /finale

## Background & Atmosphere

**Animated Background**:
Choose one: Autumn Leaves or Liquid Ether from react-bits
- Configure with palette colors (Blush, Rose, Dusty Blue, Mauve)
- Slow, gentle motion (speed: 0.3-0.5)
- Subtle opacity (0.15-0.25) to not overwhelm content
- Full-screen coverage with z-index below all content

**Background Music**:
- Instrumental Taylor Swift piano covers (Lover, Enchanted, You Are In Love)
- Low volume (≈ 20% or -20dB)
- Fade in over 2 seconds on page load
- Cross-fade between tracks when navigating pages (1.5s overlap)
- Music toggle state persists in localStorage
- If autoplay blocked: Show centered "Tap to Start Music 🎵" overlay with Blush background

## Page Transitions

Use framer-motion for page-to-page navigation:
- Outgoing page: Fade out + slight scale down (0.98) over 300ms
- Incoming page: Fade in + slide up 20px over 400ms with 100ms delay
- Maintain persistent top/bottom bars throughout transitions

## Special Animations

**Confetti Burst** (/finale page):
- Trigger immediately on page load
- Multi-colored confetti using palette colors
- Fall duration: 3-4 seconds
- Particle count: 100-150 pieces

**Optional Heart Cursor Trail**:
- Small heart particles (12-16px) that follow cursor/touch
- Fade out after 500ms
- Use Rose and Blush colors alternating
- Subtle drop shadow for visibility

**Sparkle Effects**:
- Appear randomly near "Next" button every 2-3 seconds
- Small star/sparkle icons (8-12px) with fade in/out + slight position shift
- Use Blush and Dusty Blue colors

## Images

**No hero images required** - This is a content-focused, text-driven romantic experience with animated backgrounds providing visual interest. Each page relies on emotional copy, emoji accents, and animated text effects rather than photography or illustrations.

## Responsive Behavior

**Primary Target**: Mobile (320px - 428px)
**Secondary**: Tablet (429px - 768px) - Scale up spacing and fonts proportionally
**Desktop** (769px+): Max-width container (480px) centered with larger animated background visible on sides

Maintain single-column layout across all breakpoints for simplicity and focus.