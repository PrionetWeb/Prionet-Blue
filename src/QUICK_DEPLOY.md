# Quick Deploy Reference

## 🚀 One-Command Deployment

### Netlify
```bash
npm run deploy:netlify
```

### IONOS
```bash
npm run deploy:ionos
```

### GitHub Pages
```bash
npm run deploy:github
```

---

## 📋 Prerequisites Check

```bash
node --version  # v18.0.0+
npm --version   # 9.0.0+
git --version   # installed
```

---

## 🔧 Build Commands

```bash
# Development
npm run dev

# Type check
npm run type-check

# Lint
npm run lint

# Production build
npm run build:prod

# Preview build
npm run preview

# Clean build
npm run clean && npm run build
```

---

## 🌐 Platform URLs

**Netlify**: `https://app.netlify.com`  
**IONOS**: `https://www.ionos.com/`  
**GitHub**: `https://github.com/settings/tokens`

---

## ⚡ Quick Setup

### Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify init
```

### GitHub Pages
```bash
# Enable in: Repo → Settings → Pages → Source: GitHub Actions
git push origin main
```

### IONOS
```bash
./ionos-deploy.sh
# Upload dist/ to /public_html via FTP
```

---

## 🔒 Required Secrets

### Netlify (GitHub Actions)
- `NETLIFY_AUTH_TOKEN`
- `NETLIFY_SITE_ID`

### GitHub Pages
- No secrets required (uses built-in permissions)

---

## ✅ Pre-Deploy Checklist

- [ ] `npm run type-check` ✓
- [ ] `npm run lint` ✓
- [ ] `npm run build` ✓
- [ ] `npm run preview` ✓
- [ ] All tests pass ✓

---

## 🆘 Emergency Rollback

```bash
# Revert last commit
git revert HEAD
git push origin main

# Redeploy previous version
git checkout [previous-commit-hash]
npm run build:prod
npm run deploy:[platform]
```

---

## 📞 Support Links

- [Netlify Docs](https://docs.netlify.com)
- [IONOS Help](https://www.ionos.com/help)
- [GitHub Pages](https://docs.github.com/pages)

---

**More Info:** See [DEPLOYMENT_COMPLETE_GUIDE.md](./DEPLOYMENT_COMPLETE_GUIDE.md)
