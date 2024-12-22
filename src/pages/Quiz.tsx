import { useParams } from "react-router-dom";
import { useQuizProgress } from "@/hooks/useQuizProgress";
import { useQuestionAttempts } from "@/hooks/useQuestionAttempts";
import { useQuizState } from "@/hooks/useQuizState";
import { QuizHeader } from "@/components/quiz/QuizHeader";
import { QuizContent } from "@/components/quiz/QuizContent";
import { useState, useEffect } from "react";
import type { Difficulty } from "@/hooks/useQuizState";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const Quiz = () => {
  const { subject, chapter } = useParams();
  const [difficulty, setDifficulty] = useState<Difficulty>('beginner');
  const [questions, setQuestions] = useState<any[]>([]);
  
  const { progress, setProgress } = useQuizProgress(subject, difficulty);
  const { questionStatuses, setQuestionStatuses } = useQuestionAttempts(
    subject,
    100,
    [],
    difficulty
  );

  useEffect(() => {
    const fetchQuestions = async () => {
      console.log('Fetching questions for:', { subject, chapter, difficulty });
      
      const { data, error } = await supabase
        .from('chapter_questions')
        .select('*')
        .eq('subject', subject)
        .eq('chapter_number', chapter)
        .eq('difficulty', difficulty);

      if (error) {
        console.error('Error fetching questions:', error);
        toast.error('Failed to load questions');
        return;
      }

      console.log('Fetched questions:', data);
      setQuestions(data || []);
    };

    fetchQuestions();
  }, [subject, chapter, difficulty]);

  const {
    currentQuestion,
    selectedAnswer,
    showExplanation,
    handleAnswerSelect,
    handleNextQuestion,
    handleQuestionSelect,
    handleDifficultyChange,
  } = useQuizState(subject, questions);

  return (
    <div className="min-h-screen bg-muted py-8 px-4">
      <div className="container max-w-6xl mx-auto space-y-6">
        <QuizHeader
          category={subject}
          difficulty={difficulty}
          onDifficultyChange={(newDifficulty) => {
            setDifficulty(newDifficulty);
            handleDifficultyChange(newDifficulty, setQuestionStatuses);
          }}
        />

        <QuizContent
          category={subject}
          difficulty={difficulty}
          currentQuestion={currentQuestion}
          questions={questions}
          selectedAnswer={selectedAnswer}
          showExplanation={showExplanation}
          questionStatuses={questionStatuses}
          progress={progress}
          onAnswerSelect={(index) => 
            handleAnswerSelect(index, questionStatuses, setQuestionStatuses)
          }
          onNextQuestion={() => handleNextQuestion(progress, setProgress)}
          onQuestionSelect={(index) => 
            handleQuestionSelect(index, questionStatuses)
          }
        />
      </div>
    </div>
  );
};

export default Quiz;