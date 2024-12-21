import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CPLNavigationMaterial = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted py-24">
      <div className="container">
        <div className="mb-6">
          <BackButton />
        </div>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">CPL Navigation</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <h2>Introduction to CPL Navigation</h2>
            <p>
              Commercial Pilot License (CPL) navigation builds upon PPL navigation concepts
              and introduces more advanced techniques required for commercial operations.
            </p>

            <h2>Key Topics</h2>
            <ul>
              <li>Advanced Flight Planning</li>
              <li>Navigation Systems and Equipment</li>
              <li>Route Planning for Commercial Operations</li>
              <li>Weather Considerations in Navigation</li>
            </ul>

            <div className="mt-8">
              <Button 
                onClick={() => navigate("/quiz/cpl-navigation")}
                className="w-full"
              >
                Start Practice Quiz
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CPLNavigationMaterial;