#!/bin/bash

# IONOS Deployment Script for Priority Pay Network
# This script builds and prepares the application for IONOS deployment

set -e  # Exit on error

echo "🚀 Starting IONOS deployment build for Priority Pay Network..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js 18 or higher.${NC}"
    exit 1
fi

# Check Node version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo -e "${RED}❌ Node.js version 18 or higher is required. Current version: $(node -v)${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Node.js version: $(node -v)${NC}"

# Clean previous build
echo -e "${YELLOW}🧹 Cleaning previous build...${NC}"
rm -rf dist
rm -rf node_modules/.vite

# Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm ci

# Run type checking
echo -e "${YELLOW}🔍 Running type check...${NC}"
npm run type-check

# Run linting
echo -e "${YELLOW}🔍 Running linter...${NC}"
npm run lint

# Build for production
echo -e "${YELLOW}🏗️  Building for production...${NC}"
npm run build

# Verify build output
if [ ! -d "dist" ]; then
    echo -e "${RED}❌ Build failed: dist directory not found${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Build completed successfully!${NC}"

# Create .htaccess file for IONOS Apache server
echo -e "${YELLOW}📝 Creating .htaccess file for IONOS...${NC}"
cat > dist/.htaccess << 'EOF'
# Priority Pay Network - IONOS Apache Configuration

# Enable Rewrite Engine
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # HTTPS redirect (if SSL is configured)
  # Uncomment the following lines after SSL setup
  # RewriteCond %{HTTPS} off
  # RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  # Handle SPA routing - redirect all requests to index.html
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  # Prevent clickjacking
  Header always set X-Frame-Options "DENY"
  
  # Prevent MIME type sniffing
  Header always set X-Content-Type-Options "nosniff"
  
  # XSS Protection
  Header always set X-XSS-Protection "1; mode=block"
  
  # Referrer Policy
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  
  # Permissions Policy
  Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"
  
  # Strict Transport Security (HSTS)
  # Uncomment after SSL setup
  # Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
  
  # Content Security Policy
  Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: https: blob:; media-src 'self' https:; connect-src 'self' https:;"
</IfModule>

# Compression
<IfModule mod_deflate.c>
  # Compress HTML, CSS, JavaScript, Text, XML
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/xml
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE text/javascript
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE application/xhtml+xml
  AddOutputFilterByType DEFLATE application/rss+xml
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/x-javascript
  AddOutputFilterByType DEFLATE application/json
  AddOutputFilterByType DEFLATE image/svg+xml
</IfModule>

# Cache Control
<IfModule mod_expires.c>
  ExpiresActive On
  
  # Default expiration
  ExpiresDefault "access plus 1 month"
  
  # HTML (no caching)
  ExpiresByType text/html "access plus 0 seconds"
  
  # CSS and JavaScript
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType application/x-javascript "access plus 1 year"
  
  # Images
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/x-icon "access plus 1 year"
  
  # Fonts
  ExpiresByType font/woff "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType font/ttf "access plus 1 year"
  ExpiresByType font/otf "access plus 1 year"
  ExpiresByType application/font-woff "access plus 1 year"
  ExpiresByType application/font-woff2 "access plus 1 year"
  
  # JSON and XML
  ExpiresByType application/json "access plus 0 seconds"
  ExpiresByType application/xml "access plus 0 seconds"
  ExpiresByType text/xml "access plus 0 seconds"
</IfModule>

# Cache-Control headers
<IfModule mod_headers.c>
  # Cache static assets
  <FilesMatch "\.(ico|pdf|flv|jpg|jpeg|png|gif|svg|webp|js|css|swf|woff|woff2|ttf|otf)$">
    Header set Cache-Control "max-age=31536000, public, immutable"
  </FilesMatch>
  
  # Don't cache HTML
  <FilesMatch "\.(html|htm)$">
    Header set Cache-Control "no-cache, no-store, must-revalidate"
    Header set Pragma "no-cache"
    Header set Expires "0"
  </FilesMatch>
</IfModule>

# Disable directory browsing
Options -Indexes

# Set default charset
AddDefaultCharset UTF-8

# Set default language
DefaultLanguage en-US

# Error pages (optional - create custom error pages)
# ErrorDocument 404 /index.html
# ErrorDocument 500 /index.html

# File access protection
<FilesMatch "^\.">
  Order allow,deny
  Deny from all
</FilesMatch>
EOF

echo -e "${GREEN}✓ .htaccess file created${NC}"

# Create deployment info file
echo -e "${YELLOW}📝 Creating deployment info...${NC}"
cat > dist/deployment-info.json << EOF
{
  "deploymentDate": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "buildVersion": "1.0.0",
  "nodeVersion": "$(node -v)",
  "npmVersion": "$(npm -v)",
  "platform": "IONOS",
  "commitHash": "$(git rev-parse --short HEAD 2>/dev/null || echo 'N/A')"
}
EOF

echo -e "${GREEN}✓ Deployment info created${NC}"

# Create deployment package
echo -e "${YELLOW}📦 Creating deployment package...${NC}"
cd dist
zip -r ../ionos-deployment.zip . -q
cd ..

echo -e "${GREEN}✓ Deployment package created: ionos-deployment.zip${NC}"

# Print summary
echo -e "\n${GREEN}════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}✅ IONOS Deployment Build Complete!${NC}"
echo -e "${GREEN}════════════════════════════════════════════════════${NC}"
echo -e "\n${YELLOW}Next Steps:${NC}"
echo -e "1. Upload the contents of the ${GREEN}dist${NC} directory to your IONOS web space"
echo -e "2. Or upload ${GREEN}ionos-deployment.zip${NC} and extract it on the server"
echo -e "3. Ensure the files are in your public_html or htdocs directory"
echo -e "4. Configure SSL certificate in IONOS panel (recommended)"
echo -e "5. After SSL setup, uncomment HTTPS redirect in .htaccess"
echo -e "6. Test your deployment at your IONOS domain"
echo -e "\n${YELLOW}IONOS FTP Upload Command Example:${NC}"
echo -e "ftp -n your-domain.com << EOF"
echo -e "user your-username your-password"
echo -e "binary"
echo -e "cd /public_html"
echo -e "mput dist/*"
echo -e "bye"
echo -e "EOF"
echo -e "\n${YELLOW}Or use FileZilla with SFTP:${NC}"
echo -e "Host: sftp://your-domain.com"
echo -e "Username: your-ionos-username"
echo -e "Password: your-ionos-password"
echo -e "Port: 22"
echo -e "\n${GREEN}════════════════════════════════════════════════════${NC}\n"
