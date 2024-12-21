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

// Study Material pages
import PPLNavigationMaterial from "./pages/subjects/PPLNavigationMaterial";
import PPLFlightPlanningMaterial from "./pages/subjects/PPLFlightPlanningMaterial";
import PPLMeteorologicalMaterial from "./pages/subjects/PPLMeteorologicalMaterial";
import PPLHumanPerformanceMaterial from "./pages/subjects/PPLHumanPerformanceMaterial";
import PPLPrinciplesMaterial from "./pages/subjects/PPLPrinciplesMaterial";
import PPLTechnicalMaterial from "./pages/subjects/PPLTechnicalMaterial";
import PPLAirLawMaterial from "./pages/subjects/PPLAirLawMaterial";

// New study material pages for CPL
import CPLNavigationMaterial from "./pages/subjects/CPLNavigationMaterial";
import CPLInstrumentsMaterial from "./pages/subjects/CPLInstrumentsMaterial";
import CPLAirLawMaterial from "./pages/subjects/CPLAirLawMaterial";
import CPLTechnicalMaterial from "./pages/subjects/CPLTechnicalMaterial";
import CPLFlightPlanningMaterial from "./pages/subjects/CPLFlightPlanningMaterial";
import CPLMeteorologicalMaterial from "./pages/subjects/CPLMeteorologicalMaterial";
import CPLRadioAidsMaterial from "./pages/subjects/CPLRadioAidsMaterial";
import CPLHumanPerformanceMaterial from "./pages/subjects/CPLHumanPerformanceMaterial";

// New study material pages for ATPL
import ATPLFlightPlanningMaterial from "./pages/subjects/ATPLFlightPlanningMaterial";
import ATPLATGPOFMaterial from "./pages/subjects/ATPLATGPOFMaterial";
import ATPLInstrumentsMaterial from "./pages/subjects/ATPLInstrumentsMaterial";
import ATPLNavigationMaterial from "./pages/subjects/ATPLNavigationMaterial";
import ATPLRadioAidsMaterial from "./pages/subjects/ATPLRadioAidsMaterial";
import ATPLMeteorologicalMaterial from "./pages/subjects/ATPLMeteorologicalMaterial";

// New study material pages for Ratings
import NightRatingMaterial from "./pages/subjects/NightRatingMaterial";
import InstrumentRatingMaterial from "./pages/subjects/InstrumentRatingMaterial";

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

const App = () => {
  // Initialize QueryClient inside the component
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  }));

  return (
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
              
              {/* CPL Study Material Routes */}
              <Route path="/cpl-navigation-material" element={<ProtectedRoute><CPLNavigationMaterial /></ProtectedRoute>} />
              <Route path="/cpl-instruments-material" element={<ProtectedRoute><CPLInstrumentsMaterial /></ProtectedRoute>} />
              <Route path="/cpl-air-law-material" element={<ProtectedRoute><CPLAirLawMaterial /></ProtectedRoute>} />
              <Route path="/cpl-technical-material" element={<ProtectedRoute><CPLTechnicalMaterial /></ProtectedRoute>} />
              <Route path="/cpl-flight-planning-material" element={<ProtectedRoute><CPLFlightPlanningMaterial /></ProtectedRoute>} />
              <Route path="/cpl-meteorology-material" element={<ProtectedRoute><CPLMeteorologicalMaterial /></ProtectedRoute>} />
              <Route path="/cpl-radio-aids-material" element={<ProtectedRoute><CPLRadioAidsMaterial /></ProtectedRoute>} />
              <Route path="/cpl-human-performance-material" element={<ProtectedRoute><CPLHumanPerformanceMaterial /></ProtectedRoute>} />
              
              {/* ATPL Study Material Routes */}
              <Route path="/atpl-flight-planning-material" element={<ProtectedRoute><ATPLFlightPlanningMaterial /></ProtectedRoute>} />
              <Route path="/atpl-atg-pof-material" element={<ProtectedRoute><ATPLATGPOFMaterial /></ProtectedRoute>} />
              <Route path="/atpl-instruments-material" element={<ProtectedRoute><ATPLInstrumentsMaterial /></ProtectedRoute>} />
              <Route path="/atpl-navigation-material" element={<ProtectedRoute><ATPLNavigationMaterial /></ProtectedRoute>} />
              <Route path="/atpl-radio-aids-material" element={<ProtectedRoute><ATPLRadioAidsMaterial /></ProtectedRoute>} />
              <Route path="/atpl-meteorology-material" element={<ProtectedRoute><ATPLMeteorologicalMaterial /></ProtectedRoute>} />
              
              {/* Ratings Study Material Routes */}
              <Route path="/night-rating-material" element={<ProtectedRoute><NightRatingMaterial /></ProtectedRoute>} />
              <Route path="/instrument-rating-material" element={<ProtectedRoute><InstrumentRatingMaterial /></ProtectedRoute>} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;