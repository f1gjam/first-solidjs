# Docker Build Fix - Complete (Updated)

## Latest Issue Fixed (Dec 26, 2024)
After migrating to unified-web-experience, the Docker build was failing with:
```
ERROR: "/postcss.config.cjs": not found
```

## Root Cause
During the migration to unified-web-experience and Vite, several files were renamed/removed:
1. ✅ Renamed `postcss.config.cjs` → `postcss.config.js` (ES modules)
2. ✅ Removed `config-overrides.js` (not needed with Vite)
3. ✅ Removed `.babelrc` (not needed with Vite)
4. ✅ Changed output `build/` → `dist/` (Vite default)
5. ✅ Changed env vars `REACT_APP_*` → `VITE_*`

The Dockerfile still referenced old files.

## Changes Made to Dockerfile

### 1. Configuration Files
**Before:**
```dockerfile
COPY config-overrides.js .babelrc postcss.config.cjs tailwind.config.ts vite.config.ts ...
```

**After:**
```dockerfile
COPY tsconfig.json tsconfig.app.json tsconfig.node.json postcss.config.js tailwind.config.ts vite.config.ts components.json ./
```

### 2. Environment Variables
**Before:**
```dockerfile
ARG REACT_APP_API_URL=https://www.unixcraft.dev
ENV REACT_APP_API_URL=$REACT_APP_API_URL
```

**After:**
```dockerfile
ARG VITE_API_URL=https://www.unixcraft.dev
ENV VITE_API_URL=$VITE_API_URL
```

### 3. Build Output Directory
**Before:**
```dockerfile
COPY --from=builder /app/build /usr/share/nginx/html
```

**After:**
```dockerfile
COPY --from=builder /app/dist /usr/share/nginx/html
```

## Testing Commands

### Local Build
```bash
npm run build
# Outputs to dist/ directory
ls -la dist/
```

### Docker Build
```bash
docker build -t stravastats-frontend .
```

### Docker Run
```bash
docker run -p 3000:3000 -e VITE_API_URL=https://www.unixcraft.dev stravastats-frontend
```

### With Custom API URL
```bash
docker build --build-arg VITE_API_URL=https://your-api.com -t stravastats-frontend .
```

## GitLab CI/CD Variables

Update your GitLab CI variables:
```yaml
variables:
  VITE_API_URL: "https://www.unixcraft.dev"

build:
  script:
    - docker build --build-arg VITE_API_URL=$VITE_API_URL -t $CI_REGISTRY_IMAGE:latest .
```

## Summary of All Fixes

### Files Modified:
- ✅ `Dockerfile` - Updated for Vite and ES modules
- ✅ `postcss.config.cjs` → `postcss.config.js`
- ✅ Removed `config-overrides.js` and `.babelrc`
- ✅ Updated `.env` with `VITE_*` variables

### Git Commits:
```
8654dcd Fix Dockerfile for Vite build
a335504 Add migration completion summary
9eb8f2f Replace site with unified-web-experience and integrate backend API
```

## Status
✅ **COMPLETE** - Docker build is now fixed and aligned with Vite!

Push these changes to trigger a successful GitLab CI build:
```bash
git push origin dev
```
