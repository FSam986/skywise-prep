import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, BookOpen } from "lucide-react";

const PPLNavigationMaterial = () => {
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
            <h1 className="text-4xl font-bold mb-4">PPL Navigation</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Study material for basic navigation principles and techniques
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Introduction to Navigation</h2>
                <p>
                  Navigation is one of the fundamental skills required for safe and efficient flight operations. 
                  This section covers the essential concepts and techniques used in visual flight navigation.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Key Topics</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Map reading and chart interpretation</li>
                  <li>Dead reckoning navigation</li>
                  <li>Use of navigation computers</li>
                  <li>Flight planning and route selection</li>
                  <li>Position fixing techniques</li>
                  <li>Basic radio navigation</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Important Concepts</h3>
                <p>
                  Understanding these fundamental concepts is crucial for successful navigation:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>True, Magnetic, and Compass headings</li>
                  <li>Wind correction angles</li>
                  <li>Ground speed calculations</li>
                  <li>Time, speed, and distance calculations</li>
                  <li>VFR navigation procedures</li>
                </ul>
              </div>

              <div className="mt-8 flex justify-center">
                <Button 
                  size="lg"
                  onClick={() => navigate("/quiz/ppl-navigation")}
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

export default PPLNavigationMaterial;