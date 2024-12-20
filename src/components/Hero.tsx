import { PlaneTakeoff } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-primary py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl text-center">
          <div className="flex justify-center mb-8">
            <PlaneTakeoff className="h-16 w-16 text-secondary animate-float" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Master Your Aviation Journey
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Comprehensive study preparation for PPL, CPL, ATPL, and aviation interviews.
            Take your aviation career to new heights with our expert-crafted content.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button 
              className="bg-secondary text-primary hover:bg-secondary/90"
              onClick={() => navigate("/login")}
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              className="bg-black text-white border-white hover:bg-black/90 font-semibold"
              onClick={() => navigate("/pricing")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};