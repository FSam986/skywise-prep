import { Button } from "@/components/ui/button";

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

      {showExplanation && !isLastQuestion && (
        <Button 
          className="w-full bg-secondary text-primary hover:bg-secondary/90"
          onClick={onNextQuestion}
        >
          Next Question
        </Button>
      )}
    </div>
  );
};