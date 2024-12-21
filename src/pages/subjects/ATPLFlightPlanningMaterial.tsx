import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ATPLFlightPlanningMaterial = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted py-24">
      <div className="container">
        <div className="mb-6">
          <BackButton />
        </div>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">ATPL Flight Planning</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <h2>Introduction to ATPL Flight Planning</h2>
            <p>
              Airline Transport Pilot License (ATPL) flight planning involves comprehensive
              planning for commercial air transport operations.
            </p>

            <h2>Key Topics</h2>
            <ul>
              <li>Flight Planning for Air Transport Operations</li>
              <li>Fuel Planning and Management</li>
              <li>ETOPS Considerations</li>
              <li>Advanced Performance Calculations</li>
            </ul>

            <div className="mt-8">
              <Button 
                onClick={() => navigate("/quiz/atpl-flight-planning")}
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

export default ATPLFlightPlanningMaterial;