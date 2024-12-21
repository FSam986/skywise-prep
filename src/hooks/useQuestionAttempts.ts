import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

type Difficulty = 'beginner' | 'intermediate' | 'expert';

export const useQuestionAttempts = (
  category?: string,
  totalQuestions: number = 0,
  questions: any[] = [],
  difficulty: Difficulty = 'beginner'
) => {
  const [questionStatuses, setQuestionStatuses] = useState<Array<'correct' | 'wrong' | 'unanswered' | null>>(
    new Array(totalQuestions).fill(null)
  );

  useEffect(() => {
    const fetchAttempts = async () => {
      if (!category || questions.length === 0) return;

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: attempts, error } = await supabase
        .from('question_attempts')
        .select('*')
        .eq('user_id', user.id)
        .eq('category', category)
        .eq('difficulty', difficulty);

      if (error) {
        console.error('Error fetching attempts:', error);
        return;
      }

      if (attempts) {
        const newStatuses = [...questionStatuses];
        attempts.forEach(attempt => {
          const questionIndex = questions.findIndex(q => q.id === attempt.question_id);
          if (questionIndex !== -1) {
            newStatuses[questionIndex] = attempt.status as 'correct' | 'wrong';
          }
        });
        setQuestionStatuses(newStatuses);
      }
    };

    fetchAttempts();
  }, [category, questions, difficulty]);

  return { questionStatuses, setQuestionStatuses };
};