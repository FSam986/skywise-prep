import { Compass, Globe, Navigation, Plane } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "PPL Training",
    description: "Study and practice PPL subjects",
    icon: Plane,
    path: "ppl-subjects",
  },
  {
    title: "CPL Training",
    description: "Study and practice CPL subjects",
    icon: Navigation,
    path: "cpl-subjects",
  },
  {
    title: "ATPL Training",
    description: "Study and practice ATPL subjects",
    icon: Globe,
    path: "atpl-subjects",
  },
  {
    title: "Ratings",
    description: "Study additional pilot ratings",
    icon: Compass,
    path: "ratings",
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