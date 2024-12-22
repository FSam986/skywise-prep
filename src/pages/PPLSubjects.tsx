import { BookOpen, Cloud, Compass, Wrench, FileText, Brain, Plane } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "@/components/BackButton";
import { SubjectCard } from "@/components/subjects/SubjectCard";

const subjects = [
  {
    title: "PPL Navigation",
    description: "Test your knowledge on navigation principles",
    icon: Compass,
    path: "quiz/ppl-navigation",
  },
  {
    title: "PPL Flight Planning",
    description: "Practice flight planning concepts",
    icon: FileText,
    path: "quiz/ppl-flight-planning",
  },
  {
    title: "PPL Meteorology",
    description: "Test your understanding of weather patterns",
    icon: Cloud,
    path: "ppl-subjects/meteorology",
  },
  {
    title: "PPL Human Performance",
    description: "Quiz yourself on human factors",
    icon: Brain,
    path: "quiz/ppl-human-performance",
  },
  {
    title: "PPL Principles of Flight",
    description: "Test your knowledge of flight principles",
    icon: Plane,
    path: "quiz/ppl-principles",
  },
  {
    title: "PPL Aircraft Technical",
    description: "Practice technical knowledge",
    icon: Wrench,
    path: "quiz/ppl-technical",
  },
  {
    title: "PPL Air Law",
    description: "Test your understanding of aviation regulations",
    icon: BookOpen,
    path: "quiz/ppl-air-law",
  },
];

const PPLSubjects = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <div className="min-h-screen bg-muted py-24">
      <div className="container">
        <div className="mb-6">
          <BackButton />
        </div>
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">PPL Training Quizzes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.title}
              {...subject}
              onNavigate={handleNavigation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PPLSubjects;