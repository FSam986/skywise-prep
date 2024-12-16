import { Compass, Globe, Navigation, Plane } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const categories = [
  {
    title: "PPL Training",
    description: "Start your aviation journey with Private Pilot License preparation",
    icon: Plane,
  },
  {
    title: "CPL Advanced",
    description: "Take the next step with Commercial Pilot License materials",
    icon: Navigation,
  },
  {
    title: "ATPL Professional",
    description: "Prepare for Airline Transport Pilot License certification",
    icon: Globe,
  },
  {
    title: "Interview Prep",
    description: "Ace your aviation interviews with our comprehensive guides",
    icon: Compass,
  },
];

export const Categories = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Study Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.title} className="hover:shadow-lg transition-shadow">
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