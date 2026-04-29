# Design System Update - Important Changes

**Date**: October 14, 2025  
**Status**: ⚠️ Action Required

---

## 🎯 Critical Design System Rules

### 1. **CSS Variables ONLY**

**MANDATORY**: All UI generation must use CSS variables from `/styles/globals.css`. No hard-coded colors or values.

```tsx
// ✅ CORRECT
<div className="bg-background text-foreground border-border">
<Button className="bg-primary text-primary-foreground">

// ❌ WRONG - Never use hard-coded Tailwind colors
<div className="bg-gray-100 text-gray-900">
<Button className="bg-blue-500 text-white">
```

### 2. **Typography Control**

**CRITICAL**: Never use Tailwind typography classes (`text-xl`, `text-2xl`, `font-bold`, etc.) unless explicitly requested by the user.

Typography is controlled 100% through CSS variables in `globals.css`:
- `--text-h1` through `--text-h4`
- `--text-base` and `--text-sm`
- `--font-roboto`, `--font-outfit`, `--font-inter`
- `--font-weight-bold`, `--font-weight-regular`

```tsx
// ✅ CORRECT - Let CSS handle typography
<h1>This uses var(--text-h1) automatically</h1>
<p>This uses var(--text-base) automatically</p>

// ❌ WRONG - Overrides design system
<h1 className="text-4xl font-bold">Title</h1>
<p className="text-base">Body</p>
```

### 3. **Override Base Component Styling**

shadcn/ui components may have default styling. **Always explicitly set** design system variables to override:

```tsx
// ❌ May use component defaults
<Button>Click</Button>

// ✅ CORRECT - Explicit design system usage
<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Click
</Button>
```

---

## 🔤 Font Discrepancy - Action Required

### Current State

`/styles/globals.css` currently imports and uses:
- **Roboto** (H1, H2)
- **Outfit** (H3, H4, body, UI)
- **Inter** (alternative)

### Guidelines Specification

`/guidelines/Guidelines.md` specifies:
- **Satoshi Variable** for all heading and body text

### Required Action

**Choose one approach:**

#### Option A: Update globals.css to use Satoshi Variable

```css
/* Replace current font import in globals.css */
@import url("https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap");

/* Update CSS variables */
--font-satoshi: "Satoshi", sans-serif;

/* Update typography rules */
h1, h2, h3, h4, p, span, label, button, input {
  font-family: var(--font-satoshi);
}
```

#### Option B: Update Guidelines.md to match current fonts

Update `Guidelines.md` to specify:
- Use Roboto, Outfit, and Inter fonts as defined in `globals.css`

---

## 📋 Available CSS Variables

### Colors

#### Light Mode
```css
--background: rgba(233, 243, 241, 1);      /* Soft mint */
--foreground: rgba(63, 63, 63, 1);         /* Dark gray */
--card: rgba(255, 255, 255, 1);            /* White */
--primary: rgba(37, 99, 235, 1);           /* Blue */
--secondary: rgba(229, 231, 235, 1);       /* Light gray */
--accent: rgba(37, 99, 235, 1);            /* Blue */
--destructive: rgba(240, 68, 56, 1);       /* Red */
--muted: rgba(63, 63, 63, 0.4);            /* Gray 40% */
--border: rgba(204, 204, 204, 1);          /* Light gray */
--input: rgba(255, 255, 255, 1);           /* White */
--input-background: rgba(245, 245, 245, 1); /* Off white */
--ring: rgba(59, 130, 246, 1);             /* Blue */
```

#### Dark Mode
```css
--background: rgba(63, 63, 63, 1);         /* Dark gray */
--foreground: rgba(255, 255, 255, 1);      /* White */
--card: rgba(63, 63, 63, 1);               /* Dark gray */
--primary: rgba(0, 184, 217, 1);           /* Cyan */
--secondary: rgba(75, 85, 99, 1);          /* Gray */
--accent: rgba(0, 184, 217, 1);            /* Cyan */
--destructive: rgba(240, 68, 56, 1);       /* Red */
--muted: rgba(255, 255, 255, 0.4);         /* White 40% */
--border: rgba(150, 150, 150, 1);          /* Medium gray */
--input: rgba(100, 100, 100, 1);           /* Gray */
--ring: rgba(64, 232, 255, 1);             /* Light cyan */
```

### Typography
```css
--text-h1: 56px;
--text-h2: 48px;
--text-h3: 32px;
--text-h4: 24px;
--text-base: 16px;
--text-sm: 12px;

--font-roboto: "Roboto", sans-serif;
--font-outfit: "Outfit", sans-serif;
--font-inter: "Inter", sans-serif;

--font-weight-bold: 700;
--font-weight-regular: 400;
```

### Border Radius
```css
--radius: 12px;
--radius-sm: 8px;   /* calc(var(--radius) - 4px) */
--radius-md: 10px;  /* calc(var(--radius) - 2px) */
--radius-lg: 12px;  /* var(--radius) */
--radius-xl: 16px;  /* calc(var(--radius) + 4px) */
```

### Shadows
```css
--elevation-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
                0 1px 2px 0 rgba(0, 0, 0, 0.06);
```

---

## 🎨 Usage Examples

### Buttons

```tsx
// Primary Button
<Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg">
  Primary Action
</Button>

// Secondary Button (outlined)
<Button 
  variant="outline" 
  className="border-primary text-primary hover:bg-secondary rounded-lg"
>
  Secondary Action
</Button>

// Tertiary Button (ghost/text-only)
<Button 
  variant="ghost" 
  className="text-primary hover:bg-secondary/50"
>
  Tertiary Action
</Button>
```

### Cards

```tsx
<Card className="bg-card text-card-foreground border-border rounded-lg shadow-[var(--elevation-sm)]">
  <CardContent className="p-6">
    <h3>Card Title</h3>
    <p>Card content uses default typography</p>
  </CardContent>
</Card>
```

### Forms

```tsx
<div className="space-y-4">
  <Label htmlFor="email" className="text-foreground">
    Email
  </Label>
  <Input 
    id="email"
    type="email"
    className="bg-input-background border-border focus:ring-ring rounded-md"
    placeholder="Enter email"
  />
</div>
```

### Navigation

```tsx
<nav className="bg-card border-b border-border">
  <div className="flex items-center justify-between p-4">
    <Logo />
    <div className="flex items-center gap-4">
      <Button 
        variant="ghost" 
        className="text-foreground hover:text-primary"
      >
        Home
      </Button>
      <ThemeToggle />
    </div>
  </div>
</nav>
```

---

## ✅ Checklist for All Components

When creating or updating components, ensure:

- [ ] All colors use CSS variables (`bg-background`, `text-foreground`, etc.)
- [ ] No hard-coded Tailwind colors (`bg-blue-500`, `text-gray-900`, etc.)
- [ ] No typography classes unless explicitly requested (`text-xl`, `font-bold`, etc.)
- [ ] Typography relies on HTML semantic elements (h1-h4, p, span, etc.)
- [ ] Border radius uses `rounded-lg` (or other `rounded-*` that use `--radius`)
- [ ] Shadows use `shadow-[var(--elevation-sm)]` or similar
- [ ] All interactive elements have proper ARIA labels
- [ ] Components work in both light and dark mode
- [ ] Base component defaults are explicitly overridden with design system variables

---

## 🚫 Common Mistakes to Avoid

### ❌ Don't Do This

```tsx
// Hard-coded colors
<div className="bg-blue-500 text-white">

// Typography overrides
<h1 className="text-4xl font-bold">

// Mixing hard-coded and design system
<Button className="bg-primary text-white"> {/* should be text-primary-foreground */}

// Ignoring base component styling
<Button>Click</Button> {/* may not use design system */}
```

### ✅ Do This Instead

```tsx
// Design system colors
<div className="bg-primary text-primary-foreground">

// Let CSS handle typography
<h1>Title</h1>

// Consistent design system usage
<Button className="bg-primary text-primary-foreground">

// Explicit design system override
<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Click
</Button>
```

---

## 🔄 Migration Guide

If existing components use hard-coded values, migrate them:

### Before (Hard-coded)
```tsx
<div className="bg-gray-100 text-gray-900 border-gray-300 rounded-xl">
  <h1 className="text-4xl font-bold">Title</h1>
  <p className="text-base text-gray-600">Description</p>
  <Button className="bg-blue-500 text-white">
    Click Me
  </Button>
</div>
```

### After (Design System)
```tsx
<div className="bg-card text-card-foreground border-border rounded-lg">
  <h1>Title</h1>
  <p className="text-muted-foreground">Description</p>
  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
    Click Me
  </Button>
</div>
```

---

## 📚 Resources

- **Main Documentation**: `/DESIGN_SYSTEM.md`
- **CSS Variables**: `/styles/globals.css`
- **Guidelines**: `/guidelines/Guidelines.md`
- **Quick Reference**: `/QUICK_REFERENCE.md`

---

## 🎯 Summary

**Three Golden Rules:**

1. **Colors**: Only use CSS variable classes (`bg-background`, `text-primary`, etc.)
2. **Typography**: Never use size/weight classes (`text-xl`, `font-bold`, etc.)
3. **Override Defaults**: Always explicitly set design system variables on components

**Remember**: The design system lives in `globals.css`. Update there, not in individual components.

---

**Questions?** Refer to `/DESIGN_SYSTEM.md` for complete documentation.
