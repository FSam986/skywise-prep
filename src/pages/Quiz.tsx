import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuizWidgets } from "@/components/widgets/QuizWidgets";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { QuizNavigation } from "@/components/quiz/QuizNavigation";

// Demo quiz data - in a real app, this would come from an API
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
  const isLastQuestion = currentQuestion === demoQuiz.questions.length - 1;

  return (
    <div className="min-h-screen bg-muted py-12 px-4">
      <div className="container max-w-3xl mx-auto">
        <QuizWidgets subject={category || ""} />
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{demoQuiz.title} - {category}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <QuizQuestion
              currentQuestion={currentQuestion}
              totalQuestions={demoQuiz.questions.length}
              question={question}
              selectedAnswer={selectedAnswer}
              showExplanation={showExplanation}
              onAnswerSelect={handleAnswerSelect}
            />
            
            <QuizNavigation
              showExplanation={showExplanation}
              isLastQuestion={isLastQuestion}
              onNextQuestion={handleNextQuestion}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;