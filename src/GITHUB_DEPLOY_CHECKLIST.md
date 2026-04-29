# GitHub & Netlify Deployment Checklist ✅

Use this checklist to ensure your Priority Pay Network codebase is ready for deployment.

## ✅ Pre-Deployment Checklist

### 1. Repository Configuration

- [ ] **Update package.json repository URLs**
  - Line 96: Replace `yourusername` with your GitHub username
  - Line 99: Update issues URL
  - Line 101: Update homepage URL

- [ ] **Update README.md clone URL**
  - Line 95: Replace `yourusername` with your GitHub username

- [ ] **Review Guidelines.md**
  - Ensure all project guidelines are current
  - Remove any internal notes or TODOs

### 2. Code Quality

- [ ] **Run local build**
  ```bash
  npm run build:prod
  ```
  - Ensures TypeScript compiles without errors
  - Runs linting checks
  - Creates production build

- [ ] **Test production build locally**
  ```bash
  npm run preview
  ```
  - Verify all pages work
  - Test navigation
  - Check dark/light mode toggle

- [ ] **Check for console errors**
  - Open browser DevTools
  - Navigate through all pages
  - Verify no errors in console

### 3. Dependencies

- [ ] **Verify all dependencies are installed**
  ```bash
  npm install
  ```

- [ ] **Check for security vulnerabilities**
  ```bash
  npm audit
  ```
  - Fix any high/critical vulnerabilities

- [ ] **Update outdated packages (optional)**
  ```bash
  npm outdated
  npm update
  ```

### 4. Files & Configuration

- [x] **`.gitignore` exists**
  - ✅ Already created
  - Excludes node_modules, dist, .env files

- [x] **`netlify.toml` configured**
  - ✅ Build command set
  - ✅ Publish directory configured
  - ✅ Redirects for SPA routing
  - ✅ Security headers
  - ✅ CSP updated for video

- [x] **`.env.example` provided**
  - ✅ Template for environment variables
  - No sensitive data included

- [ ] **Verify `package.json` scripts**
  - [x] `dev` - Development server
  - [x] `build` - Production build
  - [x] `build:prod` - Full production build with checks
  - [x] `preview` - Preview production build

### 5. Content Review

- [ ] **Review all page content**
  - [ ] Home page - Hero, features, statistics
  - [ ] About page - Mission, team, values
  - [ ] Services page - How it works, process
  - [ ] Products page - Practitioner portal info
  - [ ] Contact page - Form, support info

- [ ] **Check all links work**
  - Internal navigation links
  - External links (if any)
  - Social media links (if configured)

- [ ] **Verify images load**
  - Unsplash images
  - Logo/branding images
  - Icons display correctly

- [ ] **Test video playback**
  - Home page video plays
  - Video controls work
  - Mobile compatibility

### 6. Accessibility & Performance

- [ ] **Run Lighthouse audit**
  - Performance score > 90
  - Accessibility score = 100
  - Best Practices score > 90
  - SEO score > 90

- [ ] **Keyboard navigation**
  - Tab through all interactive elements
  - Verify focus indicators visible
  - Test skip-to-content link

- [ ] **Screen reader test**
  - Enable screen reader
  - Navigate through pages
  - Verify ARIA labels are correct

### 7. Responsive Design

- [ ] **Test mobile viewports**
  - 320px (small mobile)
  - 375px (mobile)
  - 768px (tablet)
  - 1024px (desktop)
  - 1440px+ (large desktop)

- [ ] **Test different browsers**
  - Chrome/Edge
  - Firefox
  - Safari
  - Mobile browsers

### 8. Security

- [x] **Security headers configured in netlify.toml**
  - ✅ X-Frame-Options
  - ✅ X-XSS-Protection
  - ✅ X-Content-Type-Options
  - ✅ Referrer-Policy
  - ✅ Content-Security-Policy

- [ ] **No sensitive data in code**
  - No API keys committed
  - No passwords in code
  - Use .env for secrets

- [ ] **HTTPS enforced**
  - Netlify handles this automatically

## 📋 Deployment Steps

### Step 1: Git Setup

```bash
# Initialize repository (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Priority Pay Network v1.0.0"
```

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Name: `priority-pay-network`
3. Description: "A secure medical debt management platform"
4. Choose Public or Private
5. **DO NOT** initialize with README
6. Click "Create repository"

### Step 3: Push to GitHub

```bash
# Add remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/priority-pay-network.git

# Push code
git branch -M main
git push -u origin main
```

### Step 4: Deploy to Netlify

1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub
4. Select `priority-pay-network` repository
5. Netlify auto-detects settings from `netlify.toml`
6. Click "Deploy site"
7. Wait 2-3 minutes for build

### Step 5: Verify Deployment

- [ ] Site loads at Netlify URL
- [ ] All 5 pages accessible
- [ ] Navigation works
- [ ] Dark/light mode toggle functions
- [ ] Forms work
- [ ] Video plays
- [ ] No console errors
- [ ] Mobile responsive

## 🚀 Post-Deployment

### Configure Custom Domain (Optional)

1. In Netlify: Site settings → Domain management
2. Add custom domain
3. Configure DNS records
4. Enable HTTPS (automatic)

### Enable Continuous Deployment

- ✅ Already configured!
- Push to main branch = auto-deploy

### Monitor Site

- Check Netlify dashboard for build status
- Set up deploy notifications
- Monitor analytics (if enabled)

## 🔧 Troubleshooting

### Build Fails

```bash
# Clear local build
npm run clean
npm install
npm run build:prod
```

If builds locally, but fails on Netlify:
- Check Netlify build logs
- Verify Node version matches
- Clear Netlify cache and retry

### 404 Errors

- Verify `netlify.toml` redirects are configured
- Check that all routes in App.tsx are correct

### Images Not Loading

- Check CSP in `netlify.toml`
- Verify image URLs are accessible
- Check browser console for blocked resources

### Video Not Playing

- CSP already configured for prioritypaynet.org
- Check video URL is accessible
- Test on different browsers/devices

## 📚 Additional Resources

- [DEPLOYMENT_INSTRUCTIONS.md](./DEPLOYMENT_INSTRUCTIONS.md) - Detailed deployment guide
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Platform-specific guides
- [README.md](./README.md) - Project overview
- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) - Design system docs

## ✅ Final Check

Before deploying, ensure:

- [x] `.gitignore` created
- [x] `netlify.toml` configured
- [x] `.env.example` provided
- [ ] Package.json URLs updated
- [ ] README.md URLs updated
- [ ] Local build successful
- [ ] All tests pass
- [ ] Code committed to Git
- [ ] Ready to push to GitHub

---

**Once all boxes are checked, you're ready to deploy! 🚀**

Follow the steps in [DEPLOYMENT_INSTRUCTIONS.md](./DEPLOYMENT_INSTRUCTIONS.md) for detailed guidance.
