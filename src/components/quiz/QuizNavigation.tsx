import { Button } from "@/components/ui/button";

interface QuizNavigationProps {
  showExplanation: boolean;
  isLastQuestion: boolean;
  onNextQuestion: () => void;
}

export const QuizNavigation = ({
  showExplanation,
  isLastQuestion,
  onNextQuestion,
}: QuizNavigationProps) => {
  return (
    <>
      {showExplanation && !isLastQuestion && (
        <Button 
          className="w-full bg-secondary text-primary hover:bg-secondary/90"
          onClick={onNextQuestion}
        >
          Next Question
        </Button>
      )}
    </>
  );
};