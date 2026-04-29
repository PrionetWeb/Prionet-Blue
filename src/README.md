# Priority Pay Network (PPN)

> A secure medical debt management platform that helps healthcare practitioners check for outstanding patient bills over 90 days old while protecting patient privacy.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/react-18.3.1-61dafb.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.7.2-3178c6.svg)
![Tailwind CSS](https://img.shields.io/badge/tailwind-4.0.0-38bdf8.svg)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Development Guidelines](#development-guidelines)
- [Accessibility](#accessibility)
- [Contributing](#contributing)
- [Deployment](#deployment)
- [License](#license)

## 🎯 About

Priority Pay Network is a comprehensive 5-page website platform that revolutionizes medical debt management by providing:

- **Practitioner Access**: Healthcare practitioners can quickly check if patients have outstanding medical bills over 90 days old without seeing specific amounts or details
- **Privacy Protection**: Patient information remains completely private, practitioners only see whether a balance exists, never the amounts owed
- **Patient Portal**: Secure access for patients to view balances, dispute charges, and make payments directly

The system is designed with privacy and security at its core, ensuring HIPAA compliance while streamlining the medical debt management process for both practitioners and patients.

## ✨ Features

### For Healthcare Practitioners

- ✅ **Database Access**: Quick lookup of patient outstanding balances (90+ days)
- ✅ **Privacy First**: See only if balance exists, not amounts or details
- ✅ **Centralized System**: All outstanding debts in one searchable database
- ✅ **HIPAA Compliant**: Full compliance with healthcare privacy regulations

### For Patients

- ✅ **Private Portal**: Secure access to view outstanding balances
- ✅ **Dispute Charges**: Ability to challenge incorrect or disputed bills
- ✅ **Direct Payments**: Make payments directly to healthcare practitioners
- ✅ **Transparency**: Complete visibility into account status

### Design Features

- 🎨 **Modern UI**: Built with 2025 design patterns including Bento grids
- 🌓 **Dark Mode**: Fully functional light/dark theme toggle (defaults to light)
- ♿ **Accessible**: WCAG 2.1 AA compliant with proper ARIA labels
- 📱 **Responsive**: Mobile-first design with seamless desktop experience
- ⚡ **Performant**: Optimized animations using Motion (Framer Motion)
- 🎭 **Themed**: Complete design system with CSS custom properties

## 🛠️ Tech Stack

### Core Technologies

- **React 18.3** - Modern UI library with hooks
- **TypeScript 5.7** - Type-safe JavaScript
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **Vite 6.0** - Next-generation frontend tooling

### UI Components

- **shadcn/ui** - High-quality, accessible component library
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful & consistent icon set
- **Motion (Framer Motion)** - Production-ready animations

### Additional Libraries

- **Recharts** - Composable charting library
- **React Hook Form** - Performant form validation
- **Embla Carousel** - Lightweight carousel library
- **Sonner** - Opinionated toast notifications
- **class-variance-authority** - CVA for component variants

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/priority-pay-network.git
   cd priority-pay-network
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
priority-pay-network/
├── components/
│   ├── figma/
│   │   └── ImageWithFallback.tsx    # Protected fallback component
│   ├── pages/
│   │   ├── HomePage.tsx              # Landing page
│   │   ├── AboutPage.tsx             # About PPN
│   │   ├── ServicesPage.tsx          # How It Works
│   │   ├── ProductsPage.tsx          # Practitioner Portal
│   │   └── ContactPage.tsx           # Support page
│   ├── ui/                           # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...                       # 40+ components
│   ├── BrandGuide.tsx                # Brand guidelines component
│   ├── Footer.tsx                    # Site footer
│   ├── Logo.tsx                      # PPN logo component
│   ├── Navigation.tsx                # Main navigation
│   └── ThemeToggle.tsx               # Light/dark mode toggle
├── guidelines/
│   └── Guidelines.md                 # Project development guidelines
├── styles/
│   └── globals.css                   # Design system CSS variables
├── App.tsx                           # Main application component
├── DESIGN_SYSTEM.md                  # Complete design system docs
├── package.json                      # Dependencies & scripts
├── tsconfig.json                     # TypeScript configuration
├── vite.config.ts                    # Vite configuration
└── README.md                         # This file
```

## 🎨 Design System

The Priority Pay Network design system is built on modern web standards using CSS custom properties for maximum flexibility and theming support.

### ⚠️ Critical Design System Rules

**ALL code must follow these rules:**

1. **CSS Variables ONLY**: Use design system variables (`bg-background`, `text-primary`) - NEVER hard-coded colors (`bg-blue-500`, `text-gray-900`)
2. **Typography Control**: Typography controlled 100% by CSS - NEVER use Tailwind classes (`text-xl`, `font-bold`, etc.)
3. **Override Defaults**: Always explicitly set design system variables on shadcn/ui components

### Key Features

- **CSS Variables**: All colors, spacing, and typography defined in `/styles/globals.css`
- **Typography**: Roboto for headings, Outfit for body text, Inter as alternative
  - ⚠️ **Note**: Guidelines.md specifies Satoshi Variable font - clarification needed
- **Colors**: Comprehensive light/dark mode palettes (40+ variables)
- **Components**: 40+ pre-built, accessible shadcn/ui components
- **Documentation**: Complete design system in `/DESIGN_SYSTEM.md`

### Quick Reference

#### Colors (ONLY use these CSS variable classes)

```tsx
// ✅ CORRECT
className="bg-background text-foreground border-border"
className="bg-primary text-primary-foreground"
className="bg-card text-card-foreground"

// ❌ NEVER USE
className="bg-blue-500 text-white"  // Hard-coded colors
className="bg-gray-100 text-gray-900"  // Hard-coded colors
```

#### Typography (Auto-applied, NO classes needed)

```tsx
// ✅ CORRECT - Typography controlled by CSS
<h1>Page Title</h1>           // Uses var(--text-h1) automatically
<p>Body content</p>           // Uses var(--text-base) automatically

// ❌ NEVER USE - Overrides design system
<h1 className="text-4xl font-bold">  // Typography classes forbidden
<p className="text-base">             // Typography classes forbidden
```

For complete documentation, see:
- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) - Full design system
- [DESIGN_SYSTEM_UPDATE.md](./DESIGN_SYSTEM_UPDATE.md) - Critical updates & rules
- [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) - Developer cheat sheet

## 📖 Development Guidelines

### Code Standards

- ✅ **Semantic HTML**: Proper element usage, no generic div names
- ✅ **WCAG Compliant**: All HTML properly named with ARIA labels
- ✅ **Type Safety**: TypeScript for all components
- ✅ **CSS Variables MANDATORY**: Use design system tokens (`bg-background`, `text-primary`) - NEVER hard-coded colors
- ✅ **NO Typography Classes**: NEVER use `text-*`, `font-*`, or `leading-*` classes - typography controlled by CSS only
- ✅ **Override Base Components**: Always explicitly set design system variables on shadcn/ui components

### Button Variants

Following the project guidelines, buttons have three variants:

1. **Primary**: Main action (filled, primary color)
2. **Secondary**: Alternative action (outlined, transparent)
3. **Tertiary**: Least important (text only, no border)

### Theme Toggle

- Defaults to **light mode** (not system preference)
- Located in header navigation
- Accessible with keyboard navigation

### Accessibility

All code must be WCAG 2.1 AA compliant:

- Proper heading hierarchy
- ARIA labels on interactive elements
- Keyboard navigation support
- Visible focus indicators
- Sufficient color contrast

### Git Workflow

- Use descriptive commit messages
- Create feature branches for new development
- Review code before merging to main branch
- Ensure every branch can roll back in case of errors

For complete guidelines, see [guidelines/Guidelines.md](./guidelines/Guidelines.md)

## ♿ Accessibility

Priority Pay Network is built with accessibility as a core principle:

- **WCAG 2.1 AA Compliant**: Meets international accessibility standards
- **Keyboard Navigation**: Full keyboard support for all interactions
- **Screen Reader Friendly**: Proper ARIA labels and semantic HTML
- **Color Contrast**: All text meets minimum contrast ratios
- **Focus Indicators**: Visible focus states on all interactive elements

## 🎯 Pages Overview

### 1. Home Page (`/`)
- Hero section with platform overview
- Key features showcase
- Statistics and trust indicators
- Call-to-action for both practitioners and patients

### 2. About Page (`/about`)
- Mission and vision
- Team information
- Company values
- Privacy commitment

### 3. How It Works (`/services`)
- Step-by-step process for practitioners
- Patient portal walkthrough
- Security and compliance information
- FAQ section

### 4. Practitioner Portal (`/products`)
- Portal features and benefits
- Database access capabilities
- Integration information
- Sign-up process

### 5. Support (`/contact`)
- Contact form
- Support resources
- Help documentation
- Emergency contact information

## 🤝 Contributing

We welcome contributions to improve Priority Pay Network! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code:
- Follows the project's coding standards
- Includes appropriate tests
- Updates documentation as needed
- Maintains WCAG compliance

## 🚀 Deployment

Priority Pay Network is ready for deployment to **Netlify**, **IONOS**, and **GitHub Pages**.

### 📚 Deployment Documentation

- **[Quick Deploy Guide](./README_DEPLOYMENT.md)** - Fast deployment instructions
- **[Complete Deployment Guide](./DEPLOYMENT_COMPLETE_GUIDE.md)** - Comprehensive step-by-step guide
- **[Deployment Checklist](./DEPLOYMENT_CHECKLIST.md)** - Pre/post-deployment checklist
- **[Quick Reference](./QUICK_DEPLOY.md)** - Commands cheat sheet

### ⚡ Quick Start

#### Netlify (Recommended - Easiest)
```bash
npm run deploy:netlify
```
Or connect your GitHub repository at [netlify.com](https://app.netlify.com)

#### IONOS (Traditional Web Hosting)
```bash
npm run deploy:ionos
# Then upload dist/ folder via FTP/SFTP
```

#### GitHub Pages (Free Hosting)
```bash
# Push to main branch - GitHub Actions handles deployment
git push origin main
```

### 🔧 Build for Production

```bash
# Install dependencies
npm ci

# Run quality checks and build
npm run build:prod

# Preview production build
npm run preview
```

### 📋 Pre-Deployment Checklist

- [ ] `npm run type-check` passes
- [ ] `npm run lint` passes  
- [ ] `npm run build` completes successfully
- [ ] All pages tested locally
- [ ] Accessibility verified (WCAG 2.2 Level AAA)
- [ ] Security headers configured
- [ ] Performance optimized (Lighthouse > 90)

### 🌐 Platform Features

| Platform | Auto Deploy | SSL | CDN | Cost |
|----------|------------|-----|-----|------|
| **Netlify** | ✅ Yes | ✅ Free | ✅ Global | Free |
| **IONOS** | ❌ Manual | ✅ Yes | ⚠️ Limited | Paid |
| **GitHub Pages** | ✅ Yes | ✅ Free | ✅ Global | Free |

### 📖 Deployment Files

- `netlify.toml` - Netlify configuration with security headers
- `ionos-deploy.sh` - IONOS build and deployment script
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `.htaccess` - Auto-generated for IONOS Apache config

### 🔒 Security

All deployments include:
- ✅ HTTPS/SSL encryption
- ✅ Security headers (CSP, HSTS, X-Frame-Options)
- ✅ Asset compression and caching
- ✅ SPA routing configuration
- ✅ HIPAA compliance ready

### 🆘 Need Help?

See the [Complete Deployment Guide](./DEPLOYMENT_COMPLETE_GUIDE.md) for:
- Detailed platform-specific instructions
- Environment variable configuration
- Custom domain setup
- SSL certificate configuration
- Troubleshooting common issues
- Post-deployment verification

### Environment Setup

1. Copy environment template:
   ```bash
   cp .env.example .env.local
   ```

2. Configure your variables (see [ENVIRONMENT_SETUP.md](./ENVIRONMENT_SETUP.md))

3. Deploy with your preferred platform

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** for the excellent component library
- **Radix UI** for accessible primitives
- **Lucide** for beautiful icons
- **Tailwind Labs** for Tailwind CSS
- **Vercel** for Vite and tooling

## 📞 Support

For questions, issues, or feature requests:

- 📧 Email: support@prioritypaynetwork.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/priority-pay-network/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/priority-pay-network/discussions)

---

**Built with ❤️ for healthcare practitioners and patients**

*Protecting privacy while streamlining medical debt management*