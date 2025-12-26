import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import MensLeaderboard from './pages/MensLeaderboard';
import WomensLeaderboard from './pages/WomensLeaderboard';
import MensRunningLeaderboard from './pages/MensRunningLeaderboard';
import WomensRunningLeaderboard from './pages/WomensRunningLeaderboard';
import MonthlyLeaders from './pages/MonthlyLeaders';
import YearlyLeaders from './pages/YearlyLeaders';
import SingleActivity from './components/SingleActivity';
import Documentation from './components/documentation';
import About from './components/about';
import Contact from './components/Contact';
import Help from './components/help';
import Register from './components/register';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/mens_leaderboard" element={<MensLeaderboard />} />
            <Route path="/womens_leaderboard" element={<WomensLeaderboard />} />
            <Route path="/mens_running_leaderboard" element={<MensRunningLeaderboard />} />
            <Route path="/womens_running_leaderboard" element={<WomensRunningLeaderboard />} />
            <Route path="/monthly_leaders" element={<MonthlyLeaders />} />
            <Route path="/yearly_leaders" element={<YearlyLeaders />} />
            <Route path="/single_activity" element={<SingleActivity />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<Help />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
