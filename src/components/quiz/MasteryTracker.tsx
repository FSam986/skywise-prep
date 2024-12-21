import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Plane, PlaneLanding, Target, Compass } from "lucide-react";

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
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [level, setLevel] = useState("Ground School");
  
  // Calculate progress based on completed questions
  const progress = totalQuestions > 0 ? Math.min((questionsCompleted / totalQuestions) * 100, 100) : 0;

  useEffect(() => {
    const fetchTotalQuestions = async () => {
      if (!category) return;

      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        console.error('No user found');
        return;
      }

      // For now, we'll set a default total based on category
      // In a real app, this would come from your questions database
      let total = 10; // Default value
      switch (category) {
        case 'ppl-navigation':
          total = 20;
          break;
        case 'ppl-principles':
          total = 15;
          break;
        // Add more categories as needed
        default:
          total = 10;
      }
      
      setTotalQuestions(total);
      console.log('Total questions set to:', total);
    };

    fetchTotalQuestions();
  }, [category]);

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
    if (progress < 33) return <Plane className="h-5 w-5 text-blue-400" />;
    if (progress < 66) return <PlaneLanding className="h-5 w-5 text-blue-500" />;
    if (progress < 100) return <Compass className="h-5 w-5 text-blue-600" />;
    return <Target className="h-5 w-5 text-blue-700" />;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-4 border border-slate-100">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-slate-800">Progress Tracker</h3>
          {getLevelIcon()}
        </div>
        {streakDays > 0 && (
          <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
            <Target className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-700">{streakDays} day streak</span>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Progress</span>
          <span className="font-medium text-slate-800">{Math.round(progress)}%</span>
        </div>
        <Progress 
          value={progress} 
          className="h-2 bg-slate-100"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-50 p-3 rounded-lg space-y-1">
          <p className="text-sm text-slate-500">Current Level</p>
          <p className="font-medium text-slate-800">{level}</p>
        </div>
        <div className="bg-slate-50 p-3 rounded-lg space-y-1">
          <p className="text-sm text-slate-500">Questions</p>
          <p className="font-medium text-slate-800">{questionsCompleted} / {totalQuestions}</p>
        </div>
        <div className="bg-slate-50 p-3 rounded-lg space-y-1">
          <p className="text-sm text-slate-500">Avg. Response</p>
          <p className="font-medium text-slate-800">{averageTime.toFixed(1)}s</p>
        </div>
        <div className="bg-slate-50 p-3 rounded-lg space-y-1">
          <p className="text-sm text-slate-500">Accuracy</p>
          <p className="font-medium text-slate-800">
            {totalQuestions > 0 ? Math.round((questionsCompleted / totalQuestions) * 100) : 0}%
          </p>
        </div>
      </div>

      {progress >= 100 && (
        <div className="text-center py-2 px-4 bg-blue-50 text-blue-700 font-medium rounded-full">
          Captain Status Achieved
        </div>
      )}
    </div>
  );
};