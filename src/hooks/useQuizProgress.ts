import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface QuizProgress {
  questionsCompleted: number;
  averageTime: number;
  streakDays: number;
}

export const useQuizProgress = (category: string | undefined) => {
  const [progress, setProgress] = useState<QuizProgress>({
    questionsCompleted: 0,
    averageTime: 0,
    streakDays: 0
  });

  useEffect(() => {
    const fetchProgress = async () => {
      if (!category) return;

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        console.error('No user found');
        return;
      }

      const { data: progressData, error: progressError } = await supabase
        .from('quiz_progress')
        .select('*')
        .eq('category', category)
        .eq('user_id', user.id)
        .maybeSingle();

      if (progressError) {
        console.error('Error fetching progress:', progressError);
        toast.error('Failed to load progress');
        return;
      }

      if (progressData) {
        setProgress({
          questionsCompleted: progressData.questions_completed || 0,
          averageTime: progressData.average_time || 0,
          streakDays: progressData.streak_days || 0
        });
      }
    };

    fetchProgress();
  }, [category]);

  return { progress, setProgress };
};