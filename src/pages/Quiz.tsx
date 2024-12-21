import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NotesWidget } from "@/components/NotesWidget";
import { CalculatorWidget } from "@/components/CalculatorWidget";
import { FlightComputerWidget } from "@/components/FlightComputerWidget";

// Demo quiz data
const demoQuiz = {
  title: "Basic Aviation Knowledge",
  questions: [
    {
      id: 1,
      question: "What does PPL stand for?",
      options: [
        "Personal Pilot License",
        "Private Pilot License",
        "Professional Pilot License",
        "Primary Pilot License"
      ],
      correctAnswer: 1,
      explanation: "PPL stands for Private Pilot License, which is the first step in becoming a licensed pilot."
    },
    {
      id: 2,
      question: "What is the primary purpose of ailerons?",
      options: [
        "Control pitch",
        "Control roll",
        "Control yaw",
        "Control speed"
      ],
      correctAnswer: 1,
      explanation: "Ailerons are control surfaces that create roll by changing the lift on the wings."
    }
  ]
};

const Quiz = () => {
  const { category } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setCurrentQuestion((prev) => 
      prev < demoQuiz.questions.length - 1 ? prev + 1 : prev
    );
  };

  const question = demoQuiz.questions[currentQuestion];

  return (
    <div className="min-h-screen bg-muted py-12 px-4">
      <div className="container max-w-3xl mx-auto">
        <div className="flex justify-end gap-2 mb-4">
          <NotesWidget subject={category || ""} />
          <CalculatorWidget />
          <FlightComputerWidget />
        </div>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{demoQuiz.title} - {category}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-xl font-medium">
              Question {currentQuestion + 1} of {demoQuiz.questions.length}
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
                  onClick={() => handleAnswerSelect(index)}
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

            {showExplanation && currentQuestion < demoQuiz.questions.length - 1 && (
              <Button 
                className="w-full bg-secondary text-primary hover:bg-secondary/90"
                onClick={handleNextQuestion}
              >
                Next Question
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;
