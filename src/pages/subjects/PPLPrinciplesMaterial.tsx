import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "@/components/BackButton";

const PPLPrinciplesMaterial = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted py-12">
      <div className="container">
        <BackButton />

        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">PPL Principles</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Study material for understanding the principles of flight
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Introduction to Principles of Flight</h2>
                <p>
                  Understanding the principles of flight is essential for any pilot. This section covers the fundamental concepts that govern how an aircraft flies.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Key Topics</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Lift and Drag</li>
                  <li>Thrust and Weight</li>
                  <li>Stability and Control</li>
                  <li>Flight Maneuvers</li>
                  <li>Performance Factors</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Important Concepts</h3>
                <p>
                  Mastering these concepts is crucial for successful flight operations:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Bernoulli's Principle</li>
                  <li>Newton's Laws of Motion</li>
                  <li>Center of Gravity</li>
                  <li>Control Surfaces and Their Functions</li>
                  <li>Effects of Weight and Balance</li>
                </ul>
              </div>

              <div className="mt-8 flex justify-center">
                <Button 
                  size="lg"
                  onClick={() => navigate("/quiz/ppl-principles")}
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

export default PPLPrinciplesMaterial;
