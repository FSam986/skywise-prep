import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuizWidgets } from "@/components/widgets/QuizWidgets";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { QuizNavigation } from "@/components/quiz/QuizNavigation";
import { MasteryTracker } from "@/components/quiz/MasteryTracker";
import { supabase } from "@/integrations/supabase/client";

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
  const [progress, setProgress] = useState({
    questionsCompleted: 0,
    averageTime: 0,
    streakDays: 0
  });

  useEffect(() => {
    const fetchProgress = async () => {
      if (!category) return;
      
      const { data, error } = await supabase
        .from('quiz_progress')
        .select('*')
        .eq('category', category)
        .single();

      if (error) {
        console.error('Error fetching progress:', error);
        return;
      }

      if (data) {
        setProgress({
          questionsCompleted: data.questions_completed || 0,
          averageTime: data.average_time || 0,
          streakDays: data.streak_days || 0
        });
      }
    };

    fetchProgress();
  }, [category]);

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
  };

  const handleNextQuestion = async () => {
    if (!category) return;

    // Update progress in Supabase
    const { error } = await supabase
      .from('quiz_progress')
      .upsert({
        category,
        questions_completed: progress.questionsCompleted + 1,
        average_time: progress.averageTime, // You might want to update this based on actual time tracking
        last_quiz_date: new Date().toISOString()
      });

    if (error) {
      console.error('Error updating progress:', error);
    } else {
      setProgress(prev => ({
        ...prev,
        questionsCompleted: prev.questionsCompleted + 1
      }));
    }

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
        
        <div className="space-y-6">
          <MasteryTracker
            questionsCompleted={progress.questionsCompleted}
            averageTime={progress.averageTime}
            streakDays={progress.streakDays}
          />

          <Card>
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
    </div>
  );
};

export default Quiz;
