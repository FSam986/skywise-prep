import { BookOpen, Cloud, Scale, Compass, Wrench, Brain, FileText, Plane } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { NotesWidget } from "@/components/NotesWidget";

const subjects = [
  {
    title: "PPL Navigation",
    description: "Basic navigation principles and techniques",
    icon: Compass,
    path: "ppl-navigation-material",
  },
  {
    title: "PPL Flight Planning (A)",
    description: "Flight planning fundamentals",
    icon: FileText,
    path: "ppl-flight-planning-material",
  },
  {
    title: "PPL Meteorology",
    description: "Weather patterns and meteorological principles",
    icon: Cloud,
    path: "ppl-meteorology-material",
  },
  {
    title: "PPL Human Performance",
    description: "Human factors in aviation",
    icon: Brain,
    path: "ppl-human-performance-material",
  },
  {
    title: "PPL Principles of Flight (A)",
    description: "Basic aerodynamics and flight principles",
    icon: Plane,
    path: "ppl-principles-material",
  },
  {
    title: "PPL Aircraft Technical and General (A)",
    description: "Aircraft systems and technical knowledge",
    icon: Wrench,
    path: "ppl-technical-material",
  },
  {
    title: "PPL Air Law",
    description: "Aviation regulations and procedures",
    icon: BookOpen,
    path: "ppl-air-law-material",
  },
];

const PPLStudyMaterial = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted py-24">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">PPL Study Materials</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <Card 
              key={subject.title} 
              className="hover:shadow-lg transition-shadow cursor-pointer relative"
              onClick={() => navigate(`/quiz/${subject.path}`)}
            >
              <div className="absolute top-4 right-4 z-10" onClick={(e) => e.stopPropagation()}>
                <NotesWidget subject={subject.title} />
              </div>
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

export default PPLStudyMaterial;