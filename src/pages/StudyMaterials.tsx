import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const StudyMaterials = () => {
  const subjects = [
    { title: "PPL Materials", description: "Private Pilot License study materials" },
    { title: "CPL Materials", description: "Commercial Pilot License study materials" },
    { title: "ATPL Materials", description: "Airline Transport Pilot License study materials" },
    { title: "Rating Materials", description: "Additional ratings study materials" },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Study Materials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {subjects.map((subject) => (
          <Card key={subject.title} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <FileText className="h-8 w-8 text-secondary" />
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
  );
};

export default StudyMaterials;