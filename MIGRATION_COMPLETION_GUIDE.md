# Complete Unified Web Experience Migration Guide

## Current Status
The foundation is in place but requires manual execution of steps due to system limitations.

## What Has Been Completed ✅

1. **Package.json** - Updated with all unified-web-experience dependencies
2. **TypeScript Configuration** - tsconfig files are properly configured
3. **Vite Configuration** - vite.config.ts is set up correctly
4. **Tailwind Configuration** - tailwind.config.ts is configured
5. **PostCSS Configuration** - postcss.config.js is ready
6. **Dockerfile** - Optimized and secure
7. **GitLab CI/CD** - .gitlab-ci.yml is configured
8. **Git Tag** - v1.0.0-pre-unified backup created
9. **Directory Structure** - Basic structure is in place

## What Needs Manual Completion 🔧

### Step 1: Copy All Unified Components (5 minutes)

```bash
cd /Users/kashif.ali/Dropbox/Programming/FrontEnd/stravastats_react_fe

# Install dependencies
npm install

# Copy UI components (shadcn/ui)
cp -r ~/Dropbox/Programming/FrontEnd/unified-web-experience/src/components/ui/* src/components/ui/

# Copy layout components
cp ~/Dropbox/Programming/FrontEnd/unified-web-experience/src/components/layout/*.tsx src/components/layout/

# Copy lib utilities
cp ~/Dropbox/Programming/FrontEnd/unified-web-experience/src/lib/*.ts src/lib/

# Copy hooks
mkdir -p src/hooks
cp ~/Dropbox/Programming/FrontEnd/unified-web-experience/src/hooks/* src/hooks/ 2>/dev/null || true

# Copy styles
cp ~/Dropbox/Programming/FrontEnd/unified-web-experience/src/index.css src/
cp ~/Dropbox/Programming/FrontEnd/unified-web-experience/src/App.css src/ 2>/dev/null || true
```

### Step 2: Update Header Navigation (2 minutes)

Edit `src/components/layout/Header.tsx` and update the navItems array:

```typescript
const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Men's Cycling", href: "/mens-cycling", icon: Bike },
  { label: "Women's Cycling", href: "/womens-cycling", icon: Bike },
  { label: "Men's Running", href: "/mens-running", icon: Activity },
  { label: "Women's Running", href: "/womens-running", icon: Activity },
  { label: "Activities", href: "/single-activities", icon: Calendar },
  { label: "Leaders", href: "/current-leaders", icon: Trophy },
  { label: "Docs", href: "/documentation", icon: FileText },
];
```

### Step 3: Create API Service (10 minutes)

Create `src/services/api.ts`:

```typescript
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.unixcraft.dev';

export interface AthleteStats {
  rank: number;
  name: string;
  distance: number;
  elevation: number;
  activities: number;
  avg_speed: number;
}

export const api = {
  // Cycling endpoints
  getMensCyclingWeekly: () => fetch(`${API_BASE_URL}/mens_weekly`).then(r => r.json()),
  getMensCyclingMonthly: () => fetch(`${API_BASE_URL}/mens_monthly`).then(r => r.json()),
  getMensCyclingYearly: () => fetch(`${API_BASE_URL}/mens_all_time`).then(r => r.json()),
  
  getWomensCyclingWeekly: () => fetch(`${API_BASE_URL}/womens_weekly`).then(r => r.json()),
  getWomensCyclingMonthly: () => fetch(`${API_BASE_URL}/womens_monthly`).then(r => r.json()),
  getWomensCyclingYearly: () => fetch(`${API_BASE_URL}/womens_all_time`).then(r => r.json()),
  
  // Running endpoints
  getMensRunningWeekly: () => fetch(`${API_BASE_URL}/mens_running_weekly`).then(r => r.json()),
  getMensRunningMonthly: () => fetch(`${API_BASE_URL}/mens_running_monthly`).then(r => r.json()),
  getMensRunningYearly: () => fetch(`${API_BASE_URL}/mens_running_all_time`).then(r => r.json()),
  
  getWomensRunningWeekly: () => fetch(`${API_BASE_URL}/womens_running_weekly`).then(r => r.json()),
  getWomensRunningMonthly: () => fetch(`${API_BASE_URL}/womens_running_monthly`).then(r => r.json()),
  getWomensRunningYearly: () => fetch(`${API_BASE_URL}/womens_running_all_time`).then(r => r.json()),
  
  // Other endpoints
  getSingleActivities: () => fetch(`${API_BASE_URL}/single_activities`).then(r => r.json()),
  getCurrentLeaders: () => fetch(`${API_BASE_URL}/current_leaders`).then(r => r.json()),
};
```

### Step 4: Update App.tsx with All Routes (5 minutes)

Edit `src/App.tsx`:

```typescript
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages
import Index from "./pages/Index";
import MensCycling from "./pages/MensCycling";
import MensCyclingMonthly from "./pages/MensCyclingMonthly";
import MensCyclingYearly from "./pages/MensCyclingYearly";
import WomensCycling from "./pages/WomensCycling";
import WomensCyclingMonthly from "./pages/WomensCyclingMonthly";
import WomensCyclingYearly from "./pages/WomensCyclingYearly";
import MensRunning from "./pages/MensRunning";
import MensRunningMonthly from "./pages/MensRunningMonthly";
import MensRunningYearly from "./pages/MensRunningYearly";
import WomensRunning from "./pages/WomensRunning";
import WomensRunningMonthly from "./pages/WomensRunningMonthly";
import WomensRunningYearly from "./pages/WomensRunningYearly";
import SingleActivities from "./pages/SingleActivities";
import CurrentLeaders from "./pages/CurrentLeaders";
import Documentation from "./pages/Documentation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Cycling Routes */}
          <Route path="/mens-cycling" element={<MensCycling />} />
          <Route path="/mens-cycling-monthly" element={<MensCyclingMonthly />} />
          <Route path="/mens-cycling-yearly" element={<MensCyclingYearly />} />
          <Route path="/womens-cycling" element={<WomensCycling />} />
          <Route path="/womens-cycling-monthly" element={<WomensCyclingMonthly />} />
          <Route path="/womens-cycling-yearly" element={<WomensCyclingYearly />} />
          
          {/* Running Routes */}
          <Route path="/mens-running" element={<MensRunning />} />
          <Route path="/mens-running-monthly" element={<MensRunningMonthly />} />
          <Route path="/mens-running-yearly" element={<MensRunningYearly />} />
          <Route path="/womens-running" element={<WomensRunning />} />
          <Route path="/womens-running-monthly" element={<WomensRunningMonthly />} />
          <Route path="/womens-running-yearly" element={<WomensRunningYearly />} />
          
          {/* Other Routes */}
          <Route path="/single-activities" element={<SingleActivities />} />
          <Route path="/current-leaders" element={<CurrentLeaders />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

### Step 5: Create Reusable Leaderboard Component (15 minutes)

Create `src/components/leaderboard/LeaderboardPage.tsx`:

```typescript
import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LeaderboardTable } from "./LeaderboardTable";
import { Trophy } from "lucide-react";

interface LeaderboardPageProps {
  title: string;
  description: string;
  fetchWeekly: () => Promise<any>;
  fetchMonthly: () => Promise<any>;
  fetchYearly: () => Promise<any>;
  sportIcon?: React.ReactNode;
}

export function LeaderboardPage({
  title,
  description,
  fetchWeekly,
  fetchMonthly,
  fetchYearly,
  sportIcon = <Trophy className="h-6 w-6" />
}: LeaderboardPageProps) {
  const { data: weeklyData, isLoading: weeklyLoading } = useQuery({
    queryKey: [`${title}-weekly`],
    queryFn: fetchWeekly,
  });

  const { data: monthlyData, isLoading: monthlyLoading } = useQuery({
    queryKey: [`${title}-monthly`],
    queryFn: fetchMonthly,
  });

  const { data: yearlyData, isLoading: yearlyLoading } = useQuery({
    queryKey: [`${title}-yearly`],
    queryFn: fetchYearly,
  });

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-primary/10 rounded-lg text-primary">
            {sportIcon}
          </div>
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold uppercase">{title}</h1>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>

        <Tabs defaultValue="weekly" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">All Time</TabsTrigger>
          </TabsList>

          <TabsContent value="weekly">
            <Card>
              <CardHeader>
                <CardTitle>This Week's Leaderboard</CardTitle>
              </CardHeader>
              <CardContent>
                <LeaderboardTable data={weeklyData} isLoading={weeklyLoading} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monthly">
            <Card>
              <CardHeader>
                <CardTitle>This Month's Leaderboard</CardTitle>
              </CardHeader>
              <CardContent>
                <LeaderboardTable data={monthlyData} isLoading={monthlyLoading} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="yearly">
            <Card>
              <CardHeader>
                <CardTitle>All Time Leaderboard</CardTitle>
              </CardHeader>
              <CardContent>
                <LeaderboardTable data={yearlyData} isLoading={yearlyLoading} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
```

### Step 6: Build and Test (3 minutes)

```bash
# Build
npm run build

# Test locally
npm run dev

# Navigate to http://localhost:5173
```

### Step 7: Deploy (2 minutes)

```bash
git add -A
git commit -m "Complete unified web experience migration with all leaderboards"
git push origin dev

# Wait 120 seconds for CI/CD
sleep 120

# Check production
curl -I https://www2.unixcraft.dev/
```

## Estimated Total Time: 45 minutes

## Success Criteria

✅ Modern UI with shadcn/ui components
✅ All 12+ leaderboard pages working
✅ Responsive mobile design
✅ Dark mode support (via next-themes)
✅ Fast loading with React Query
✅ Proper TypeScript types
✅ API data integration working
✅ Navigation working on all pages
✅ Logo displaying correctly
✅ Documentation page with screenshots

## Troubleshooting

### If CSS doesn't load:
1. Clear browser cache (Cmd+Shift+R)
2. Check nginx logs in Portainer
3. Verify /static/css/ files exist in container
4. Check tailwind.config.ts content paths

### If API calls fail:
1. Check CORS headers on API
2. Verify API_BASE_URL in .env
3. Check network tab in browser DevTools
4. Verify API endpoints are accessible

### If build fails:
1. Run `npm install` again
2. Delete node_modules and package-lock.json
3. Run `npm install` fresh
4. Check for TypeScript errors

## Next Phase: Screenshots & Documentation

After the site is working, update the documentation page with:
1. Screenshots of new design
2. How-to guides
3. API documentation
4. FAQ section

---

**Created:** December 26, 2025, 18:45 UTC
**Status:** Ready for Manual Execution
**Priority:** High
