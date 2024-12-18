import { BookOpen, Cloud, Scale, Compass, Wrench, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const subjects = [
  {
    title: "Transport Category Aircraft",
    description: "Large aircraft systems and operations",
    icon: Scale,
    path: "transport-aircraft",
  },
  {
    title: "Advanced Flight Planning",
    description: "Complex route planning and fuel calculations",
    icon: Compass,
    path: "flight-planning",
  },
  {
    title: "Air Transport Operations",
    description: "Airline operations and procedures",
    icon: BookOpen,
    path: "transport-ops",
  },
  {
    title: "High Altitude Weather",
    description: "Advanced weather phenomena and jet streams",
    icon: Cloud,
    path: "weather",
  },
  {
    title: "Advanced Systems",
    description: "Complex aircraft systems and automation",
    icon: Wrench,
    path: "systems",
  },
  {
    title: "ATPL Mock Tests",
    description: "Practice tests and exam preparation",
    icon: FileText,
    path: "mock-tests",
  },
];

const ATPLSubjects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted py-24">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-12">ATPL Professional Subjects</h1>
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