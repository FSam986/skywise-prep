import { useParams } from "react-router-dom";
import { useQuizProgress } from "@/hooks/useQuizProgress";
import { useQuestionAttempts } from "@/hooks/useQuestionAttempts";
import { useQuizState } from "@/hooks/useQuizState";
import { QuizHeader } from "@/components/quiz/QuizHeader";
import { QuizContent } from "@/components/quiz/QuizContent";
import { useState } from "react";
import type { Difficulty } from "@/hooks/useQuizState";

// Quiz questions data
const generateQuizQuestions = (category: string | undefined, difficulty: 'beginner' | 'intermediate' | 'expert') => {
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
  const [difficulty, setDifficulty] = useState<Difficulty>('beginner');
  
  const { progress, setProgress } = useQuizProgress(category, difficulty);
  const { questionStatuses, setQuestionStatuses } = useQuestionAttempts(
    category,
    100,
    [],
    difficulty
  );

  const {
    currentQuestion,
    selectedAnswer,
    showExplanation,
    handleAnswerSelect,
    handleNextQuestion,
    handleQuestionSelect,
    handleDifficultyChange,
  } = useQuizState(category, generateQuizQuestions(category, difficulty));

  const questions = generateQuizQuestions(category, difficulty);

  return (
    <div className="min-h-screen bg-muted py-8 px-4">
      <div className="container max-w-6xl mx-auto space-y-6">
        <QuizHeader
          category={category}
          difficulty={difficulty}
          onDifficultyChange={(newDifficulty) => {
            setDifficulty(newDifficulty);
            handleDifficultyChange(newDifficulty, setQuestionStatuses);
          }}
        />

        <QuizContent
          category={category}
          difficulty={difficulty}
          currentQuestion={currentQuestion}
          questions={questions}
          selectedAnswer={selectedAnswer}
          showExplanation={showExplanation}
          questionStatuses={questionStatuses}
          progress={progress}
          onAnswerSelect={(index) => 
            handleAnswerSelect(index, questionStatuses, setQuestionStatuses)
          }
          onNextQuestion={() => handleNextQuestion(progress, setProgress)}
          onQuestionSelect={(index) => 
            handleQuestionSelect(index, questionStatuses)
          }
        />
      </div>
    </div>
  );
};

export default Quiz;
