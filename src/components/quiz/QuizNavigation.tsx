import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface QuizNavigationProps {
  showExplanation: boolean;
  isLastQuestion: boolean;
  onNextQuestion: () => void;
  currentQuestion: number;
  totalQuestions: number;
  onQuestionSelect: (index: number) => void;
  questionStatuses: Array<'correct' | 'wrong' | 'unanswered' | null>;
}

export const QuizNavigation = ({
  showExplanation,
  isLastQuestion,
  onNextQuestion,
  currentQuestion,
  totalQuestions,
  onQuestionSelect,
  questionStatuses,
}: QuizNavigationProps) => {
  const handleFinishQuiz = () => {
    const results = {
      correct: questionStatuses.filter(status => status === 'correct').length,
      wrong: questionStatuses.filter(status => status === 'wrong').length,
      unanswered: questionStatuses.filter(status => status === null || status === 'unanswered').length
    };

    const totalAnswered = results.correct + results.wrong;
    const score = totalAnswered > 0 ? Math.round((results.correct / totalAnswered) * 100) : 0;

    toast.success(
      <div className="space-y-2">
        <p className="font-semibold text-lg">Quiz Complete!</p>
        <div className="space-y-1">
          <p>Score: {score}%</p>
          <p className="text-green-600">Correct: {results.correct}</p>
          <p className="text-red-600">Wrong: {results.wrong}</p>
          <p className="text-yellow-600">Unanswered: {results.unanswered}</p>
        </div>
      </div>,
      {
        duration: 5000,
      }
    );
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: totalQuestions }, (_, i) => (
          <Button
            key={i}
            variant={currentQuestion === i ? "default" : "outline"}
            className={`w-full h-10 ${
              questionStatuses[i] === 'wrong' ? 'bg-red-100 hover:bg-red-200 border-red-300' :
              questionStatuses[i] === 'unanswered' ? 'bg-yellow-100 hover:bg-yellow-200 border-yellow-300' :
              questionStatuses[i] === 'correct' ? 'bg-green-100 hover:bg-green-200 border-green-300' :
              ''
            }`}
            onClick={() => onQuestionSelect(i)}
          >
            {i + 1}
          </Button>
        ))}
      </div>

      <div className="flex gap-2">
        {showExplanation && !isLastQuestion && (
          <Button 
            className="flex-1 bg-secondary text-primary hover:bg-secondary/90"
            onClick={onNextQuestion}
          >
            Next Question
          </Button>
        )}
        <Button 
          className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={handleFinishQuiz}
        >
          Finish Quiz
        </Button>
      </div>
    </div>
  );
};