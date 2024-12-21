import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

export type Difficulty = 'beginner' | 'intermediate' | 'expert';

export const useQuizState = (category: string | undefined, questions: any[]) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [difficulty, setDifficulty] = useState<Difficulty>('beginner');

  const handleAnswerSelect = async (index: number, questionStatuses: Array<'correct' | 'wrong' | 'unanswered' | null>, setQuestionStatuses: (statuses: Array<'correct' | 'wrong' | 'unanswered' | null>) => void) => {
    setSelectedAnswer(index);
    setShowExplanation(true);

    const question = questions[currentQuestion];
    const status = index === question.correctAnswer ? 'correct' : 'wrong';
    
    const newStatuses = [...questionStatuses];
    newStatuses[currentQuestion] = status;
    setQuestionStatuses(newStatuses);

    if (category) {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { error } = await supabase
          .from('question_attempts')
          .upsert({
            user_id: user.id,
            category,
            question_id: question.id,
            status,
            difficulty
          }, {
            onConflict: 'user_id,category,question_id'
          });

        if (error) {
          console.error('Error saving attempt:', error);
          toast.error('Failed to save attempt');
        }
      }
    }
  };

  const handleNextQuestion = async (
    progress: { questionsCompleted: number; averageTime: number; streakDays: number },
    setProgress: (progress: any) => void
  ) => {
    if (!category) return;

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      console.error('No user found');
      return;
    }

    const { error } = await supabase
      .from('quiz_progress')
      .upsert({
        user_id: user.id,
        category,
        questions_completed: progress.questionsCompleted + 1,
        average_time: progress.averageTime,
        last_quiz_date: new Date().toISOString(),
        difficulty
      }, {
        onConflict: 'user_id,category'
      });

    if (error) {
      console.error('Error updating progress:', error);
      toast.error('Failed to update progress');
    } else {
      setProgress((prev: any) => ({
        ...prev,
        questionsCompleted: prev.questionsCompleted + 1
      }));
      toast.success('Progress updated');
    }

    setSelectedAnswer(null);
    setShowExplanation(false);
    setCurrentQuestion((prev) => 
      prev < questions.length - 1 ? prev + 1 : prev
    );
  };

  const handleQuestionSelect = (index: number, questionStatuses: Array<'correct' | 'wrong' | 'unanswered' | null>) => {
    if (!showExplanation || questionStatuses[currentQuestion] !== null) {
      setCurrentQuestion(index);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      toast.warning("Please answer the current question first");
    }
  };

  const handleDifficultyChange = (
    newDifficulty: Difficulty,
    setQuestionStatuses: (statuses: Array<'correct' | 'wrong' | 'unanswered' | null>) => void
  ) => {
    setDifficulty(newDifficulty);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setQuestionStatuses(new Array(100).fill(null));
  };

  return {
    currentQuestion,
    selectedAnswer,
    showExplanation,
    difficulty,
    handleAnswerSelect,
    handleNextQuestion,
    handleQuestionSelect,
    handleDifficultyChange,
  };
};