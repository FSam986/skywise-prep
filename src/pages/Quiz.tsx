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
        explanation: "Nitrogen makes up approximately 78% of the Earth's atmosphere by volume, making it the primary gas. This is covered in Section 1: The Atmosphere of the study material."
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
        explanation: "At the equator, the tropopause typically occurs at 16-18 km. This is explained in Section 1: The Atmosphere, which discusses atmospheric layers and their characteristics."
      },
      {
        id: 3,
        difficulty: 'beginner',
        question: "What is the standard atmospheric pressure at sea level in the ISA?",
        options: [
          "1000 hPa",
          "1013.25 hPa",
          "1020 hPa",
          "760 hPa"
        ],
        correctAnswer: 1,
        explanation: "The standard atmospheric pressure at sea level in the International Standard Atmosphere (ISA) is 1013.25 hPa. This is covered in Section 2: Pressure of the study material."
      },
      {
        id: 4,
        difficulty: 'beginner',
        question: "What does QNH represent?",
        options: [
          "Pressure at sea level using ISA",
          "Pressure at the aerodrome reference point",
          "Pressure corrected for temperature deviations",
          "Standard pressure setting of 1013.25 hPa"
        ],
        correctAnswer: 0,
        explanation: "QNH represents the pressure at sea level using ISA conditions. This is explained in Section 2: Pressure, which covers various pressure measurements and their significance."
      },
      {
        id: 5,
        difficulty: 'beginner',
        question: "What happens to air density as altitude increases?",
        options: [
          "Increases",
          "Decreases",
          "Remains constant",
          "Varies unpredictably"
        ],
        correctAnswer: 1,
        explanation: "Air density decreases as altitude increases. This is covered in Section 3: Density of the study material, which explains how atmospheric pressure and temperature affect density."
      },
      {
        id: 6,
        difficulty: 'intermediate',
        question: "Why does high humidity reduce air density?",
        options: [
          "Water vapor is lighter than nitrogen and oxygen",
          "Water vapor increases pressure",
          "Water vapor decreases temperature",
          "Water vapor compresses air"
        ],
        correctAnswer: 0,
        explanation: "High humidity reduces air density because water vapor is lighter than nitrogen and oxygen. This is explained in Section 3: Density, which discusses the effects of humidity on air density."
      },
      {
        id: 7,
        difficulty: 'intermediate',
        question: "What is the lapse rate in the troposphere under ISA conditions?",
        options: [
          "0.65°C/100 m",
          "1°C/100 m",
          "1.5°C/100 m",
          "2°C/100 m"
        ],
        correctAnswer: 0,
        explanation: "The lapse rate in the troposphere under ISA conditions is 0.65°C/100 m. This is covered in Section 4: Temperature, which explains temperature variations with altitude."
      },
      {
        id: 8,
        difficulty: 'intermediate',
        question: "What is relative humidity?",
        options: [
          "Ratio of water vapor to total atmospheric pressure",
          "Ratio of actual to maximum water vapor content in the air",
          "Absolute amount of water vapor in the air",
          "Temperature difference between dew point and air temperature"
        ],
        correctAnswer: 1,
        explanation: "Relative humidity is the ratio of actual to maximum water vapor content in the air. This is explained in Section 5: Humidity of the study material."
      },
      {
        id: 9,
        difficulty: 'expert',
        question: "What is the Dry Adiabatic Lapse Rate (DALR)?",
        options: [
          "1°C/100 m",
          "0.65°C/100 m",
          "0.98°C/100 m",
          "3°C/1000 ft"
        ],
        correctAnswer: 3,
        explanation: "The Dry Adiabatic Lapse Rate (DALR) is 3°C/1000 ft. This is covered in Section 6: Adiabatics and Stability, which discusses various lapse rates and their significance."
      },
      {
        id: 10,
        difficulty: 'expert',
        question: "What is Clear Air Turbulence (CAT)?",
        options: [
          "Turbulence caused by thunderstorms",
          "Turbulence near the tropopause in the absence of clouds",
          "Turbulence caused by mountain waves",
          "Turbulence caused by surface heating"
        ],
        correctAnswer: 1,
        explanation: "Clear Air Turbulence (CAT) is turbulence that occurs near the tropopause in the absence of clouds. This is explained in Section 7: Turbulence of the study material."
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
