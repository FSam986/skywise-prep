import { Compass, Globe, Navigation, Plane, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "PPL Training",
    description: "Practice PPL subjects with interactive quizzes",
    icon: Plane,
    path: "ppl-subjects",
  },
  {
    title: "CPL Training",
    description: "Test your CPL knowledge with comprehensive quizzes",
    icon: Navigation,
    path: "cpl-subjects",
  },
  {
    title: "ATPL Training",
    description: "Challenge yourself with ATPL level quizzes",
    icon: Globe,
    path: "atpl-subjects",
  },
  {
    title: "Ratings",
    description: "Test your knowledge on additional pilot ratings",
    icon: Compass,
    path: "ratings",
  },
  {
    title: "Study Material",
    description: "Access comprehensive study notes and detailed explanations for all aviation subjects",
    icon: BookOpen,
    path: "study-material",
  },
];

export const Categories = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary bg-white/50 py-4 rounded-lg shadow-sm">
          Study Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.title} 
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(`/${category.path}`)}
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <category.icon className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-gray-600">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};