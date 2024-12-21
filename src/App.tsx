import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

// Page imports
import Index from "./pages/Index";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import PPLSubjects from "./pages/PPLSubjects";
import CPLSubjects from "./pages/CPLSubjects";
import ATPLSubjects from "./pages/ATPLSubjects";
import Ratings from "./pages/Ratings";
import StudyMaterial from "./pages/StudyMaterial";
import Pricing from "./pages/Pricing";
import Profile from "./pages/Profile";

// PPL Study Material pages
import PPLNavigationMaterial from "./pages/subjects/PPLNavigationMaterial";
import PPLFlightPlanningMaterial from "./pages/subjects/PPLFlightPlanningMaterial";
import PPLMeteorologicalMaterial from "./pages/subjects/PPLMeteorologicalMaterial";
import PPLHumanPerformanceMaterial from "./pages/subjects/PPLHumanPerformanceMaterial";
import PPLPrinciplesMaterial from "./pages/subjects/PPLPrinciplesMaterial";
import PPLTechnicalMaterial from "./pages/subjects/PPLTechnicalMaterial";
import PPLAirLawMaterial from "./pages/subjects/PPLAirLawMaterial";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("Auth state changed in protected route:", event);
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

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
            <Route path="/login" element={<Login />} />
            
            {/* Protected Routes */}
            <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
            <Route path="/quiz/:category" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
            <Route path="/ppl-subjects" element={<ProtectedRoute><PPLSubjects /></ProtectedRoute>} />
            <Route path="/cpl-subjects" element={<ProtectedRoute><CPLSubjects /></ProtectedRoute>} />
            <Route path="/atpl-subjects" element={<ProtectedRoute><ATPLSubjects /></ProtectedRoute>} />
            <Route path="/ratings" element={<ProtectedRoute><Ratings /></ProtectedRoute>} />
            <Route path="/study-material" element={<ProtectedRoute><StudyMaterial /></ProtectedRoute>} />
            <Route path="/pricing" element={<ProtectedRoute><Pricing /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            
            {/* PPL Study Material Routes */}
            <Route path="/ppl-navigation-material" element={<ProtectedRoute><PPLNavigationMaterial /></ProtectedRoute>} />
            <Route path="/ppl-flight-planning-material" element={<ProtectedRoute><PPLFlightPlanningMaterial /></ProtectedRoute>} />
            <Route path="/ppl-meteorology-material" element={<ProtectedRoute><PPLMeteorologicalMaterial /></ProtectedRoute>} />
            <Route path="/ppl-human-performance-material" element={<ProtectedRoute><PPLHumanPerformanceMaterial /></ProtectedRoute>} />
            <Route path="/ppl-principles-material" element={<ProtectedRoute><PPLPrinciplesMaterial /></ProtectedRoute>} />
            <Route path="/ppl-technical-material" element={<ProtectedRoute><PPLTechnicalMaterial /></ProtectedRoute>} />
            <Route path="/ppl-air-law-material" element={<ProtectedRoute><PPLAirLawMaterial /></ProtectedRoute>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;