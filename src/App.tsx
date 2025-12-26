import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Index from './pages/Index';
import MensLeaderboard from './components/MensLeaderboard';
import WomensLeaderboard from './components/WomensLeaderboard';
import MensRunningLeaderboard from './components/MensRunningLeaderboard';
import WomensRunningLeaderboard from './components/WomensRunningLeaderboard';
import MensMonthlyLeaderboard from './components/MensMonthlyLeaderboard';
import WomensMonthlyLeaderboard from './components/WomensMonthlyLeaderboard';
import MensRunningMonthlyLeaderboard from './components/MensRunningMonthlyLeaderboard';
import WomensRunningMonthlyLeaderboard from './components/WomensRunningMonthlyLeaderboard';
import MensYearlyLeaderboard from './components/MensYearlyLeaderboard';
import WomensYearlyLeaderboard from './components/WomensYearlyLeaderboard';
import MensRunningYearlyLeaderboard from './components/MensRunningYearlyLeaderboard';
import WomensRunningYearlyLeaderboard from './components/WomensRunningYearlyLeaderboard';
import MonthlyLeaders from './pages/MonthlyLeaders';
import YearlyLeaders from './pages/YearlyLeaders';
import SingleActivity from './components/SingleActivity';
import Documentation from './components/Documentation';
import About from './pages/About';
import Contact from './pages/Contact';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/mens_leaderboard" element={<MensLeaderboard />} />
              <Route path="/womens_leaderboard" element={<WomensLeaderboard />} />
              <Route path="/mens_running_leaderboard" element={<MensRunningLeaderboard />} />
              <Route path="/womens_running_leaderboard" element={<WomensRunningLeaderboard />} />
              <Route path="/mens_monthly_leaderboard" element={<MensMonthlyLeaderboard />} />
              <Route path="/womens_monthly_leaderboard" element={<WomensMonthlyLeaderboard />} />
              <Route path="/mens_running_monthly_leaderboard" element={<MensRunningMonthlyLeaderboard />} />
              <Route path="/womens_running_monthly_leaderboard" element={<WomensRunningMonthlyLeaderboard />} />
              <Route path="/mens_yearly_leaderboard" element={<MensYearlyLeaderboard />} />
              <Route path="/womens_yearly_leaderboard" element={<WomensYearlyLeaderboard />} />
              <Route path="/mens_running_yearly_leaderboard" element={<MensRunningYearlyLeaderboard />} />
              <Route path="/womens_running_yearly_leaderboard" element={<WomensRunningYearlyLeaderboard />} />
              <Route path="/monthly_leaders" element={<MonthlyLeaders />} />
              <Route path="/yearly_leaders" element={<YearlyLeaders />} />
              <Route path="/single_activity" element={<SingleActivity />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
