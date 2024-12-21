import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "@/components/BackButton";

const PPLMeteorologicalMaterial = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted py-12">
      <div className="container">
        <BackButton />

        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">PPL Meteorology</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Study material for meteorological principles and techniques
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Introduction to Meteorology</h2>
                <p>
                  Meteorology is the study of the atmosphere and its phenomena. 
                  This section covers the essential concepts and techniques used in aviation meteorology.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Key Topics</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Weather patterns and systems</li>
                  <li>Understanding METARs and TAFs</li>
                  <li>Effects of weather on flight</li>
                  <li>Basic meteorological instruments</li>
                  <li>Flight planning with weather considerations</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Important Concepts</h3>
                <p>
                  Understanding these fundamental concepts is crucial for safe flight operations:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pressure systems and their effects</li>
                  <li>Temperature and humidity</li>
                  <li>Wind patterns and their impact on flight</li>
                  <li>Cloud types and their significance</li>
                  <li>Weather forecasting basics</li>
                </ul>
              </div>

              <div className="mt-8 flex justify-center">
                <Button 
                  size="lg"
                  onClick={() => navigate("/quiz/ppl-meteorology")}
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

export default PPLMeteorologicalMaterial;
