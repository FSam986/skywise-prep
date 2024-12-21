import { BookOpen, Cloud, Scale, Compass, Wrench, Brain, Radio, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const subjects = [
  {
    title: "CPL General Navigation",
    description: "Study advanced navigation techniques",
    icon: Compass,
    path: "cpl-navigation-material",
  },
  {
    title: "CPL Instruments and Electronics",
    description: "Learn about aircraft instrumentation systems",
    icon: Scale,
    path: "cpl-instruments-material",
  },
  {
    title: "CPL Air Law",
    description: "Study commercial aviation regulations",
    icon: BookOpen,
    path: "cpl-air-law-material",
  },
  {
    title: "CPL Aircraft Technical and General",
    description: "Learn about advanced aircraft systems",
    icon: Wrench,
    path: "cpl-technical-material",
  },
  {
    title: "CPL Flight Planning",
    description: "Study advanced flight planning",
    icon: FileText,
    path: "cpl-flight-planning-material",
  },
  {
    title: "CPL Meteorology",
    description: "Learn about advanced weather systems",
    icon: Cloud,
    path: "cpl-meteorology-material",
  },
  {
    title: "CPL Radio Aids",
    description: "Study radio navigation systems",
    icon: Radio,
    path: "cpl-radio-aids-material",
  },
  {
    title: "CPL Human Performance",
    description: "Learn about advanced human factors",
    icon: Brain,
    path: "cpl-human-performance-material",
  },
];

const CPLStudyMaterial = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted py-24">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">CPL Study Materials</h1>
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

export default CPLStudyMaterial;