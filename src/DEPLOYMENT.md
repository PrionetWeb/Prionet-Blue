# Deployment Guide

This guide covers deploying Priority Pay Network to various hosting platforms.

## Table of Contents

- [Build Process](#build-process)
- [Environment Variables](#environment-variables)
- [Deployment Platforms](#deployment-platforms)
  - [Vercel](#vercel)
  - [Netlify](#netlify)
  - [GitHub Pages](#github-pages)
  - [Custom Server](#custom-server)
- [Production Checklist](#production-checklist)
- [Performance Optimization](#performance-optimization)
- [Troubleshooting](#troubleshooting)

## Build Process

### Development Build

```bash
npm run dev
```

Starts development server at `http://localhost:5173`

### Production Build

```bash
npm run build
```

Creates optimized production build in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

Preview the production build locally before deployment.

## Environment Variables

Create a `.env` file in the root directory for environment-specific configuration:

```env
# API Configuration (if using backend)
VITE_API_URL=https://api.yourbackend.com
VITE_API_KEY=your_api_key_here

# Analytics (optional)
VITE_GA_TRACKING_ID=UA-XXXXXXXXX-X

# Feature Flags (optional)
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_SUPABASE=false
```

**Note**: Vite requires `VITE_` prefix for environment variables to be exposed to the client.

## Deployment Platforms

### Vercel

Vercel is recommended for React + Vite applications.

#### Method 1: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite configuration
6. Click "Deploy"

#### Method 2: CLI Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### Vercel Configuration

Create `vercel.json` in the root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Netlify

#### Method 1: Drag & Drop

1. Build your project: `npm run build`
2. Visit [netlify.com](https://netlify.com)
3. Drag the `dist` folder to Netlify

#### Method 2: GitHub Integration

1. Push code to GitHub
2. Visit Netlify dashboard
3. "New site from Git"
4. Select your repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Deploy

#### Netlify Configuration

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "no-referrer"
```

### GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/priority-pay-network",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/priority-pay-network/',
     // ... rest of config
   });
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Custom Server (VPS/Dedicated)

#### Nginx Configuration

```nginx
server {
    listen 80;
    server_name prioritypaynetwork.com www.prioritypaynetwork.com;
    
    root /var/www/priority-pay-network/dist;
    index index.html;
    
    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    
    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Security headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer" always;
}
```

#### Apache Configuration

Create `.htaccess` in the `dist` folder:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css application/json
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE text/xml application/xml text/x-component
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

#### Deployment Steps

```bash
# Build project
npm run build

# Upload to server
scp -r dist/* user@server:/var/www/priority-pay-network/

# Or use rsync
rsync -avz dist/ user@server:/var/www/priority-pay-network/
```

## Production Checklist

Before deploying to production:

- [ ] Run production build successfully
- [ ] Test production build locally with `npm run preview`
- [ ] Update environment variables for production
- [ ] Test in multiple browsers
- [ ] Test on mobile devices
- [ ] Verify all images load correctly
- [ ] Check console for errors
- [ ] Verify analytics integration (if applicable)
- [ ] Test all navigation and routing
- [ ] Verify light/dark mode toggle works
- [ ] Check accessibility with WAVE or axe DevTools
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Verify meta tags and SEO elements
- [ ] Test social media sharing previews
- [ ] Backup existing deployment (if updating)

## Performance Optimization

### Build Optimization

The `vite.config.ts` includes:
- Code splitting for vendor chunks
- Source maps for debugging
- Optimized dependencies

### Additional Optimizations

1. **Image Optimization**
   - Use WebP format where possible
   - Compress images before uploading
   - Use `ImageWithFallback` component
   - Implement lazy loading

2. **Code Splitting**
   - Already configured in `vite.config.ts`
   - Vendor chunks separated
   - Route-based code splitting possible

3. **Caching Strategy**
   - Static assets cached for 1 year
   - HTML files not cached
   - Use cache busting for updates

4. **CDN Integration**
   - Consider using a CDN for static assets
   - Vercel/Netlify provide CDN automatically
   - For custom deployment, use Cloudflare or similar

### Performance Targets

Aim for these Lighthouse scores:
- Performance: 90+
- Accessibility: 100
- Best Practices: 95+
- SEO: 95+

## Monitoring

### Recommended Tools

- **Error Tracking**: Sentry
- **Analytics**: Google Analytics, Plausible
- **Performance**: Vercel Analytics, Google PageSpeed Insights
- **Uptime**: UptimeRobot, Pingdom

### Setting Up Sentry (Optional)

```bash
npm install @sentry/react @sentry/vite-plugin
```

Update `main.tsx`:

```typescript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "your-sentry-dsn",
  integrations: [new Sentry.BrowserTracing()],
  tracesSampleRate: 1.0,
});
```

## Troubleshooting

### Build Fails

**Issue**: Build command fails

**Solutions**:
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear cache: `rm -rf .vite`
- Check Node version: `node --version` (should be >=18.0.0)
- Check for TypeScript errors: `npm run lint`

### Routing Issues

**Issue**: Direct URLs return 404

**Solution**: Configure server for SPA routing (see platform-specific configs above)

### Environment Variables Not Working

**Issue**: Environment variables undefined

**Solutions**:
- Ensure variables have `VITE_` prefix
- Rebuild after adding new variables
- Check `.env` file is in root directory
- Don't commit `.env` to version control

### Blank Page After Deployment

**Issue**: Application shows blank page

**Solutions**:
- Check browser console for errors
- Verify `base` path in `vite.config.ts`
- Check if all assets loaded correctly
- Verify import paths are correct

### Performance Issues

**Issue**: Slow page load times

**Solutions**:
- Enable compression (gzip/brotli)
- Optimize images
- Use CDN for assets
- Implement code splitting
- Check bundle size: `npm run build -- --report`

## SSL/HTTPS

### Let's Encrypt (Free SSL)

For custom servers:

```bash
# Install certbot
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx

# Obtain certificate
sudo certbot --nginx -d prioritypaynetwork.com -d www.prioritypaynetwork.com

# Auto-renewal
sudo certbot renew --dry-run
```

Vercel and Netlify provide automatic HTTPS.

## Domain Configuration

### DNS Settings

Point your domain to your hosting:

```
A Record:
Name: @
Value: [Your server IP or hosting IP]

CNAME Record:
Name: www
Value: prioritypaynetwork.com
```

For Vercel/Netlify, follow their custom domain setup guides.

## Rollback Plan

### Quick Rollback Steps

1. **Vercel/Netlify**: Use deployment history to revert
2. **Custom Server**: Keep previous build backup
   ```bash
   # Before deploying
   cp -r dist dist.backup
   
   # To rollback
   rm -rf dist
   mv dist.backup dist
   ```

## Support

For deployment issues:
- 📧 Email: devops@prioritypaynetwork.com
- 📖 Documentation: Check hosting provider docs
- 💬 Community: GitHub Discussions

---

**Last Updated**: October 2025
