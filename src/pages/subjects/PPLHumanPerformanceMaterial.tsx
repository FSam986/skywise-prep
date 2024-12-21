import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, BookOpen } from "lucide-react";

const PPLHumanPerformanceMaterial = () => {
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
            <h1 className="text-4xl font-bold mb-4">PPL Human Performance</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Study material for human factors in aviation
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Introduction to Human Factors</h2>
                <p>
                  Understanding human performance and limitations is crucial for safe flight operations.
                  This section covers the essential aspects of human factors in aviation.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Key Topics</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Basic human physiology</li>
                  <li>Effects of altitude</li>
                  <li>Vision and visual illusions</li>
                  <li>Decision making processes</li>
                  <li>Stress and fatigue management</li>
                  <li>Spatial disorientation</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Important Concepts</h3>
                <p>
                  Understanding these fundamental concepts is crucial for safe flight:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Hypoxia and its effects</li>
                  <li>Night vision adaptation</li>
                  <li>Pilot fitness and health</li>
                  <li>Risk management</li>
                  <li>Communication and CRM</li>
                </ul>
              </div>

              <div className="mt-8 flex justify-center">
                <Button 
                  size="lg"
                  onClick={() => navigate("/quiz/ppl-human-performance")}
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

export default PPLHumanPerformanceMaterial;