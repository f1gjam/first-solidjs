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

## Status: IN PROGRESS
