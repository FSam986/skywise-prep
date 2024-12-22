import { supabase } from "@/lib/supabase";

export const seedAtmosphericStructureQuestions = async () => {
  const questions = [
    {
      chapter_number: 1,
      subject: "meteorology",
      question: "What percentage of the Earth's atmosphere is composed of nitrogen?",
      options: ["21%", "78%", "20.95%", "0.03%"],
      correct_answer: 1,
      explanation: "Nitrogen makes up approximately 78% of the Earth's atmosphere by volume.",
      difficulty: "beginner"
    },
    {
      chapter_number: 1,
      subject: "meteorology",
      question: "Which gas is most significant for weather processes?",
      options: ["Oxygen", "Carbon dioxide", "Water vapor", "Nitrogen"],
      correct_answer: 2,
      explanation: "Water vapor is the most significant gas for weather processes due to its role in cloud formation and precipitation.",
      difficulty: "beginner"
    },
    {
      chapter_number: 1,
      subject: "meteorology",
      question: "What is the boundary between the troposphere and the stratosphere called?",
      options: ["Mesopause", "Tropopause", "Stratopause", "Thermopause"],
      correct_answer: 1,
      explanation: "The tropopause is the boundary layer between the troposphere and stratosphere.",
      difficulty: "beginner"
    },
    {
      chapter_number: 1,
      subject: "meteorology",
      question: "In the International Standard Atmosphere (ISA), what is the temperature at sea level?",
      options: ["0°C", "10°C", "15°C", "20°C"],
      correct_answer: 2,
      explanation: "In the International Standard Atmosphere (ISA), the temperature at sea level is 15°C.",
      difficulty: "beginner"
    },
    {
      chapter_number: 1,
      subject: "meteorology",
      question: "At what altitude does the temperature stop decreasing and remain constant in the ISA?",
      options: ["20,000 ft", "36,090 ft", "50,000 ft", "60,000 ft"],
      correct_answer: 1,
      explanation: "In the ISA, temperature stops decreasing at 36,090 ft, which is the tropopause.",
      difficulty: "beginner"
    },
    {
      chapter_number: 1,
      subject: "meteorology",
      question: "What is the lapse rate in the troposphere?",
      options: ["1°C per 100 m", "0.65°C per 100 m", "2°C per 100 m", "0.5°C per 100 m"],
      correct_answer: 1,
      explanation: "The standard lapse rate in the troposphere is 0.65°C per 100 meters.",
      difficulty: "beginner"
    },
    {
      chapter_number: 1,
      subject: "meteorology",
      question: "What is the approximate height of the tropopause over the equator?",
      options: ["8 km", "16-18 km", "11 km", "50 km"],
      correct_answer: 1,
      explanation: "The tropopause is highest over the equator, typically at 16-18 km.",
      difficulty: "beginner"
    },
    {
      chapter_number: 1,
      subject: "meteorology",
      question: "Which atmospheric layer contains the ozone layer?",
      options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
      correct_answer: 1,
      explanation: "The ozone layer is located in the stratosphere.",
      difficulty: "beginner"
    },
    {
      chapter_number: 1,
      subject: "meteorology",
      question: "How does pressure change with altitude?",
      options: ["Increases", "Decreases", "Remains constant", "Fluctuates"],
      correct_answer: 1,
      explanation: "Atmospheric pressure decreases with increasing altitude.",
      difficulty: "beginner"
    },
    {
      chapter_number: 1,
      subject: "meteorology",
      question: "What is the primary function of the ozone layer?",
      options: ["Provides oxygen", "Absorbs ultraviolet radiation", "Regulates temperature", "Reflects sunlight"],
      correct_answer: 1,
      explanation: "The primary function of the ozone layer is to absorb harmful ultraviolet radiation from the sun.",
      difficulty: "beginner"
    }
  ];

  console.log("Starting to seed atmospheric structure questions...");
  
  for (const question of questions) {
    const { error } = await supabase
      .from('chapter_questions')
      .insert([{
        ...question,
        options: JSON.stringify(question.options)
      }]);
      
    if (error) {
      console.error("Error inserting question:", error);
      throw error;
    }
  }
  
  console.log("Successfully seeded atmospheric structure questions");
};