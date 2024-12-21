import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

type Difficulty = 'beginner' | 'intermediate' | 'expert';

export const useQuizProgress = (category?: string, difficulty: Difficulty = 'beginner') => {
  const [progress, setProgress] = useState({
    questionsCompleted: 0,
    averageTime: 0,
    streakDays: 0
  });

  useEffect(() => {
    const fetchProgress = async () => {
      if (!category) return;

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('quiz_progress')
        .select('*')
        .eq('user_id', user.id)
        .eq('category', category)
        .eq('difficulty', difficulty)
        .single();

      if (error) {
        console.error('Error fetching progress:', error);
        return;
      }

      if (data) {
        setProgress({
          questionsCompleted: data.questions_completed || 0,
          averageTime: data.average_time || 0,
          streakDays: data.streak_days || 0
        });
      }
    };

    fetchProgress();
  }, [category, difficulty]);

  return { progress, setProgress };
};