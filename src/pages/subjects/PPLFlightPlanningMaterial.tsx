import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "@/components/BackButton";

const PPLFlightPlanningMaterial = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted py-12">
      <div className="container">
        <BackButton />

        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">PPL Flight Planning</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Study material for flight planning principles and techniques
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Introduction to Flight Planning</h2>
                <p>
                  Flight planning is a critical aspect of aviation that ensures safe and efficient flight operations. 
                  This section covers the essential concepts and techniques used in flight planning.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Key Topics</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Understanding aeronautical charts</li>
                  <li>Route selection and optimization</li>
                  <li>Weather considerations</li>
                  <li>Fuel calculations</li>
                  <li>Weight and balance calculations</li>
                  <li>Flight plan filing procedures</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Important Concepts</h3>
                <p>
                  Mastering these concepts is crucial for effective flight planning:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>VFR vs. IFR flight planning</li>
                  <li>Airspace classifications</li>
                  <li>NOTAMs and their significance</li>
                  <li>Emergency procedures and alternate airports</li>
                  <li>Flight planning software tools</li>
                </ul>
              </div>

              <div className="mt-8 flex justify-center">
                <Button 
                  size="lg"
                  onClick={() => navigate("/quiz/ppl-flight-planning")}
                  className="gap-2"
                >
                  <BookOpen className="h-5 w-5" />
                  Start Practice Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PPLFlightPlanningMaterial;