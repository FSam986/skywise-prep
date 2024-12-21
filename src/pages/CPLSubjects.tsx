import { BookOpen, Cloud, Scale, Compass, Wrench, Brain, Radio, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { BackButton } from "@/components/BackButton";

const subjects = [
  {
    title: "CPL Navigation",
    description: "Test your advanced navigation knowledge",
    icon: Compass,
    path: "quiz/cpl-navigation",
  },
  {
    title: "CPL Instruments",
    description: "Practice instrument knowledge",
    icon: Scale,
    path: "quiz/cpl-instruments",
  },
  {
    title: "CPL Air Law",
    description: "Test your understanding of commercial aviation laws",
    icon: BookOpen,
    path: "quiz/cpl-air-law",
  },
  {
    title: "CPL Aircraft Technical",
    description: "Quiz yourself on advanced aircraft systems",
    icon: Wrench,
    path: "quiz/cpl-technical",
  },
  {
    title: "CPL Flight Planning",
    description: "Test your commercial flight planning skills",
    icon: FileText,
    path: "quiz/cpl-flight-planning",
  },
  {
    title: "CPL Meteorology",
    description: "Practice advanced weather knowledge",
    icon: Cloud,
    path: "quiz/cpl-meteorology",
  },
  {
    title: "CPL Radio Aids",
    description: "Test your radio navigation knowledge",
    icon: Radio,
    path: "quiz/cpl-radio-aids",
  },
  {
    title: "CPL Human Performance",
    description: "Quiz on advanced human factors",
    icon: Brain,
    path: "quiz/cpl-human-performance",
  },
];

const CPLSubjects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted py-24">
      <div className="container">
        <div className="mb-6">
          <BackButton />
        </div>
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">CPL Training Quizzes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <Card 
              key={subject.title} 
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(`/${subject.path}`)}
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <subject.icon className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-center">{subject.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-gray-600">{subject.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CPLSubjects;