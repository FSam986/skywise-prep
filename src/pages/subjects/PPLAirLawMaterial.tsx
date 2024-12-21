import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, BookOpen } from "lucide-react";

const PPLAirLawMaterial = () => {
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
            <h1 className="text-4xl font-bold mb-4">PPL Air Law</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Study material for aviation regulations and procedures
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Introduction to Aviation Law</h2>
                <p>
                  Understanding aviation regulations is crucial for safe and legal flight operations.
                  This section covers the essential aspects of air law for private pilots.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Key Topics</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Rules of the air</li>
                  <li>Airspace classification</li>
                  <li>Flight rules (VFR/IFR)</li>
                  <li>Pilot responsibilities</li>
                  <li>Aircraft documentation</li>
                  <li>Airport operations</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Important Concepts</h3>
                <p>
                  Master these fundamental legal concepts:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Right of way rules</li>
                  <li>Minimum safe altitudes</li>
                  <li>Flight plan requirements</li>
                  <li>Emergency procedures</li>
                  <li>Pilot licensing requirements</li>
                </ul>
              </div>

              <div className="mt-8 flex justify-center">
                <Button 
                  size="lg"
                  onClick={() => navigate("/quiz/ppl-air-law")}
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

export default PPLAirLawMaterial;