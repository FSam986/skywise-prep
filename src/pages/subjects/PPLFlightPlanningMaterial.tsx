import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, BookOpen } from "lucide-react";

const PPLFlightPlanningMaterial = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted py-12">
      <div className="container">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/ppl-subjects")}
          className="mb-6"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Subjects
        </Button>

        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">PPL Flight Planning</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Study material for flight planning fundamentals
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Introduction to Flight Planning</h2>
                <p>
                  Flight planning is a crucial skill for pilots, ensuring safe and efficient flight operations.
                  This section covers the essential aspects of flight planning for private pilots.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Key Topics</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Weather interpretation and planning</li>
                  <li>Fuel calculations</li>
                  <li>Route selection</li>
                  <li>Weight and balance calculations</li>
                  <li>Performance calculations</li>
                  <li>NOTAMs and flight information</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Important Concepts</h3>
                <p>
                  Understanding these fundamental concepts is essential for effective flight planning:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fuel requirements and reserves</li>
                  <li>Aircraft performance limitations</li>
                  <li>Weather minimums</li>
                  <li>Alternate airport requirements</li>
                  <li>Flight plan filing procedures</li>
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