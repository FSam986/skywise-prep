import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export type QuestionStatus = 'correct' | 'wrong' | 'unanswered' | null;

export const useQuestionAttempts = (
  category: string | undefined,
  totalQuestions: number,
  questions: Array<{ id: number }>
) => {
  const [questionStatuses, setQuestionStatuses] = useState<QuestionStatus[]>(
    new Array(totalQuestions).fill(null)
  );

  useEffect(() => {
    const fetchAttempts = async () => {
      if (!category) return;

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        console.error('No user found');
        return;
      }

      const { data: attemptsData, error: attemptsError } = await supabase
        .from('question_attempts')
        .select('*')
        .eq('category', category)
        .eq('user_id', user.id);

      if (attemptsError) {
        console.error('Error fetching attempts:', attemptsError);
        toast.error('Failed to load attempts');
        return;
      }

      if (attemptsData) {
        const newStatuses = [...questionStatuses];
        attemptsData.forEach(attempt => {
          const questionIndex = questions.findIndex(q => q.id === attempt.question_id);
          if (questionIndex !== -1) {
            newStatuses[questionIndex] = attempt.status as QuestionStatus;
          }
        });
        setQuestionStatuses(newStatuses);
      }
    };

    fetchAttempts();
  }, [category, questions, totalQuestions]);

  return { questionStatuses, setQuestionStatuses };
};