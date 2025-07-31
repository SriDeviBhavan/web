# 🚀 Deployment Guide - Sri Devi Bhavan

## Local Development

The app is now configured for local development with the correct settings:

```bash
npm start
```

The app will run on `http://localhost:3000` (not `/web` anymore).

## Production Deployment Options

### Option 1: GitHub Pages

1. **For GitHub Pages deployment:**
   ```bash
   # Update homepage in package.json to your GitHub Pages URL
   "homepage": "https://yourusername.github.io/sri-devi-bhavan"
   
   # Deploy
   npm run deploy
   ```

### Option 2: Netlify

1. **For Netlify deployment:**
   ```bash
   # Build the project
   npm run build
   
   # Deploy the 'build' folder to Netlify
   # Or use Netlify CLI: netlify deploy --prod --dir=build
   ```

2. **Netlify configuration:**
   - Build command: `npm run build`
   - Publish directory: `build`
   - Homepage: Set to your Netlify domain

### Option 3: Vercel

1. **For Vercel deployment:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

## Configuration Changes

### For Different Environments

**Development (current):**
```json
"homepage": "."
```

**GitHub Pages:**
```json
"homepage": "https://yourusername.github.io/sri-devi-bhavan"
```

**Netlify/Vercel:**
```json
"homepage": "https://your-domain.netlify.app"
```

## Image Paths

All image paths are now correctly set to `/images/` which works for:
- Local development
- Most hosting platforms
- Static file serving

## WhatsApp Configuration

Before deploying, update the WhatsApp number in `src/config/restaurant.ts`:

```typescript
whatsappNumber: '919876543210', // Replace with actual restaurant number
```

## Build and Test

```bash
# Build for production
npm run build

# Test the build locally
npx serve -s build
```

## Troubleshooting

### Images Not Loading
- Ensure all images are in `public/images/` directory
- Check that image paths use `/images/` (not `/web/images/`)
- Verify file names match exactly (case-sensitive)

### Routing Issues
- For single-page app routing, configure your hosting platform to serve `index.html` for all routes
- Add a `_redirects` file for Netlify or similar configuration for other platforms

### WhatsApp Integration
- Test the WhatsApp link generation locally first
- Ensure the phone number includes country code
- Verify the message format works on mobile devices 