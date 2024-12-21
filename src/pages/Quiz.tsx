import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QuizWidgets } from "@/components/widgets/QuizWidgets";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { QuizNavigation } from "@/components/quiz/QuizNavigation";
import { MasteryTracker } from "@/components/quiz/MasteryTracker";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { useQuizProgress } from "@/hooks/useQuizProgress";
import { useQuestionAttempts } from "@/hooks/useQuestionAttempts";
import { ArrowLeft } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Difficulty = 'beginner' | 'intermediate' | 'expert';

// Demo quiz data - in a real app, this would come from an API
const generateQuizQuestions = (difficulty: Difficulty) => {
  const questions = [
    {
      id: 1,
      difficulty: 'beginner',
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
      difficulty: 'intermediate',
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
  ];

  return questions.filter(q => q.difficulty === difficulty).slice(0, 100);
};

const Quiz = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [difficulty, setDifficulty] = useState<Difficulty>('beginner');
  
  const questions = generateQuizQuestions(difficulty);
  
  const { progress, setProgress } = useQuizProgress(category, difficulty);
  const { questionStatuses, setQuestionStatuses } = useQuestionAttempts(
    category,
    questions.length,
    questions,
    difficulty
  );

  const handleAnswerSelect = async (index: number) => {
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

  const handleNextQuestion = async () => {
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
      setProgress(prev => ({
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

  const handleQuestionSelect = (index: number) => {
    if (!showExplanation || questionStatuses[currentQuestion] !== null) {
      setCurrentQuestion(index);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      toast.warning("Please answer the current question first");
    }
  };

  const handleDifficultyChange = (newDifficulty: Difficulty) => {
    setDifficulty(newDifficulty);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setQuestionStatuses(new Array(100).fill(null));
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-muted py-8 px-4">
        <div className="container max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <p className="text-center">No questions available for this difficulty level.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted py-8 px-4">
      <div className="container max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Index
          </Button>

          <Select value={difficulty} onValueChange={(value: Difficulty) => handleDifficultyChange(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="expert">Expert</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>{category} - {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</CardTitle>
            <QuizWidgets subject={category || ""} />
          </CardHeader>
          <CardContent className="space-y-6">
            <QuizQuestion
              currentQuestion={currentQuestion}
              totalQuestions={questions.length}
              question={questions[currentQuestion]}
              selectedAnswer={selectedAnswer}
              showExplanation={showExplanation}
              onAnswerSelect={handleAnswerSelect}
            />
            
            <QuizNavigation
              showExplanation={showExplanation}
              isLastQuestion={currentQuestion === questions.length - 1}
              onNextQuestion={handleNextQuestion}
              currentQuestion={currentQuestion}
              totalQuestions={questions.length}
              onQuestionSelect={handleQuestionSelect}
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
      </div>
    </div>
  );
};

export default Quiz;