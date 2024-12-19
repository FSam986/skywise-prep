import { Compass, Globe, Navigation, Plane, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "PPL Training",
    description: "Start your aviation journey with Private Pilot License preparation",
    icon: Plane,
    path: "ppl-subjects",
  },
  {
    title: "CPL Training",
    description: "Take the next step with Commercial Pilot License materials",
    icon: Navigation,
    path: "cpl-subjects",
  },
  {
    title: "ATPL Training",
    description: "Prepare for Airline Transport Pilot License certification",
    icon: Globe,
    path: "atpl-subjects",
  },
  {
    title: "Ratings",
    description: "Prepare for additional pilot ratings and certifications",
    icon: Compass,
    path: "ratings",
  },
  {
    title: "Study Material",
    description: "Access comprehensive study materials for all aviation courses",
    icon: BookOpen,
    path: "study-material",
  },
];

export const Categories = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Study Categories</h2>
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