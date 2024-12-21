import { Button } from "@/components/ui/button";

interface QuizQuestionProps {
  currentQuestion: number;
  totalQuestions: number;
  question: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  };
  selectedAnswer: number | null;
  showExplanation: boolean;
  onAnswerSelect: (index: number) => void;
}

export const QuizQuestion = ({
  currentQuestion,
  totalQuestions,
  question,
  selectedAnswer,
  showExplanation,
  onAnswerSelect,
}: QuizQuestionProps) => {
  return (
    <div className="space-y-6">
      <div className="text-xl font-medium">
        Question {currentQuestion + 1} of {totalQuestions}
      </div>
      
      <div className="text-lg mb-4">{question.question}</div>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant={selectedAnswer === index ? 
              (index === question.correctAnswer ? "default" : "destructive") : 
              "outline"
            }
            className="w-full justify-start text-left h-auto py-4 px-6"
            onClick={() => onAnswerSelect(index)}
            disabled={showExplanation}
          >
            {option}
          </Button>
        ))}
      </div>

      {showExplanation && (
        <div className={`p-4 rounded-lg ${
          selectedAnswer === question.correctAnswer ? 
          "bg-green-100 text-green-800" : 
          "bg-red-100 text-red-800"
        }`}>
          <p className="font-medium">
            {selectedAnswer === question.correctAnswer ? "Correct!" : "Incorrect"}
          </p>
          <p className="mt-2">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};