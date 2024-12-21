import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuizQuestion } from "./QuizQuestion";
import { QuizNavigation } from "./QuizNavigation";
import { MasteryTracker } from "./MasteryTracker";
import type { Difficulty } from "@/hooks/useQuizState";

interface QuizContentProps {
  category: string | undefined;
  difficulty: Difficulty;
  currentQuestion: number;
  questions: any[];
  selectedAnswer: number | null;
  showExplanation: boolean;
  questionStatuses: Array<'correct' | 'wrong' | 'unanswered' | null>;
  progress: {
    questionsCompleted: number;
    averageTime: number;
    streakDays: number;
  };
  onAnswerSelect: (index: number) => void;
  onNextQuestion: () => void;
  onQuestionSelect: (index: number) => void;
}

export const QuizContent = ({
  category,
  difficulty,
  currentQuestion,
  questions,
  selectedAnswer,
  showExplanation,
  questionStatuses,
  progress,
  onAnswerSelect,
  onNextQuestion,
  onQuestionSelect,
}: QuizContentProps) => {
  if (questions.length === 0) {
    return (
      <Card>
        <CardContent className="p-6">
          <p className="text-center">No questions available for this difficulty level.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle>{category} - {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <QuizQuestion
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
            question={questions[currentQuestion]}
            selectedAnswer={selectedAnswer}
            showExplanation={showExplanation}
            onAnswerSelect={onAnswerSelect}
          />
          
          <QuizNavigation
            showExplanation={showExplanation}
            isLastQuestion={currentQuestion === questions.length - 1}
            onNextQuestion={onNextQuestion}
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
            onQuestionSelect={onQuestionSelect}
            questionStatuses={questionStatuses}
          />
        </CardContent>
      </Card>

      <div className="lg:max-w-md mx-auto">
        <MasteryTracker
          questionsCompleted={progress.questionsCompleted}
          averageTime={progress.averageTime}
          streakDays={progress.streakDays}
        />
      </div>
    </>
  );
};