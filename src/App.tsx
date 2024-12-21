import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import PPLSubjects from "./pages/PPLSubjects";
import CPLSubjects from "./pages/CPLSubjects";
import ATPLSubjects from "./pages/ATPLSubjects";
import Ratings from "./pages/Ratings";
import StudyMaterial from "./pages/StudyMaterial";
import PPLStudyMaterial from "./pages/PPLStudyMaterial";
import CPLStudyMaterial from "./pages/CPLStudyMaterial";
import ATPLStudyMaterial from "./pages/ATPLStudyMaterial";
import RatingsMaterial from "./pages/RatingsMaterial";
import Pricing from "./pages/Pricing";
import Profile from "./pages/Profile";

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
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Index />
                </ProtectedRoute>
              }
            />
            <Route
              path="/quiz/:category"
              element={
                <ProtectedRoute>
                  <Quiz />
                </ProtectedRoute>
              }
            />
            <Route
              path="/ppl-subjects"
              element={
                <ProtectedRoute>
                  <PPLSubjects />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cpl-subjects"
              element={
                <ProtectedRoute>
                  <CPLSubjects />
                </ProtectedRoute>
              }
            />
            <Route
              path="/atpl-subjects"
              element={
                <ProtectedRoute>
                  <ATPLSubjects />
                </ProtectedRoute>
              }
            />
            <Route
              path="/ratings"
              element={
                <ProtectedRoute>
                  <Ratings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/study-material"
              element={
                <ProtectedRoute>
                  <StudyMaterial />
                </ProtectedRoute>
              }
            />
            <Route
              path="/ppl-study-material"
              element={
                <ProtectedRoute>
                  <PPLStudyMaterial />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cpl-study-material"
              element={
                <ProtectedRoute>
                  <CPLStudyMaterial />
                </ProtectedRoute>
              }
            />
            <Route
              path="/atpl-study-material"
              element={
                <ProtectedRoute>
                  <ATPLStudyMaterial />
                </ProtectedRoute>
              }
            />
            <Route
              path="/ratings-material"
              element={
                <ProtectedRoute>
                  <RatingsMaterial />
                </ProtectedRoute>
              }
            />
            <Route
              path="/pricing"
              element={
                <ProtectedRoute>
                  <Pricing />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;