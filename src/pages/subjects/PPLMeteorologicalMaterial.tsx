import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, BookOpen } from "lucide-react";
import { MasteryTracker } from "@/components/quiz/MasteryTracker";
import { useQuizProgress } from "@/hooks/useQuizProgress";

const PPLMeteorologicalMaterial = () => {
  const navigate = useNavigate();
  const { progress } = useQuizProgress("ppl-meteorology");

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
            <h1 className="text-4xl font-bold mb-4">PPL Meteorology</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Study material for weather patterns and meteorological principles
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <div className="prose prose-slate max-w-none">
                    <h2 className="text-2xl font-semibold mb-4">Introduction to Aviation Weather</h2>
                    <p>
                      Understanding weather is crucial for safe flight operations. This section covers
                      the essential meteorological concepts that affect aviation.
                    </p>

                    <h3 className="text-xl font-semibold mt-6 mb-3">Key Topics</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Atmospheric pressure and altimetry</li>
                      <li>Cloud types and formation</li>
                      <li>Weather systems and fronts</li>
                      <li>Precipitation and thunderstorms</li>
                      <li>Wind patterns and effects</li>
                      <li>Weather reports and forecasts</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-6 mb-3">Important Concepts</h3>
                    <p>
                      Master these fundamental weather concepts for safe flight operations:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Reading METAR and TAF reports</li>
                      <li>Understanding weather charts</li>
                      <li>Identifying dangerous weather conditions</li>
                      <li>Weather minimums for VFR flight</li>
                      <li>Effects of weather on aircraft performance</li>
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

            <div className="lg:col-span-1">
              <div className="sticky top-6">
                <h2 className="text-2xl font-bold mb-4 text-center bg-white/50 py-2 rounded-lg">
                  Mastery Tracker: Progress to Perfection!
                </h2>
                <MasteryTracker
                  questionsCompleted={progress.questionsCompleted}
                  averageTime={progress.averageTime}
                  streakDays={progress.streakDays}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPLMeteorologicalMaterial;