import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WeeklyLeaderboard from "./pages/WeeklyLeaderboard";
import MonthlyLeaderboard from "./pages/MonthlyLeaderboard";
import AllTimeLeaderboard from "./pages/AllTimeLeaderboard";
import Clubs from "./pages/Clubs";
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
          <Route path="/weekly" element={<WeeklyLeaderboard />} />
          <Route path="/monthly" element={<MonthlyLeaderboard />} />
          <Route path="/all-time" element={<AllTimeLeaderboard />} />
          <Route path="/clubs" element={<Clubs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
