# Priority Pay Network - Quick Reference

**🚀 Get started in seconds • 📖 Everything you need on one page**

## ⚡ Super Quick Start

```bash
npm install && npm run dev
```

That's it! Open `http://localhost:5173`

## 📝 Common Commands

```bash
npm run dev        # Start development server (port 5173)
npm run build      # Build for production (output: /dist)
npm run preview    # Preview production build (port 4173)
npm run lint       # Check code quality
```

## 🎨 Design System Quick Reference

### ⚠️ CRITICAL RULES

1. **Colors**: ONLY use CSS variable classes (`bg-background`, `text-primary`, etc.)
2. **Typography**: NEVER use Tailwind classes (`text-xl`, `font-bold`, etc.) - controlled by CSS
3. **Override Defaults**: Always explicitly set design system variables on base components

### Colors (ONLY use these in className)

```tsx
// ✅ CORRECT - Light mode defaults, auto-switches in dark mode
bg-background      // Page background
text-foreground    // Primary text
bg-card            // Card background
bg-primary         // Primary buttons/actions
text-primary-foreground  // Text on primary bg
bg-secondary       // Secondary buttons
border-border      // All borders
bg-muted           // Disabled/muted elements
text-muted-foreground   // Muted text
bg-destructive     // Error/delete actions

// ❌ NEVER USE - Hard-coded colors
bg-blue-500, bg-gray-100, text-gray-900, etc.
```

### Typography (Auto-applied by HTML element)

```tsx
<h1>Title</h1>     // Roboto 56px/700 (var(--text-h1))
<h2>Section</h2>   // Roboto 48px/700 (var(--text-h2))
<h3>Header</h3>    // Outfit 32px/700 (var(--text-h3))
<h4>Subhead</h4>   // Outfit 24px/700 (var(--text-h4))
<p>Body text</p>   // Outfit 16px/400 (var(--text-base))
```

**⚠️ Font Note**: Guidelines.md specifies Satoshi Variable font, but globals.css uses Roboto/Outfit/Inter. Clarify which to use.

**❌ NEVER USE:** `text-xl`, `text-2xl`, `font-bold`, `font-semibold`, `leading-*` (Typography controlled by CSS only!)

### Spacing

```tsx
p-4    // 16px padding
m-6    // 24px margin
gap-8  // 32px gap
```

### Border Radius

```tsx
rounded-lg    // 12px (default)
rounded-md    // 10px
rounded-sm    // 8px
rounded-xl    // 16px
```

## 🧩 Component Imports

### Pages
```tsx
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
```

### Layout
```tsx
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';
```

### UI Components (shadcn/ui)
```tsx
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Input } from './components/ui/input';
import { Dialog } from './components/ui/dialog';
// ... 40+ more in /components/ui/
```

### Icons
```tsx
import { IconNameIcon } from '@heroicons/react/24/outline';
<IconNameIcon className="w-6 h-6 text-primary" />
// Solid variant: '@heroicons/react/24/solid'
```

### Animations
```tsx
import { motion } from 'motion/react';
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
```

## 🎯 Button Variants

**IMPORTANT**: Always explicitly set design system colors to override base component defaults!

```tsx
// Primary (main action) - MUST explicitly set bg and text
<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Primary Action
</Button>

// Secondary (alternative action) - Outlined
<Button 
  variant="outline" 
  className="border-primary text-primary hover:bg-secondary"
>
  Secondary Action
</Button>

// Tertiary (subtle action) - Text only, no border
<Button 
  variant="ghost" 
  className="text-primary hover:bg-secondary/50"
>
  Tertiary Action
</Button>
```

## 🌓 Theme Toggle

```tsx
import { ThemeToggle } from './components/ThemeToggle';
<ThemeToggle />  // Already in Navigation
```

Default: **Light mode** (not system preference)

## ♿ Accessibility Checklist

```tsx
// ✅ Always include:
<button aria-label="Descriptive label">
<nav role="navigation" aria-label="Primary navigation">
<img alt="Descriptive alt text" />
<input id="email" /> <label htmlFor="email">Email</label>
```

## 📁 File Structure

```
components/
├── pages/          # Page components
├── ui/             # shadcn/ui (don't modify)
└── *.tsx           # Custom components

styles/
└── globals.css     # Design system (don't modify unless updating DS)

App.tsx             # Main app
main.tsx            # Entry point
```

## 🔧 Creating New Component

```tsx
// components/MyComponent.tsx
interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

export function MyComponent({ title, onClick }: MyComponentProps) {
  return (
    <div className="bg-card p-4 rounded-lg">
      <h3>{title}</h3>
      <Button onClick={onClick}>Click</Button>
    </div>
  );
}
```

## 🎨 Using CSS Variables Directly

```tsx
// In className
className="bg-background text-foreground"

// In style prop (rare)
style={{ backgroundColor: 'var(--background)' }}
```

## 📱 Responsive Design

```tsx
// Mobile first, then add breakpoints
<div className="flex flex-col md:flex-row lg:gap-8">
  
// Breakpoints:
sm:   // 640px
md:   // 768px
lg:   // 1024px
xl:   // 1280px
```

## ⚠️ Design System Compliance

### ✅ Correct Usage

```tsx
// Colors from design system
<div className="bg-background text-foreground border-border">
<Card className="bg-card text-card-foreground">
<Button className="bg-primary text-primary-foreground">

// Typography from CSS (no classes)
<h1>Auto-sized heading</h1>
<p>Auto-sized body text</p>
```

### ❌ Incorrect Usage

```tsx
// Hard-coded colors - NEVER DO THIS
<div className="bg-gray-100 text-gray-900">
<Button className="bg-blue-500 text-white">

// Typography overrides - NEVER DO THIS
<h1 className="text-4xl font-bold">
<p className="text-base leading-relaxed">
```

## 🐛 Common Issues & Fixes

### Port already in use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill
```

### Module not found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Styles not updating
```bash
rm -rf node_modules/.vite
npm run dev
```

### TypeScript errors
```bash
# In VS Code: Cmd/Ctrl + Shift + P
# Type: "TypeScript: Restart TS Server"
```

## 📚 Documentation Quick Links

- **Setup**: `SETUP_GUIDE.md`
- **Design System**: `DESIGN_SYSTEM.md`
- **Contributing**: `CONTRIBUTING.md`
- **Deployment**: `DEPLOYMENT.md`
- **Guidelines**: `guidelines/Guidelines.md`

## 🔍 Finding Components

**All shadcn/ui components:**
```
/components/ui/
```

List: accordion, alert, button, card, dialog, dropdown-menu, input, select, tabs, toast, and 30+ more

**View component:**
```bash
cat components/ui/button.tsx
```

## 💾 Git Workflow

```bash
# Start feature
git checkout -b feature/my-feature

# Make changes
git add .
git commit -m "feat(scope): description"

# Push
git push origin feature/my-feature

# Create PR on GitHub
```

## 🌐 Environment Variables

```bash
# Create .env file
VITE_API_URL=https://api.example.com
VITE_ENABLE_ANALYTICS=true

# Must start with VITE_ to be exposed to client
```

## 🎯 Project Navigation

### Main Pages
- `/` - Home
- `/about` - About Page
- `/services` - How It Works
- `/products` - Practitioner Portal
- `/contact` - Support

Navigation is in `Navigation.tsx` component.

## 🔐 Best Practices

### ✅ DO
- Use CSS variables for colors
- Use semantic HTML
- Add ARIA labels
- Test in both themes
- Keep components focused
- Follow TypeScript types

### ❌ DON'T
- Hard-code colors
- Use generic div names
- Skip accessibility
- Modify /components/ui/ files
- Use font size/weight classes
- Ignore TypeScript errors

## 🚀 Build & Deploy

```bash
# Build
npm run build

# Test build
npm run preview

# Deploy to Vercel (easiest)
# Just push to GitHub and connect to Vercel

# Deploy to Netlify
# Connect GitHub repo in Netlify dashboard
```

Build output: `/dist` directory

## 📊 Performance Tips

- Images: Use `ImageWithFallback` component
- Animations: Use `motion` sparingly
- Code splitting: Already configured
- Lazy loading: Consider for heavy pages

## 🧪 Testing

```bash
# Manual testing checklist:
# - Test all pages
# - Toggle light/dark mode
# - Test mobile responsive
# - Check browser console
# - Test keyboard navigation
# - Run accessibility check
```

## 🎨 Design System Variables

```css
/* Typography */
--text-h1: 56px
--text-h2: 48px
--text-h3: 32px
--text-h4: 24px
--text-base: 16px

/* Colors (light mode) */
--background: rgba(233, 243, 241, 1)
--primary: rgba(37, 99, 235, 1)
--foreground: rgba(63, 63, 63, 1)

/* Colors (dark mode) */
--background: rgba(63, 63, 63, 1)
--primary: rgba(0, 184, 217, 1)
--foreground: rgba(255, 255, 255, 1)

/* Radius */
--radius: 12px
```

## 🆘 Need Help?

1. Check browser console
2. Check terminal output
3. Search `SETUP_GUIDE.md`
4. Search GitHub Issues
5. Ask in GitHub Discussions

## 🎓 Learning Resources

- **React**: react.dev
- **TypeScript**: typescriptlang.org/docs
- **Tailwind**: tailwindcss.com/docs
- **shadcn/ui**: ui.shadcn.com
- **Icons**: lucide.dev

## ✨ Pro Tips

1. **Use TypeScript**: Let autocomplete guide you
2. **Check globals.css**: See all available CSS variables
3. **Use existing components**: Don't rebuild what exists
4. **Test both themes**: Always check dark mode
5. **Follow accessibility**: Use ARIA and semantic HTML
6. **Keep it simple**: Don't over-engineer

## 📦 Package Versions

```json
{
  "react": "^18.3.1",
  "typescript": "^5.7.2",
  "tailwindcss": "^4.0.0",
  "vite": "^6.0.7"
}
```

All dependencies: See `package.json`

## 🎯 Quick Wins

### Add new page:
1. Create `components/pages/NewPage.tsx`
2. Add route in `App.tsx`
3. Add nav item in `Navigation.tsx`

### Add new color:
1. Update `styles/globals.css`
2. Use as `bg-yourcolor` or `text-yourcolor`

### Fix TypeScript error:
1. Read the error message
2. Add proper type
3. Use interface for props

---

## 🎉 You're Ready!

This card has 90% of what you need daily.

For deep dives:
- 📖 `DESIGN_SYSTEM.md` - Complete design reference
- 🔧 `SETUP_GUIDE.md` - Detailed setup
- 🤝 `CONTRIBUTING.md` - Contribution guide

**Happy coding!** 🚀

---

*Keep this file open while developing • Bookmark for quick access*
