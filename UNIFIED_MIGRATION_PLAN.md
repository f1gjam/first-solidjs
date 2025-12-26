# Unified Layout Migration Plan

## Overview
Migrating stravastats_react_fe to use the unified-web-experience modern layout and design system while preserving all API integrations.

## Git Tag Created
- **v1.0.0-pre-unified** - Backup before migration

## Phase 1: Copy Unified Components & Styling ✅
1. Copy UI components from unified-web-experience
2. Update index.css with Strava-inspired design
3. Update tailwind.config.ts
4. Copy layout components (Header, Layout, Footer)

## Phase 2: Update App Structure
1. Update App.tsx with new routing structure
2. Integrate QueryClient for API data fetching
3. Add Toaster and Tooltip providers

## Phase 3: Migrate Leaderboard Pages
1. Update MensLeaderboard with new design
2. Update WomensLeaderboard with new design  
3. Update MensRunningLeaderboard with new design
4. Update WomensRunningLeaderboard with new design
5. Create Monthly Leaders pages (Mens/Womens Cycling & Running)
6. Create Yearly Leaders pages (Mens/Womens Cycling & Running)
7. Update SingleActivity page

## Phase 4: Create New Pages
1. Create modern Index (Home) page
2. Create About page
3. Create Contact page
4. Update Documentation page with new styling

## Phase 5: API Integration
1. Ensure all API calls work with new structure
2. Update data fetching to use React Query
3. Test all endpoints

## Phase 6: Testing & Deployment
1. Test locally
2. Build and deploy
3. Verify on production

## Status: IN PROGRESS - Manual Steps Required

## Next Steps (Manual Execution Required)

### 1. Install Dependencies
```bash
cd /Users/kashif.ali/Dropbox/Programming/FrontEnd/stravastats_react_fe
npm install
```

### 2. Copy Unified Components
```bash
# Copy layout components
cp ~/Dropbox/Programming/FrontEnd/unified-web-experience/src/components/layout/*.tsx src/components/layout/

# Copy leaderboard components (if they exist)
cp ~/Dropbox/Programming/FrontEnd/unified-web-experience/src/components/leaderboard/*.tsx src/components/leaderboard/ 2>/dev/null || true

# Copy all shadcn/ui components
mkdir -p src/components/ui
cp ~/Dropbox/Programming/FrontEnd/unified-web-experience/src/components/ui/*.tsx src/components/ui/

# Copy lib utilities
mkdir -p src/lib
cp ~/Dropbox/Programming/FrontEnd/unified-web-experience/src/lib/*.ts src/lib/

# Copy hooks
mkdir -p src/hooks
cp ~/Dropbox/Programming/FrontEnd/unified-web-experience/src/hooks/*.ts src/hooks/ 2>/dev/null || true
cp ~/Dropbox/Programming/FrontEnd/unified-web-experience/src/hooks/*.tsx src/hooks/ 2>/dev/null || true

# Copy index.css and App.css
cp ~/Dropbox/Programming/FrontEnd/unified-web-experience/src/index.css src/
cp ~/Dropbox/Programming/FrontEnd/unified-web-experience/src/App.css src/ 2>/dev/null || true
```

### 3. Test Local Build
```bash
npm run build
```

### 4. Test Local Development Server
```bash
npm run dev
```

### 5. Commit and Push
```bash
git add -A
git commit -m "Complete unified web experience migration"
git push origin dev
```

### 6. Wait for CI/CD Pipeline
Wait 120 seconds for GitLab to build and deploy

### 7. Verify Production
Check https://www2.unixcraft.dev/

## Files That Need Manual Updates After Copy

1. **src/components/layout/Header.tsx** - Update navigation menu items to match our routes
2. **src/App.tsx** - Update routes to include all our leaderboard pages
3. **src/pages/*.tsx** - Create all missing page components
4. **src/services/api.ts** - Create API service with endpoints
5. **src/types/leaderboard.ts** - Define TypeScript interfaces for API data

## Routes Required
- / (Home/Index)
- /mens-cycling (Weekly)
- /mens-cycling-monthly
- /mens-cycling-yearly
- /womens-cycling (Weekly)
- /womens-cycling-monthly
- /womens-cycling-yearly
- /mens-running (Weekly)
- /mens-running-monthly
- /mens-running-yearly
- /womens-running (Weekly)
- /womens-running-monthly
- /womens-running-yearly
- /single-activities
- /current-leaders
- /documentation
- /about
- /contact
