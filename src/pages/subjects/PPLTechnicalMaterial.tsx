import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, BookOpen } from "lucide-react";

const PPLTechnicalMaterial = () => {
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
            <h1 className="text-4xl font-bold mb-4">PPL Aircraft Technical</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Study material for aircraft systems and technical knowledge
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Introduction to Aircraft Systems</h2>
                <p>
                  Understanding aircraft systems is essential for safe operation.
                  This section covers the fundamental technical aspects of aircraft.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Key Topics</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Powerplant systems</li>
                  <li>Electrical systems</li>
                  <li>Fuel systems</li>
                  <li>Landing gear</li>
                  <li>Flight instruments</li>
                  <li>Aircraft structure</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Important Concepts</h3>
                <p>
                  Master these technical concepts for safe aircraft operation:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Engine operation principles</li>
                  <li>Aircraft systems maintenance</li>
                  <li>Instrument interpretation</li>
                  <li>Emergency procedures</li>
                  <li>System failures and troubleshooting</li>
                </ul>
              </div>

              <div className="mt-8 flex justify-center">
                <Button 
                  size="lg"
                  onClick={() => navigate("/quiz/ppl-technical")}
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

export default PPLTechnicalMaterial;