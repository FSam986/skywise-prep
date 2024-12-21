import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "@/components/BackButton";

const PPLAirLawMaterial = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted py-12">
      <div className="container">
        <BackButton />

        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">PPL Air Law</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Study material for understanding air law and regulations
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Introduction to Air Law</h2>
                <p>
                  Air law encompasses the regulations and standards that govern aviation operations. 
                  This section covers the essential laws and regulations that pilots must adhere to.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Key Topics</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>International aviation regulations</li>
                  <li>National airspace system</li>
                  <li>Flight rules and regulations</li>
                  <li>Aircraft operation standards</li>
                  <li>Licensing and certification requirements</li>
                  <li>Safety and security regulations</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Important Concepts</h3>
                <p>
                  Understanding these fundamental concepts is crucial for compliance and safety:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Air traffic control procedures</li>
                  <li>Flight planning regulations</li>
                  <li>Emergency procedures</li>
                  <li>Aircraft maintenance requirements</li>
                  <li>Legal responsibilities of pilots</li>
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
