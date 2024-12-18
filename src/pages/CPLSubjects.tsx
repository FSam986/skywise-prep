import { BookOpen, Cloud, Scale, Compass, Wrench, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const subjects = [
  {
    title: "Advanced Aerodynamics",
    description: "Complex flight dynamics and aircraft performance",
    icon: Scale,
    path: "aerodynamics",
  },
  {
    title: "Advanced Navigation",
    description: "Complex navigation systems and procedures",
    icon: Compass,
    path: "navigation",
  },
  {
    title: "Commercial Operations",
    description: "Commercial flight operations and procedures",
    icon: BookOpen,
    path: "operations",
  },
  {
    title: "Advanced Meteorology",
    description: "Complex weather systems and forecasting",
    icon: Cloud,
    path: "meteorology",
  },
  {
    title: "Systems & Performance",
    description: "Advanced aircraft systems and performance",
    icon: Wrench,
    path: "systems",
  },
  {
    title: "Mock Exams",
    description: "Practice tests and exam preparation",
    icon: FileText,
    path: "mock-exams",
  },
];

const CPLSubjects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted py-24">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-12">CPL Advanced Subjects</h1>
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

export default CPLSubjects;