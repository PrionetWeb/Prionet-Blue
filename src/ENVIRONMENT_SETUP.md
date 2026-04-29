# Environment Setup Guide

## 🔧 Environment Variables Configuration

Priority Pay Network uses environment variables for configuration. This guide explains how to set them up for different environments.

---

## 📋 Environment Files

### Development (.env.local)
```bash
# Copy the example file
cp .env.example .env.local

# Edit with your local values
nano .env.local
```

### Production
Environment variables should be set in your deployment platform's dashboard or CI/CD pipeline.

---

## 🔑 Required Variables

### Application Configuration
```env
# Application Identity
VITE_APP_NAME="Priority Pay Network"
VITE_APP_DESCRIPTION="Secure medical debt management platform"
VITE_APP_VERSION="1.0.0"
VITE_APP_URL="https://prioritypaynetwork.com"

# API Configuration (Future)
VITE_API_BASE_URL="https://api.prioritypaynetwork.com"
```

### Contact Information
```env
# Support Contact
VITE_SUPPORT_EMAIL="support@prioritypaynet.org"
VITE_SUPPORT_PHONE="(702) 570-5200"
VITE_SECURITY_EMAIL="security@prioritypaynet.org"
```

### Feature Flags
```env
# Analytics and Monitoring
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_ERROR_REPORTING=true

# Development Features
VITE_DEBUG_MODE=false
VITE_DEV_MODE=false

# Accessibility Features
VITE_ACCESSIBILITY_MODE=false
VITE_HIGH_CONTRAST_MODE=false
```

---

## 🌐 Platform-Specific Setup

### Netlify
1. Go to Site Settings → Environment Variables
2. Add each variable with `VITE_` prefix
3. Deploy triggers automatically

### Vercel
1. Go to Project Settings → Environment Variables
2. Add variables for Production, Preview, and Development
3. Redeploy to apply changes

### Docker
```dockerfile
# In Dockerfile or docker-compose.yml
ENV VITE_APP_URL=https://your-domain.com
ENV VITE_ENABLE_ANALYTICS=true
```

### GitHub Actions
```yaml
# In .github/workflows/deploy.yml
env:
  VITE_APP_URL: ${{ secrets.APP_URL }}
  VITE_GOOGLE_ANALYTICS_ID: ${{ secrets.GA_ID }}
```

---

## 🔐 Security Best Practices

### DO ✅
- Use `VITE_` prefix for client-side variables
- Store sensitive data in platform secrets
- Use different values for different environments
- Regularly rotate API keys and tokens

### DON'T ❌
- Put sensitive data in client-side variables
- Commit `.env.local` files to git
- Use production keys in development
- Share environment files

---

## 🛠️ Using Environment Variables

### In React Components
```tsx
// Access environment variables
const appName = import.meta.env.VITE_APP_NAME;
const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL;
const enableAnalytics = import.meta.env.VITE_ENABLE_ANALYTICS === 'true';

// With fallbacks
const apiUrl = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';
```

### In Vite Config
```typescript
// vite.config.ts
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    define: {
      __APP_VERSION__: JSON.stringify(env.VITE_APP_VERSION),
    },
  };
});
```

---

## 🔄 Environment-Specific Configurations

### Development
```env
VITE_DEBUG_MODE=true
VITE_DEV_MODE=true
VITE_API_BASE_URL=http://localhost:3001
VITE_ENABLE_ANALYTICS=false
```

### Staging
```env
VITE_DEBUG_MODE=false
VITE_DEV_MODE=false
VITE_API_BASE_URL=https://staging-api.prioritypaynetwork.com
VITE_ENABLE_ANALYTICS=true
VITE_APP_URL=https://staging.prioritypaynetwork.com
```

### Production
```env
VITE_DEBUG_MODE=false
VITE_DEV_MODE=false
VITE_API_BASE_URL=https://api.prioritypaynetwork.com
VITE_ENABLE_ANALYTICS=true
VITE_APP_URL=https://prioritypaynetwork.com
```

---

## 🎯 Optional Integrations

### Google Analytics
```env
VITE_GOOGLE_ANALYTICS_ID="G-XXXXXXXXXX"
```

### Sentry Error Tracking
```env
VITE_SENTRY_DSN="https://your-sentry-dsn"
```

### Social Media Links
```env
VITE_LINKEDIN_URL="https://linkedin.com/company/prioritypaynetwork"
VITE_TWITTER_URL="https://twitter.com/prioritypaynet"
VITE_GITHUB_URL="https://github.com/yourusername/priority-pay-network"
```

---

## 🧪 Testing Environment Variables

### Validate Configuration
```typescript
// utils/validateEnv.ts
export function validateEnvironment() {
  const required = [
    'VITE_APP_NAME',
    'VITE_SUPPORT_EMAIL',
    'VITE_SUPPORT_PHONE',
  ];

  const missing = required.filter(key => !import.meta.env[key]);
  
  if (missing.length > 0) {
    console.error('Missing required environment variables:', missing);
    throw new Error('Environment configuration incomplete');
  }
}
```

### Runtime Checks
```typescript
// In App.tsx or main.tsx
if (import.meta.env.DEV) {
  console.log('Environment variables:', {
    appName: import.meta.env.VITE_APP_NAME,
    supportEmail: import.meta.env.VITE_SUPPORT_EMAIL,
    // Don't log sensitive data
  });
}
```

---

## 🚨 Troubleshooting

### Variable Not Loading
1. Check the `VITE_` prefix
2. Restart development server
3. Check for typos in variable names
4. Verify file location (`.env.local` in root)

### Build-Time vs Runtime
```typescript
// ✅ Available at build-time and runtime
const staticValue = import.meta.env.VITE_API_URL;

// ❌ Not available (no VITE_ prefix)
const invalidValue = import.meta.env.SECRET_KEY;
```

### Platform-Specific Issues

**Netlify:**
- Variables must be set in dashboard
- Redeploy after changing variables
- Check build logs for errors

**Vercel:**
- Set variables for all environments
- Use Vercel CLI for local development
- Check function logs for errors

**Docker:**
- Pass variables as build args or runtime env
- Check container environment
- Use docker inspect to debug

---

## 📋 Environment Checklist

### Before Development
- [ ] `.env.example` copied to `.env.local`
- [ ] All required variables set
- [ ] Contact information updated
- [ ] Feature flags configured
- [ ] Development server starts successfully

### Before Deployment
- [ ] Production variables configured
- [ ] Sensitive data in platform secrets
- [ ] URLs point to production services
- [ ] Analytics and monitoring enabled
- [ ] Environment-specific values verified

### After Deployment
- [ ] Application loads correctly
- [ ] Contact forms work
- [ ] Analytics tracking (if enabled)
- [ ] Error reporting (if enabled)
- [ ] All links functional

---

## 📚 Additional Resources

### Documentation
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [React Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)

### Tools
- [dotenv-vault](https://www.dotenv.org/docs/dotenv-vault/sync) - Sync env files
- [env-cmd](https://github.com/toddbluhm/env-cmd) - Load env files
- [cross-env](https://github.com/kentcdodds/cross-env) - Set env variables cross-platform

---

*Last Updated: October 15, 2025*
*Keep this guide updated as new variables are added*