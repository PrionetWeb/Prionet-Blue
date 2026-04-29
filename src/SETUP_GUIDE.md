# Priority Pay Network - Complete Setup Guide

This guide will walk you through setting up the Priority Pay Network project from scratch.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Initial Setup](#initial-setup)
- [Project Structure Overview](#project-structure-overview)
- [Configuration Files](#configuration-files)
- [Development Workflow](#development-workflow)
- [Building for Production](#building-for-production)
- [Common Issues](#common-issues)
- [Next Steps](#next-steps)

## Prerequisites

### Required Software

Before starting, ensure you have the following installed:

1. **Node.js** (>= 18.0.0)
   ```bash
   # Check version
   node --version
   
   # Download from: https://nodejs.org/
   ```

2. **npm** (>= 9.0.0) - comes with Node.js
   ```bash
   # Check version
   npm --version
   ```

3. **Git**
   ```bash
   # Check version
   git --version
   
   # Download from: https://git-scm.com/
   ```

### Recommended Tools

- **VS Code** - Code editor with excellent TypeScript support
- **VS Code Extensions**:
  - ESLint
  - Tailwind CSS IntelliSense
  - TypeScript and JavaScript Language Features
  - Prettier (optional)

## Initial Setup

### Step 1: Clone or Download the Repository

#### Option A: Clone from GitHub
```bash
git clone https://github.com/yourusername/priority-pay-network.git
cd priority-pay-network
```

#### Option B: Download ZIP
1. Download the project ZIP file
2. Extract to your desired location
3. Open terminal in the project directory

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`:
- React and React-DOM
- TypeScript
- Vite
- Tailwind CSS
- All UI component libraries (Radix UI, shadcn/ui)
- Icons (Lucide React)
- Animations (Motion)
- And more...

**Note**: This may take 2-5 minutes depending on your internet connection.

### Step 3: Verify Installation

Check that everything installed correctly:

```bash
# Check for node_modules directory
ls node_modules

# Should see hundreds of packages
```

### Step 4: Start Development Server

```bash
npm run dev
```

Expected output:
```
VITE v6.0.7  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

### Step 5: Open in Browser

1. Open your browser
2. Navigate to `http://localhost:5173`
3. You should see the Priority Pay Network homepage

🎉 **Success!** Your development environment is ready.

## Project Structure Overview

```
priority-pay-network/
│
├── components/              # React components
│   ├── figma/              # Protected Figma components
│   │   └── ImageWithFallback.tsx
│   ├── pages/              # Page components
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── ProductsPage.tsx
│   │   └── ContactPage.tsx
│   ├── ui/                 # shadcn/ui components (40+)
│   ├── BrandGuide.tsx      # Brand guidelines
│   ├── Footer.tsx          # Site footer
│   ├── Logo.tsx            # Logo component
│   ├── Navigation.tsx      # Main navigation
│   └── ThemeToggle.tsx     # Light/dark mode toggle
│
├── guidelines/
│   └── Guidelines.md       # Development guidelines
│
├── styles/
│   └── globals.css         # Design system CSS variables
│
├── App.tsx                 # Main app component
├── main.tsx                # Application entry point
├── index.html              # HTML template
│
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── postcss.config.js       # PostCSS configuration
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore rules
│
├── README.md               # Project overview
├── DESIGN_SYSTEM.md        # Complete design system docs
├── CONTRIBUTING.md         # Contribution guidelines
├── DEPLOYMENT.md           # Deployment instructions
├── SETUP_GUIDE.md          # This file
├── CHANGELOG.md            # Version history
└── LICENSE                 # MIT License
```

## Configuration Files

### package.json

Contains:
- Project metadata
- Dependencies (runtime and development)
- Scripts for development, building, and linting
- Node/npm version requirements

**Important Scripts:**
```json
{
  "dev": "vite",              // Start dev server
  "build": "tsc && vite build", // Build for production
  "preview": "vite preview",   // Preview production build
  "lint": "eslint ..."         // Check code quality
}
```

### tsconfig.json

TypeScript configuration with:
- ES2020 target
- Strict type checking enabled
- Path aliases (@/, @/components, @/styles)
- JSX support for React

### vite.config.ts

Vite configuration including:
- React plugin
- Path aliases matching tsconfig
- Dev server on port 5173
- Build optimizations
- Code splitting for vendor chunks

### styles/globals.css

Design system source of truth:
- CSS custom properties (variables)
- Light and dark mode colors
- Typography definitions
- Tailwind CSS configuration

**DO NOT** manually edit this file unless updating design system.

## Development Workflow

### Daily Development

1. **Start development server**
   ```bash
   npm run dev
   ```

2. **Make changes to components**
   - Edit files in `/components`
   - Changes hot-reload automatically
   - Check browser for updates

3. **Check for errors**
   - Browser console
   - Terminal output
   - TypeScript errors in editor

4. **Run linter periodically**
   ```bash
   npm run lint
   ```

### Creating New Components

1. **Create new file in `/components`**
   ```tsx
   // components/MyComponent.tsx
   interface MyComponentProps {
     // Define props
   }
   
   export function MyComponent({ ...props }: MyComponentProps) {
     return (
       <div className="bg-background text-foreground">
         {/* Component content */}
       </div>
     );
   }
   ```

2. **Import in App.tsx or parent component**
   ```tsx
   import { MyComponent } from './components/MyComponent';
   ```

3. **Follow design system guidelines**
   - Use CSS variables for colors
   - Use semantic HTML
   - Add ARIA labels
   - Support keyboard navigation

### Using shadcn/ui Components

All shadcn/ui components are pre-installed in `/components/ui/`:

```tsx
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';

function MyPage() {
  return (
    <Card>
      <CardContent>
        <Button>Click Me</Button>
      </CardContent>
    </Card>
  );
}
```

**DO NOT** modify files in `/components/ui/` unless absolutely necessary.

### Working with Icons

```tsx
import { Icon } from 'lucide-react';

<Icon className="w-6 h-6 text-primary" />
```

Browse all icons: [lucide.dev](https://lucide.dev)

### Adding Animations

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

### Theme Toggle

Theme is managed globally. To toggle programmatically:

```tsx
import { ThemeToggle } from './components/ThemeToggle';

// Use the component
<ThemeToggle />
```

## Building for Production

### Step 1: Build the Project

```bash
npm run build
```

This will:
1. Run TypeScript compiler to check for errors
2. Bundle all code with Vite
3. Optimize assets
4. Generate production files in `/dist`

Expected output:
```
vite v6.0.7 building for production...
✓ XXX modules transformed.
dist/index.html                  X.XX kB
dist/assets/index-XXXX.js        XXX.XX kB │ gzip: XX.XX kB
dist/assets/index-XXXX.css       XX.XX kB │ gzip: X.XX kB
✓ built in XXXms
```

### Step 2: Test Production Build

```bash
npm run preview
```

Opens production build at `http://localhost:4173`

### Step 3: Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for platform-specific deployment instructions:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Custom server

## Common Issues

### Issue: "Cannot find module 'X'"

**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Issue: Port 5173 already in use

**Solution:**
```bash
# Kill the process using the port
# On Mac/Linux:
lsof -ti:5173 | xargs kill

# Or change port in vite.config.ts:
server: { port: 3000 }
```

### Issue: TypeScript errors on save

**Solution:**
1. Check `tsconfig.json` settings
2. Restart TypeScript server in VS Code:
   - Cmd/Ctrl + Shift + P
   - "TypeScript: Restart TS Server"

### Issue: Styles not updating

**Solution:**
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

### Issue: Build fails with out of memory error

**Solution:**
```bash
# Increase Node memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

### Issue: Dark mode not working

**Solution:**
1. Check theme toggle component
2. Verify `globals.css` has `.dark` class styles
3. Ensure parent element has `dark` class when toggled

## Environment Variables (Optional)

Create `.env` file in root for custom configuration:

```env
# API configuration (if needed)
VITE_API_URL=https://api.example.com

# Feature flags
VITE_ENABLE_ANALYTICS=false
```

**Important**: Always prefix with `VITE_` to expose to client.

## Next Steps

### For Developers

1. Read [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for styling guidelines
2. Review [guidelines/Guidelines.md](./guidelines/Guidelines.md) for project standards
3. Check [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution process
4. Explore shadcn/ui components in `/components/ui/`

### For Designers

1. Review color palette in [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)
2. Understand typography scale
3. Check component variants
4. Test light and dark modes

### For Project Managers

1. Review [README.md](./README.md) for project overview
2. Check [CHANGELOG.md](./CHANGELOG.md) for version history
3. Plan features based on current structure
4. Review accessibility compliance

## Additional Resources

### Documentation
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [shadcn/ui](https://ui.shadcn.com)

### Tools
- [Lucide Icons](https://lucide.dev)
- [Motion (Framer Motion)](https://motion.dev)
- [Recharts](https://recharts.org)

### Accessibility
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAVE Tool](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)

## Getting Help

### Resources

- 📖 **Documentation**: Check project markdown files
- 💬 **Discussions**: GitHub Discussions tab
- 🐛 **Issues**: GitHub Issues for bugs
- 📧 **Email**: support@prioritypaynetwork.com

### Before Asking for Help

1. Check this setup guide
2. Review relevant documentation
3. Search existing GitHub issues
4. Verify your Node/npm versions
5. Try reinstalling dependencies

## Quick Reference Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build
npm run lint            # Check code quality

# Dependencies
npm install             # Install all dependencies
npm install <package>   # Add new package
npm update              # Update packages

# Git
git status              # Check status
git add .               # Stage all changes
git commit -m "message" # Commit changes
git push                # Push to remote

# Troubleshooting
rm -rf node_modules     # Remove dependencies
npm install             # Reinstall
rm -rf .vite            # Clear Vite cache
```

## Success Checklist

- [ ] Node.js >= 18.0.0 installed
- [ ] npm >= 9.0.0 installed
- [ ] Project cloned or downloaded
- [ ] Dependencies installed successfully
- [ ] Dev server starts without errors
- [ ] Application opens in browser
- [ ] Hot reload works when editing files
- [ ] Light/dark mode toggle works
- [ ] All pages accessible via navigation
- [ ] No console errors in browser
- [ ] TypeScript compiles without errors

---

**Welcome to Priority Pay Network development!** 🚀

If you've completed all steps successfully, you're ready to start building. Happy coding!

---

*Last Updated: October 13, 2025*
