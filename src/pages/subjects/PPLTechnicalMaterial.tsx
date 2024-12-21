import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "@/components/BackButton";

const PPLTechnicalMaterial = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted py-12">
      <div className="container">
        <BackButton />

        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">PPL Technical</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Study material for technical principles and techniques
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Introduction to Technical Principles</h2>
                <p>
                  Understanding technical principles is essential for safe and efficient flight operations. 
                  This section covers the fundamental concepts and techniques used in aviation.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Key Topics</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Aircraft systems and components</li>
                  <li>Performance calculations</li>
                  <li>Weight and balance considerations</li>
                  <li>Aircraft limitations and operating procedures</li>
                  <li>Emergency procedures and safety protocols</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Important Concepts</h3>
                <p>
                  Mastering these concepts is crucial for successful technical operations:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Understanding aircraft performance charts</li>
                  <li>Weight and balance calculations</li>
                  <li>Aircraft systems operation and limitations</li>
                  <li>Emergency procedures and checklists</li>
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
