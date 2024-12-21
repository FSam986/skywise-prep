import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PlaneTakeoff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      console.log("Current session on login page:", session);
      if (error) {
        console.error("Error checking session:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to check authentication status"
        });
        return;
      }
      if (session) {
        console.log("User is already logged in, redirecting to dashboard");
        navigate("/");
      }
    };

    checkUser();

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", event, session);
      
      if (event === 'SIGNED_IN' && session) {
        console.log("User signed in successfully, redirecting to dashboard");
        toast({
          title: "Success",
          description: "Successfully signed in"
        });
        navigate("/");
      } else if (event === 'SIGNED_OUT') {
        console.log("User signed out");
        toast({
          title: "Signed out",
          description: "You have been signed out"
        });
      } else if (event === 'USER_UPDATED') {
        console.log("User profile updated");
      } else if (event === 'PASSWORD_RECOVERY') {
        console.log("Password recovery event detected");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, toast]);

  // Get the site URL for redirects
  const getSiteUrl = () => {
    const url = window.location.origin;
    console.log("Site URL for auth redirects:", url);
    return url;
  };

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
          redirectTo={getSiteUrl()}
          onlyThirdPartyProviders={false}
          showLinks={true}
          magicLink={true}
        />
      </div>
    </div>
  );
};

export default Login;