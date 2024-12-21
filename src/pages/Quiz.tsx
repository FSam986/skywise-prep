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

// Quiz questions data
const generateQuizQuestions = (category: string | undefined, difficulty: Difficulty) => {
  if (!category) return [];
  
  // CPL Meteorology specific questions
  if (category === 'cpl-meteorology') {
    const questions = [
      {
        id: 1,
        difficulty: 'beginner',
        question: "What is the primary gas in the Earth's atmosphere by volume?",
        options: [
          "Oxygen",
          "Nitrogen",
          "Argon",
          "Carbon dioxide"
        ],
        correctAnswer: 1,
        explanation: "As covered in the Atmospheric Composition section, Nitrogen makes up 78% of the atmosphere by volume, making it the primary gas."
      },
      {
        id: 2,
        difficulty: 'beginner',
        question: "At what height does the tropopause typically occur at the equator?",
        options: [
          "8-10 km",
          "11-13 km",
          "16-18 km",
          "20-22 km"
        ],
        correctAnswer: 2,
        explanation: "The tropopause height varies with latitude, and at the equator it typically occurs at 16-18 km as explained in the Troposphere Characteristics section."
      },
      {
        id: 3,
        difficulty: 'intermediate',
        question: "What is the standard atmospheric pressure at sea level in the ISA?",
        options: [
          "1000 hPa",
          "1013.25 hPa",
          "1020 hPa",
          "760 hPa"
        ],
        correctAnswer: 1,
        explanation: "The standard atmospheric pressure at sea level in the International Standard Atmosphere (ISA) is 1013.25 hPa, as covered in the Pressure Measurements section."
      },
      {
        id: 4,
        difficulty: 'intermediate',
        question: "What happens to air density as altitude increases?",
        options: [
          "Increases",
          "Decreases",
          "Remains constant",
          "Varies unpredictably"
        ],
        correctAnswer: 1,
        explanation: "Air density decreases with increasing altitude due to decreasing pressure and temperature, as explained in the Atmospheric Structure section."
      },
      {
        id: 5,
        difficulty: 'expert',
        question: "What is the Dry Adiabatic Lapse Rate (DALR)?",
        options: [
          "1°C/100 m",
          "0.65°C/100 m",
          "0.98°C/100 m",
          "3°C/1000 ft"
        ],
        correctAnswer: 3,
        explanation: "The Dry Adiabatic Lapse Rate (DALR) is 3°C/1000ft, as covered in the Temperature and Humidity section under Lapse Rates."
      }
    ];
    
    return questions.filter(q => q.difficulty === difficulty);
  }
  
  // Default questions for other categories
  return [];
};

const Quiz = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [difficulty, setDifficulty] = useState<Difficulty>('beginner');
  
  const questions = generateQuizQuestions(category, difficulty);
  
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
            onClick={() => navigate(-1)} // Changed from navigate('/') to navigate(-1)
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
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
