import { BookOpen, Cloud, Scale, Compass, Radio, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { BackButton } from "@/components/BackButton";

const subjects = [
  {
    title: "ATPL Flight Planning",
    description: "Test your advanced flight planning knowledge",
    icon: FileText,
    path: "quiz/atpl-flight-planning",
  },
  {
    title: "ATPL ATG & POF",
    description: "Quiz on aircraft technical and principles",
    icon: Scale,
    path: "quiz/atpl-atg-pof",
  },
  {
    title: "ATPL Instruments",
    description: "Test your complex systems knowledge",
    icon: Scale,
    path: "quiz/atpl-instruments",
  },
  {
    title: "ATPL Navigation",
    description: "Practice advanced navigation concepts",
    icon: Compass,
    path: "quiz/atpl-navigation",
  },
  {
    title: "ATPL Radio Aids",
    description: "Test your radio navigation expertise",
    icon: Radio,
    path: "quiz/atpl-radio-aids",
  },
  {
    title: "ATPL Meteorology",
    description: "Quiz on advanced weather systems",
    icon: Cloud,
    path: "quiz/atpl-meteorology",
  },
];

const ATPLSubjects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted py-24">
      <div className="container">
        <div className="mb-6">
          <BackButton />
        </div>
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">ATPL Training Quizzes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <Card 
              key={subject.title} 
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(`/quiz/${subject.path}`)}
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

export default ATPLSubjects;