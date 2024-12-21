import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Plane, PlaneLanding, Target, Trophy, Compass } from "lucide-react";

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
  const [level, setLevel] = useState("Ground School");
  const progress = Math.min((questionsCompleted / totalQuestions) * 100, 100);

  useEffect(() => {
    // Update mastery level based on progress
    if (progress < 33) {
      setLevel("Ground School");
    } else if (progress < 66) {
      setLevel("First Solo");
    } else if (progress < 100) {
      setLevel("Cross-Country");
    } else {
      setLevel("Captain");
    }
  }, [progress]);

  const getLevelIcon = () => {
    if (progress < 33) return <Plane className="h-6 w-6 text-blue-500" />;
    if (progress < 66) return <PlaneLanding className="h-6 w-6 text-green-500" />;
    if (progress < 100) return <Compass className="h-6 w-6 text-purple-500" />;
    return <Trophy className="h-6 w-6 text-yellow-500 animate-bounce" />;
  };

  return (
    <div className="bg-gradient-to-br from-sky-50 to-indigo-50 p-6 rounded-lg shadow-lg space-y-4 animate-fade-in border border-sky-100">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-slate-800">Flight Progress</h3>
          {getLevelIcon()}
        </div>
        {streakDays > 0 && (
          <div className="flex items-center gap-2 bg-amber-50 px-3 py-1 rounded-full">
            <Target className="h-5 w-5 text-amber-500 animate-pulse" />
            <span className="text-sm font-medium text-amber-700">{streakDays} day streak!</span>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Progress to Certification</span>
          <span className="font-medium text-slate-800">{Math.round(progress)}%</span>
        </div>
        <Progress 
          value={progress} 
          className="h-2.5 bg-sky-100" 
          indicatorClassName="bg-gradient-to-r from-sky-500 to-indigo-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/50 p-3 rounded-lg space-y-1 backdrop-blur-sm">
          <p className="text-sm text-slate-500">Current Level</p>
          <p className="font-medium text-slate-800">{level}</p>
        </div>
        <div className="bg-white/50 p-3 rounded-lg space-y-1 backdrop-blur-sm">
          <p className="text-sm text-slate-500">Flight Hours</p>
          <p className="font-medium text-slate-800">{questionsCompleted} / {totalQuestions}</p>
        </div>
        <div className="bg-white/50 p-3 rounded-lg space-y-1 backdrop-blur-sm">
          <p className="text-sm text-slate-500">Response Time</p>
          <p className="font-medium text-slate-800">{averageTime.toFixed(1)}s avg.</p>
        </div>
        <div className="bg-white/50 p-3 rounded-lg space-y-1 backdrop-blur-sm">
          <p className="text-sm text-slate-500">Accuracy Rate</p>
          <p className="font-medium text-slate-800">{Math.round((questionsCompleted / totalQuestions) * 100)}%</p>
        </div>
      </div>

      {progress >= 100 && (
        <div className="text-center py-2 px-4 bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-medium rounded-full animate-bounce">
          🎉 Captain Status Achieved! 🎉
        </div>
      )}
    </div>
  );
};