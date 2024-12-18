import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import PPLSubjects from "./pages/PPLSubjects";
import CPLSubjects from "./pages/CPLSubjects";
import ATPLSubjects from "./pages/ATPLSubjects";
import "./lib/firebase";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quiz/:category" element={<Quiz />} />
            <Route path="/ppl-subjects" element={<PPLSubjects />} />
            <Route path="/cpl-subjects" element={<CPLSubjects />} />
            <Route path="/atpl-subjects" element={<ATPLSubjects />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;