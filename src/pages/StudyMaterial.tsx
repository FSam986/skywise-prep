import { BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { BackButton } from "@/components/BackButton";

const materials = [
  {
    title: "PPL Study Material",
    description: "Comprehensive study materials for PPL",
    icon: BookOpen,
    path: "ppl-subjects",
  },
  {
    title: "CPL Study Material",
    description: "Advanced study materials for CPL",
    icon: BookOpen,
    path: "cpl-subjects",
  },
  {
    title: "ATPL Study Material",
    description: "Professional study materials for ATPL",
    icon: BookOpen,
    path: "atpl-study-material",
  },
  {
    title: "Ratings",
    description: "Study materials for aviation ratings",
    icon: BookOpen,
    path: "ratings",
  },
];

const StudyMaterial = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted py-24">
      <div className="container">
        <div className="mb-6">
          <BackButton />
        </div>
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Study Materials</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material) => (
            <Card 
              key={material.title} 
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(`/${material.path}`)}
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <material.icon className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-center">{material.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-gray-600">{material.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyMaterial;