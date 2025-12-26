import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MonthlyLeaderboard from "./pages/MonthlyLeaderboard";
import YearlyLeaderboard from "./pages/YearlyLeaderboard";
import TopMonthly from "./pages/TopMonthly";
import TopYearly from "./pages/TopYearly";
import Register from "./pages/Register";
import Documentation from "./pages/Documentation";
import ComingSoon from "./pages/ComingSoon";
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
          <Route path="/monthly" element={<MonthlyLeaderboard />} />
          <Route path="/yearly" element={<YearlyLeaderboard />} />
          <Route path="/top-monthly" element={<TopMonthly />} />
          <Route path="/top-yearly" element={<TopYearly />} />
          <Route path="/register" element={<Register />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/clubs" element={<ComingSoon />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
