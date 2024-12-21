import { BookOpen, Cloud, Scale, Compass, Radio, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { BackButton } from "@/components/BackButton";

const subjects = [
  {
    title: "ATPL Flight Planning",
    description: "Advanced flight planning and operations",
    icon: FileText,
    path: "atpl-flight-planning-material",
  },
  {
    title: "ATPL ATG & POF",
    description: "Aircraft technical and principles of flight",
    icon: Scale,
    path: "atpl-atg-pof-material",
  },
  {
    title: "ATPL Instruments & Electronics",
    description: "Complex aircraft systems",
    icon: Scale,
    path: "atpl-instruments-material",
  },
  {
    title: "ATPL Navigation",
    description: "Advanced navigation systems",
    icon: Compass,
    path: "atpl-navigation-material",
  },
  {
    title: "ATPL Radio Aids",
    description: "Advanced radio navigation",
    icon: Radio,
    path: "atpl-radio-aids-material",
  },
  {
    title: "ATPL Meteorology",
    description: "Advanced weather systems",
    icon: Cloud,
    path: "atpl-meteorology-material",
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
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">ATPL Training Subjects</h1>
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

export default ATPLSubjects;