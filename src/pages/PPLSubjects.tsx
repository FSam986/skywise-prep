import { BookOpen, Cloud, Scale, Compass, Wrench, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const subjects = [
  {
    title: "Basic Physics",
    description: "Principles of flight, forces, and motion",
    icon: Scale,
    path: "physics",
  },
  {
    title: "Meteorology",
    description: "Weather patterns and atmospheric conditions",
    icon: Cloud,
    path: "meteorology",
  },
  {
    title: "Navigation",
    description: "Flight planning and navigation techniques",
    icon: Compass,
    path: "navigation",
  },
  {
    title: "Air Law",
    description: "Aviation regulations and procedures",
    icon: BookOpen,
    path: "air-law",
  },
  {
    title: "Aircraft Technical General",
    description: "Aircraft systems and operations",
    icon: Wrench,
    path: "technical",
  },
  {
    title: "Mock Papers",
    description: "Practice tests and exam preparation",
    icon: FileText,
    path: "mock-papers",
  },
];

const PPLSubjects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted py-24">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-12">PPL Training Subjects</h1>
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

export default PPLSubjects;