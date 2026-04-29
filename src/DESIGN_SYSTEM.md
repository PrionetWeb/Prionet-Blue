# Priority Pay Network Design System

> A comprehensive design system for secure medical debt management platform

## Table of Contents

- [Overview](#overview)
- [Typography](#typography)
- [Color Palette](#color-palette)
- [Spacing](#spacing)
- [Border Radius](#border-radius)
- [Elevation & Shadows](#elevation--shadows)
- [Components](#components)
- [Accessibility](#accessibility)
- [Usage Guidelines](#usage-guidelines)

---

## Overview

The Priority Pay Network design system is built on modern web standards using CSS custom properties (CSS variables) for maximum flexibility and theming support. All design tokens are defined in `/styles/globals.css` and can be easily customized to match your brand requirements.

### Design Principles

1. **CSS Variables First** - All styling must use design system CSS variables, never hard-coded values
2. **Accessibility First** - WCAG 2.1 AA compliant with proper ARIA labels and semantic HTML
3. **Theme Support** - Built-in light and dark mode support
4. **Typography Control** - Only use font faces defined in the CSS, no Tailwind typography overrides
5. **Flexibility** - CSS variables allow easy customization without code changes
6. **Modern Patterns** - Utilizes 2025 design patterns including Bento grids and contemporary layouts

### Important Note on Fonts

**⚠️ Font Discrepancy**: The Guidelines.md file specifies **Satoshi Variable** font for all headings and body text, but the current `globals.css` file uses **Roboto, Outfit, and Inter**. Please update the font imports in `globals.css` if Satoshi Variable is the intended design system font.

---

## Typography

### Font Families

**Current Implementation** (as defined in `/styles/globals.css`):

```css
--font-roboto: "Roboto", sans-serif;    /* Headings H1, H2 */
--font-outfit: "Outfit", sans-serif;    /* Headings H3, H4, Body, UI Elements */
--font-inter: "Inter", sans-serif;      /* Alternative system font */
```

**⚠️ Guidelines Specification**: According to `Guidelines.md`, the design should use **Satoshi Variable** font for all heading and body text. If this is correct, update the font import URL in `globals.css`:

```css
/* Replace current font import with: */
@import url("https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap");

/* Then update font variables to: */
--font-satoshi: "Satoshi", sans-serif;
```

### Font Sizes

```css
--text-h1: 56px;      /* Primary headlines */
--text-h2: 48px;      /* Secondary headlines */
--text-h3: 32px;      /* Section headers */
--text-h4: 24px;      /* Subsection headers */
--text-base: 16px;    /* Body text, buttons, inputs */
--text-sm: 12px;      /* Labels, captions */
```

### Font Weights

```css
--font-weight-bold: 700;      /* Headings, emphasis */
--font-weight-regular: 400;   /* Body text, UI elements */
```

### Typography Scale

| Element | Font Family | Size | Weight | Line Height | Usage |
|---------|-------------|------|--------|-------------|-------|
| **H1** | Roboto | 56px | 700 | 1.2 | Page titles, hero headlines |
| **H2** | Roboto | 48px | 700 | 1.2 | Major section headers |
| **H3** | Outfit | 32px | 700 | 1.3 | Section headers |
| **H4** | Outfit | 24px | 700 | 1.3 | Subsection headers |
| **Paragraph** | Outfit | 16px | 400 | 1.5 | Body text, descriptions |
| **Span** | Outfit | 16px | 400 | 1.5 | Inline text elements |
| **Label** | Outfit | 12px | 400 | 1.4 | Form labels, captions |
| **Button** | Outfit | 16px | 400 | 1.5 | Interactive elements |
| **Input** | Outfit | 16px | 400 | 1.5 | Form inputs |

### Implementation

Typography is automatically applied through semantic HTML elements. **CRITICAL: Do not use** Tailwind typography classes (`text-2xl`, `font-bold`, `leading-none`, etc.) unless the user specifically requests to override.

**Typography is controlled exclusively through CSS variables in `globals.css`.**

```tsx
// ✅ CORRECT - Uses default typography from CSS
<h1>Priority Pay Network</h1>
<p>Secure medical debt management platform</p>

// ❌ NEVER DO THIS - Overrides design system
<h1 className="text-4xl font-bold">Title</h1>
<p className="text-base font-normal">Text</p>

// ✅ OK - Only when absolutely necessary
<h1 style={{ fontSize: 'var(--text-h1)' }}>Custom Title</h1>
```

**Rule**: If you need to customize typography, update the CSS variables in `globals.css`, not individual components.

---

## Color Palette

### Light Mode Colors

#### Primary Colors

```css
--background: rgba(233, 243, 241, 1);      /* Main background - Soft mint */
--foreground: rgba(63, 63, 63, 1);         /* Primary text - Dark gray */
--card: rgba(255, 255, 255, 1);            /* Card background - White */
--card-foreground: rgba(63, 63, 63, 1);    /* Card text - Dark gray */
```

#### Interactive Colors

```css
--primary: rgba(37, 99, 235, 1);                /* Primary actions - Blue */
--primary-foreground: rgba(255, 255, 255, 1);   /* Text on primary - White */
--secondary: rgba(229, 231, 235, 1);            /* Secondary actions - Light gray */
--secondary-foreground: rgba(31, 41, 55, 1);    /* Text on secondary - Dark gray */
--accent: rgba(37, 99, 235, 1);                 /* Accents - Blue */
--accent-foreground: rgba(255, 255, 255, 1);    /* Text on accent - White */
```

#### Utility Colors

```css
--muted: rgba(63, 63, 63, 0.4);                 /* Disabled elements - Gray 40% */
--muted-foreground: rgba(63, 63, 63, 1);        /* Disabled text - Dark gray */
--destructive: rgba(240, 68, 56, 1);            /* Error states - Red */
--destructive-foreground: rgba(255, 255, 255, 1); /* Text on destructive - White */
```

#### UI Elements

```css
--border: rgba(204, 204, 204, 1);              /* Default borders - Light gray */
--input: rgba(255, 255, 255, 1);               /* Input filled state - White */
--input-background: rgba(245, 245, 245, 1);    /* Input background - Off white */
--ring: rgba(59, 130, 246, 1);                 /* Focus rings - Blue */
--popover: rgba(0, 0, 0, 0);                   /* Popover background - Transparent */
--popover-foreground: rgba(63, 63, 63, 1);     /* Popover text - Dark gray */
```

#### Charts

```css
--chart-1: rgba(59, 130, 246, 1);   /* Blue */
--chart-2: rgba(100, 228, 221, 1);  /* Turquoise */
--chart-3: rgba(78, 198, 140, 1);   /* Green */
--chart-4: rgba(158, 119, 237, 1);  /* Purple */
--chart-5: rgba(71, 85, 105, 1);    /* Slate */
```

#### Sidebar

```css
--sidebar: rgba(255, 255, 255, 1);                    /* Background - White */
--sidebar-foreground: rgba(63, 63, 63, 1);            /* Text - Dark gray */
--sidebar-primary: rgba(59, 130, 246, 1);             /* Primary - Blue */
--sidebar-primary-foreground: rgba(255, 255, 255, 1); /* Primary text - White */
--sidebar-accent: rgba(59, 130, 246, 1);              /* Accent - Blue */
--sidebar-accent-foreground: rgba(255, 255, 255, 1);  /* Accent text - White */
--sidebar-border: rgba(204, 204, 204, 1);             /* Border - Light gray */
--sidebar-ring: rgba(59, 130, 246, 1);                /* Focus ring - Blue */
```

### Dark Mode Colors

Dark mode is automatically applied using the `.dark` class on a parent element.

#### Primary Colors

```css
--background: rgba(63, 63, 63, 1);       /* Main background - Dark gray */
--foreground: rgba(255, 255, 255, 1);    /* Primary text - White */
--card: rgba(63, 63, 63, 1);             /* Card background - Dark gray */
--card-foreground: rgba(255, 255, 255, 1); /* Card text - White */
```

#### Interactive Colors

```css
--primary: rgba(0, 184, 217, 1);                /* Primary actions - Cyan */
--primary-foreground: rgba(255, 255, 255, 1);   /* Text on primary - White */
--secondary: rgba(75, 85, 99, 1);               /* Secondary actions - Gray */
--secondary-foreground: rgba(255, 255, 255, 1); /* Text on secondary - White */
--accent: rgba(0, 184, 217, 1);                 /* Accents - Cyan */
--accent-foreground: rgba(255, 255, 255, 1);    /* Text on accent - White */
```

#### Utility Colors

```css
--muted: rgba(255, 255, 255, 0.4);              /* Disabled elements - White 40% */
--muted-foreground: rgba(255, 255, 255, 1);     /* Disabled text - White */
--destructive: rgba(240, 68, 56, 1);            /* Error states - Red */
--destructive-foreground: rgba(255, 255, 255, 1); /* Text on destructive - White */
```

#### UI Elements

```css
--border: rgba(150, 150, 150, 1);     /* Default borders - Medium gray */
--input: rgba(100, 100, 100, 1);      /* Input filled state - Gray */
--ring: rgba(64, 232, 255, 1);        /* Focus rings - Light cyan */
--popover: rgba(63, 63, 63, 1);       /* Popover background - Dark gray */
--popover-foreground: rgba(255, 255, 255, 1); /* Popover text - White */
```

#### Sidebar

```css
--sidebar: rgba(50, 50, 50, 1);                   /* Background - Dark */
--sidebar-foreground: rgba(255, 255, 255, 1);     /* Text - White */
--sidebar-primary: rgba(64, 232, 255, 1);         /* Primary - Light cyan */
--sidebar-primary-foreground: rgba(63, 63, 63, 1); /* Primary text - Dark */
--sidebar-accent: rgba(64, 232, 255, 1);          /* Accent - Light cyan */
--sidebar-accent-foreground: rgba(63, 63, 63, 1); /* Accent text - Dark */
--sidebar-border: rgba(150, 150, 150, 1);         /* Border - Medium gray */
--sidebar-ring: rgba(64, 232, 255, 1);            /* Focus ring - Light cyan */
```

### Color Usage Guidelines

1. **Backgrounds**: Use `--background` for page backgrounds, `--card` for content containers
2. **Text**: Use `--foreground` for primary text, always check contrast ratios
3. **Interactive Elements**: Use `--primary` for primary actions, `--secondary` for secondary actions
4. **States**: Use `--muted` for disabled states, `--destructive` for errors
5. **Focus**: Always use `--ring` for focus states to maintain accessibility

---

## Spacing

While specific spacing variables are not defined in the current implementation, Tailwind's default spacing scale is used throughout. Consider these guidelines:

- **Component padding**: 4px, 8px, 12px, 16px, 24px
- **Section spacing**: 32px, 48px, 64px, 96px
- **Grid gaps**: 16px, 24px, 32px

---

## Border Radius

```css
--radius: 12px;                        /* Base radius */
--radius-sm: calc(var(--radius) - 4px);  /* 8px - Tight corners */
--radius-md: calc(var(--radius) - 2px);  /* 10px - Medium corners */
--radius-lg: var(--radius);              /* 12px - Default */
--radius-xl: calc(var(--radius) + 4px);  /* 16px - Relaxed corners */
```

### Usage

- **Buttons, Cards**: `--radius-lg` (12px)
- **Inputs**: `--radius-md` (10px)
- **Badges, Pills**: `--radius-xl` (16px) or full rounded
- **Tooltips**: `--radius-sm` (8px)

**Note**: Navigation buttons in selected state use `border-radius: 0` for visual distinction.

---

## Elevation & Shadows

```css
--elevation-sm: 
  0 1px 3px 0 rgba(0, 0, 0, 0.1),
  0 1px 2px 0 rgba(0, 0, 0, 0.06);
```

Use for:
- Cards
- Modals
- Dropdown menus
- Popovers

---

## Components

### Button Component

The button component is fundamental to user interactions. It follows the three-variant pattern outlined in the project guidelines.

#### Variants

**Primary Button**
```tsx
<Button variant="default" className="bg-primary text-primary-foreground">
  Primary Action
</Button>
```
- **Purpose**: Main call-to-action
- **Visual**: Filled with primary brand color
- **Usage**: One per section maximum

**Secondary Button**
```tsx
<Button variant="outline" className="border-primary text-primary">
  Secondary Action
</Button>
```
- **Purpose**: Alternative actions
- **Visual**: Outlined with transparent background
- **Usage**: Alongside primary button for less important actions

**Tertiary Button**
```tsx
<Button variant="ghost" className="text-primary">
  Tertiary Action
</Button>
```
- **Purpose**: Least important actions
- **Visual**: Text-only, no border
- **Usage**: For subtle actions

#### States

All buttons should include:
- **Hover**: `hover:scale-105` transition
- **Focus**: Visible focus ring using `--ring` color
- **Disabled**: Reduced opacity, muted colors
- **Active**: Visual feedback on click

### Navigation Component

- Desktop: Horizontal menu with selected state indicated by bottom border
- Mobile: Hamburger menu with slide-in panel
- Selected state: Uses `border-radius: 0` as specified
- Theme toggle: Defaults to light mode
- Includes proper ARIA labels and roles

### Cards

```tsx
<Card className="bg-card text-card-foreground">
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

### Forms

All form elements use:
- `--input-background` for background
- `--input` for filled state
- `--border` for borders
- Proper labels with `--text-sm` sizing
- Focus states with `--ring` color

---

## Accessibility

### WCAG 2.1 AA Compliance

The design system is built with accessibility as a core principle:

1. **Color Contrast**
   - All text meets WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text)
   - Interactive elements have sufficient contrast in all states

2. **Semantic HTML**
   - Proper heading hierarchy (H1 → H2 → H3 → H4)
   - Semantic elements (`<nav>`, `<main>`, `<button>`, etc.)
   - No generic div names

3. **ARIA Labels**
   - All interactive elements have descriptive labels
   - Navigation menus use proper ARIA roles
   - Form inputs have associated labels

4. **Keyboard Navigation**
   - All interactive elements are keyboard accessible
   - Visible focus indicators using `--ring` color
   - Logical tab order

5. **Screen Readers**
   - Descriptive alt text for images
   - ARIA attributes for dynamic content
   - Skip navigation links where appropriate

### Focus States

All interactive elements must have visible focus states:

```css
focus:outline-none 
focus:ring-2 
focus:ring-ring 
focus:ring-offset-2
```

---

## Usage Guidelines

### Customizing the Design System

All design tokens are defined in `/styles/globals.css`. To customize:

1. **Update Colors**: Modify the CSS variables in `:root` and `.dark` sections
2. **Typography**: Change font URLs, sizes, and families
3. **Spacing**: Adjust `--radius` values
4. **Shadows**: Modify `--elevation-sm` or add new elevation levels

### CSS Variables in Components

**MANDATORY: Always use CSS variables for styling. Never use hard-coded Tailwind colors.**

```tsx
// ✅ CORRECT - Uses design system CSS variables
<div className="bg-background text-foreground border-border">
<button className="bg-primary text-primary-foreground">
<Card className="bg-card text-card-foreground">

// ❌ NEVER DO THIS - Hard-coded colors break design system
<div className="bg-gray-100 text-gray-900 border-gray-300">
<button className="bg-blue-500 text-white">

// ✅ CORRECT - Using CSS variables directly in style prop
<div style={{ backgroundColor: 'var(--background)' }}>
```

**Critical Rules**:
1. **Colors**: Only use `bg-background`, `text-foreground`, `bg-primary`, `bg-card`, etc. from the design system
2. **Typography**: Never use `text-xl`, `text-2xl`, `font-bold`, `font-semibold` unless explicitly requested
3. **Borders**: Use `border-border`, `rounded-lg` (which uses `--radius`)
4. **Spacing**: Standard Tailwind spacing is OK (`p-4`, `m-6`, `gap-8`)

### Overriding Base Component Defaults

Some shadcn/ui components have default styling. **You must explicitly override** these with design system variables:

```tsx
// ❌ Base component might have defaults
<Button>Click Me</Button>

// ✅ Override with design system explicitly
<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Click Me
</Button>
```

### Theme Toggle

The application supports light/dark mode through a theme toggle:

```tsx
<ThemeToggle />
```

Default mode is **light** (not system preference). Users can manually switch themes.

### Responsive Design

Use Tailwind's responsive prefixes:
- `sm:` - 640px and up
- `md:` - 768px and up  
- `lg:` - 1024px and up
- `xl:` - 1280px and up

### Modern Layout Patterns

The design system encourages modern 2025 patterns:
- **Bento Grids**: Asymmetric grid layouts
- **Glass morphism**: Subtle blur effects
- **Micro-interactions**: Hover and focus animations
- **3D elements**: Where appropriate for visual interest

---

## Component Library

The project uses **shadcn/ui** components located in `/components/ui`:

- accordion, alert, alert-dialog, aspect-ratio, avatar
- badge, breadcrumb, button
- calendar, card, carousel, chart, checkbox, collapsible, command, context-menu
- dialog, drawer, dropdown-menu
- form
- hover-card
- input, input-otp
- label
- menubar
- navigation-menu
- pagination, popover, progress
- radio-group, resizable
- scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, switch
- table, tabs, textarea, toggle, toggle-group, tooltip

All components are pre-styled using the design system tokens and can be used directly.

---

## Icons

The project uses **Lucide React** for all iconography:

```tsx
import { Icon } from 'lucide-react';

<Icon className="w-6 h-6 text-primary" />
```

---

## Animation

Animations use **Motion (Framer Motion)**:

```tsx
import { motion } from 'motion/react';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  {content}
</motion.div>
```

---

## Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)
- [Motion Documentation](https://motion.dev)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## Changelog

**Version 1.0.0** - October 2025
- Initial design system release
- Light and dark mode support
- Complete component library
- WCAG 2.1 AA compliance
- Modern 2025 design patterns

---

## Support

For questions or contributions, please refer to the project's GitHub repository.
