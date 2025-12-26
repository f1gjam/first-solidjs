# Migration Plan: Unified Web Experience Integration

## Overview
Migrate the current React application to use the modern unified-web-experience architecture with Vite, shadcn/ui, and improved design.

## Current State
- **Build System**: Create React App with react-app-rewired
- **UI Framework**: Basic Tailwind CSS
- **State Management**: Basic React state
- **Routing**: React Router v6

## Target State
- **Build System**: Vite (faster builds, better DX)
- **UI Framework**: shadcn/ui with Radix UI primitives
- **State Management**: TanStack Query for API data
- **Routing**: React Router v6 (keep same)
- **Design**: Modern gradient design with proper mobile responsiveness

## Migration Phases

### Phase 1: Project Structure Migration ✓
- [x] Create git tag backup (v1.0.0-pre-redesign)
- [ ] Copy unified-web-experience structure to stravastats_react_fe
- [ ] Update package.json with new dependencies
- [ ] Replace CRA with Vite configuration
- [ ] Update TypeScript configuration

### Phase 2: UI Components Migration
- [ ] Copy shadcn/ui components from unified-web-experience
- [ ] Integrate Layout and Header components
- [ ] Update navigation to match new design
- [ ] Add proper theme support (dark mode)
- [ ] Integrate Lucide icons

### Phase 3: API Integration
- [ ] Set up TanStack Query
- [ ] Create API hooks for leaderboard data
- [ ] Update existing components to use new data fetching
- [ ] Implement proper loading and error states
- [ ] Add data caching and refetching strategies

### Phase 4: Page Migration
- [ ] Migrate Home/Index page
- [ ] Migrate Men's Cycling Leaderboard
- [ ] Migrate Women's Cycling Leaderboard
- [ ] Migrate Men's Running Leaderboard
- [ ] Migrate Women's Running Leaderboard
- [ ] Migrate Monthly Leaders pages (Cycling & Running)
- [ ] Migrate Yearly Leaders pages (Cycling & Running)
- [ ] Migrate Single Activity page
- [ ] Migrate Documentation page with screenshots
- [ ] Create About page
- [ ] Create Contact page

### Phase 5: Table Components Enhancement
- [ ] Integrate TanStack Table
- [ ] Add proper filtering functionality
- [ ] Add sorting with visual indicators
- [ ] Add pagination controls
- [ ] Improve mobile table responsiveness
- [ ] Add export functionality

### Phase 6: Build & Deployment Updates
- [ ] Update Dockerfile for Vite build
- [ ] Update nginx configuration for SPA routing
- [ ] Update GitLab CI pipeline
- [ ] Test build process
- [ ] Update environment variable handling

### Phase 7: Documentation & Assets
- [ ] Create screenshots of new design
- [ ] Update documentation with new screenshots
- [ ] Integrate UnixCraft logo properly
- [ ] Update README
- [ ] Create migration notes

### Phase 8: Testing & Validation
- [ ] Test all routes and navigation
- [ ] Test API integration with real data
- [ ] Test mobile responsiveness
- [ ] Test table filtering and sorting
- [ ] Cross-browser testing
- [ ] Performance testing

### Phase 9: Deployment
- [ ] Deploy to staging environment
- [ ] Validate staging deployment
- [ ] Update Portainer docker-compose if needed
- [ ] Deploy to production
- [ ] Monitor for errors

## Key Files to Migrate

### From unified-web-experience
- `vite.config.ts`
- `tailwind.config.ts`
- `components.json`
- `src/components/ui/*` (all shadcn components)
- `src/components/layout/*`
- `src/lib/utils.ts`
- `src/hooks/*`
- `src/index.css` (global styles)

### To Update in stravastats_react_fe
- `package.json` → Complete rewrite with new deps
- `Dockerfile` → Update build commands for Vite
- `nginx/default.conf` → Ensure SPA routing works
- `.gitlab-ci.yml` → Update build scripts

## API Endpoints to Integrate
Based on the original Go backend, we need to support:
- `/api/leaderboard/mens` - Men's cycling leaderboard
- `/api/leaderboard/womens` - Women's cycling leaderboard
- `/api/leaderboard/mens_running` - Men's running leaderboard
- `/api/leaderboard/womens_running` - Women's running leaderboard
- `/api/leaderboard/monthly/*` - Monthly leaders
- `/api/leaderboard/yearly/*` - Yearly leaders
- `/api/activity/:id` - Single activity details

## Dependencies to Add
```json
{
  "@radix-ui/*": "Latest radix primitives",
  "@tanstack/react-query": "^5.83.0",
  "@tanstack/react-table": "^8.21.3",
  "vite": "^5.4.19",
  "@vitejs/plugin-react-swc": "^3.11.0",
  "lucide-react": "^0.462.0",
  "class-variance-authority": "^0.7.1",
  "tailwind-merge": "^2.6.0",
  "tailwindcss-animate": "^1.0.7"
}
```

## Breaking Changes
- Build command changes from `npm run build` to `vite build`
- Import paths may need `@/` alias updates
- Environment variables change from `REACT_APP_*` to `VITE_*`
- index.html moves to root (Vite requirement)

## Rollback Plan
- Git tag created: `v1.0.0-pre-redesign`
- Can rollback with: `git reset --hard v1.0.0-pre-redesign`
- Portainer can redeploy previous container image

## Timeline
- Estimated Duration: 120 seconds between deployments
- Expected Completion: End of current session

---
**Status**: Phase 1 Initiated
**Last Updated**: 2025-12-26
