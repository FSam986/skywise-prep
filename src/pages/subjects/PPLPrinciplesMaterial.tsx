import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, BookOpen } from "lucide-react";

const PPLPrinciplesMaterial = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted py-12">
      <div className="container">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Back
        </Button>

        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">PPL Principles of Flight</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Study material for basic aerodynamics and flight principles
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Introduction to Aerodynamics</h2>
                <p>
                  Understanding the principles of flight is fundamental to becoming a pilot.
                  This section covers the essential concepts of aerodynamics and aircraft control.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Key Topics</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Forces acting on an aircraft</li>
                  <li>Lift and drag</li>
                  <li>Stability and control</li>
                  <li>Stalls and spins</li>
                  <li>Flight controls</li>
                  <li>Aircraft performance</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Important Concepts</h3>
                <p>
                  Master these fundamental principles for safe flight:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Bernoulli's principle</li>
                  <li>Angle of attack</li>
                  <li>Wing design and airfoils</li>
                  <li>Aircraft stability</li>
                  <li>Control surfaces</li>
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