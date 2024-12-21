import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PlaneTakeoff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.onAuthStateChange((event, session) => {
      console.log("Auth state changed:", event);
      if (session) {
        console.log("User is logged in, redirecting to dashboard");
        navigate("/");
      }
    });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-primary dark:bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <PlaneTakeoff className="h-12 w-12 text-secondary mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome to Altitude Expert
          </h2>
          <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
            Sign in to access your aviation training materials
          </p>
        </div>
        
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#2563eb',
                  brandAccent: '#1d4ed8',
                }
              }
            }
          }}
          providers={['google']}
          view="sign_in"
          showLinks={true}
          redirectTo={`${window.location.origin}/`}
        />
      </div>
    </div>
  );
};

export default Login;