import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Flame } from "lucide-react";

interface MasteryTrackerProps {
  questionsCompleted: number;
  averageTime: number;
  streakDays: number;
}

export const MasteryTracker = ({
  questionsCompleted,
  averageTime,
  streakDays,
}: MasteryTrackerProps) => {
  const { category } = useParams();
  const [totalQuestions, setTotalQuestions] = useState(100); // Default value
  const [level, setLevel] = useState("Beginner");
  const progress = Math.min((questionsCompleted / totalQuestions) * 100, 100);

  useEffect(() => {
    // Update mastery level based on progress
    if (progress < 33) {
      setLevel("Beginner");
    } else if (progress < 66) {
      setLevel("Intermediate");
    } else {
      setLevel("Advanced");
    }
  }, [progress]);

  return (
    <div className="bg-card p-6 rounded-lg shadow-lg space-y-4 animate-fade-in">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Mastery Tracker</h3>
        {streakDays > 0 && (
          <div className="flex items-center gap-1">
            <Flame className="h-5 w-5 text-orange-500 animate-pulse" />
            <span className="text-sm">{streakDays} day streak!</span>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Progress to Mastery</span>
          <span className="font-medium">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="space-y-1">
          <p className="text-muted-foreground">Current Level</p>
          <p className="font-medium">{level}</p>
        </div>
        <div className="space-y-1">
          <p className="text-muted-foreground">Questions Completed</p>
          <p className="font-medium">{questionsCompleted} / {totalQuestions}</p>
        </div>
        <div className="space-y-1">
          <p className="text-muted-foreground">Average Time</p>
          <p className="font-medium">{averageTime.toFixed(1)}s per question</p>
        </div>
      </div>

      {progress >= 100 && (
        <div className="text-center text-green-600 font-medium animate-bounce">
          🎉 Mastery Unlocked! 🎉
        </div>
      )}
    </div>
  );
};