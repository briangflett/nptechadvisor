# NPTech Advisor - Nonprofit Technology Advisory Platform

## Project Status
- **Status**: Active development - Next.js 16.0.8, React 19
- **Purpose**: Nonprofit technology advisory platform for helping organizations with tech decisions
- **Production**: Deployed on Vercel (https://nptechadvisor.vercel.app or custom domain)

## Technology Stack
- **Frontend**: Next.js 16.0.8 (React 19)
- **Runtime**: Node.js 23 (via nvm)
- **Styling**: Tailwind CSS
- **Content**: MDX for blog posts
- **Development Port**: 3001
- **Production**: Vercel deployment

## Local Development

### Start Development Server
```bash
cd /home/brian/workspace/development/nptechadvisor
npm run dev
# Server runs on http://localhost:3001
```

### Build and Test Production Build Locally
**CRITICAL: Always test production build locally before pushing to GitHub**
```bash
cd /home/brian/workspace/development/nptechadvisor

# Build production version
npm run build

# Start production server locally
npm start
# Server runs on http://localhost:3000

# Test the application thoroughly
# - Check all pages load correctly
# - Verify no console errors
# - Test features and forms
# - Check responsive design
```

## Deployment Protocol

### Pre-Deployment Checklist
**ALWAYS follow this checklist before deploying to production:**

1. **Test Locally**
   ```bash
   npm run build  # Must succeed without errors
   npm start      # Test production build locally
   ```
   - [ ] Build completes successfully
   - [ ] No console errors in browser
   - [ ] All pages render correctly
   - [ ] Navigation works properly
   - [ ] Forms function as expected

2. **Review Changes**
   ```bash
   git status
   git diff
   ```
   - [ ] Only intended files are modified
   - [ ] No debugging code or console.logs
   - [ ] No sensitive data in commits

3. **Commit Changes**
   ```bash
   git add <files>
   git commit -m "Description of changes"
   ```
   - [ ] Commit message is clear and descriptive
   - [ ] Co-authored by Claude if applicable

4. **Deploy to Production**
   ```bash
   git push origin master
   ```
   - [ ] Push to GitHub triggers automatic Vercel deployment
   - [ ] Monitor Vercel dashboard for deployment status
   - [ ] Verify production site after deployment

### Deployment Flow
```
Local Development (port 3001)
    ↓
Test Production Build (port 3000)
    ↓
Commit to Git
    ↓
Push to GitHub (master branch)
    ↓
Vercel Auto-Deploy (triggered by GitHub push)
    ↓
Production Live
```

### Rollback Procedure
If deployment fails or issues are found:
```bash
# Revert last commit locally
git revert HEAD

# Push revert to trigger new deployment
git push origin master
```

## Common Development Tasks

### Install Dependencies
```bash
npm install
```

### Update Dependencies
```bash
# Check for updates
npm outdated

# Update specific package
npm install <package>@latest
```

### Linting
```bash
npm run lint
```

### Build Analysis
```bash
npm run analyze
```

## Troubleshooting

### Build Fails with Turbopack Errors
- Turbopack is enabled by default in Next.js 16
- MDX configuration in `next.config.js` handles MDX files
- If issues persist, check Turbopack configuration

### "use client" Directive Errors
- Server components cannot use client-side hooks (useState, useEffect, useParams, etc.)
- Add `"use client"` directive at top of file if needed
- Or remove unused client-side imports

### Port Already in Use
```bash
# Kill process on port 3001 (dev)
lsof -ti:3001 | xargs kill -9

# Kill process on port 3000 (production)
lsof -ti:3000 | xargs kill -9
```

## Project Structure
```
/home/brian/workspace/development/nptechadvisor/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── blog/              # Blog posts (MDX)
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   └── components/        # Shared components
├── public/                # Static assets
├── styles/                # Global styles
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS config
└── package.json           # Dependencies and scripts
```

## Important Reminders

⚠️ **ALWAYS TEST PRODUCTION BUILD LOCALLY BEFORE PUSHING TO GITHUB**
- Run `npm run build && npm start`
- Test thoroughly on http://localhost:3000
- Never commit without testing

⚠️ **GITHUB PUSH = AUTOMATIC PRODUCTION DEPLOYMENT**
- Every push to `master` triggers Vercel deployment
- No staging environment - test locally first
- Monitor Vercel dashboard after push

⚠️ **COMMIT MESSAGE CONVENTIONS**
- Use clear, descriptive messages
- Include Claude co-authorship when applicable
- Format: "Action: Description" (e.g., "Fix: Duplicate key errors in features")

## Version History
- **2024-12-10**: Upgraded to Next.js 16.0.8, React 19, fixed duplicate key errors
- **Previous**: Next.js 14.1.0, React 18.2.0