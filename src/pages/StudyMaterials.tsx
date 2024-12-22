import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudyMaterials = () => {
  const navigate = useNavigate();
  const categories = [
    {
      title: "PPL Materials",
      description: "Private Pilot License study materials",
      subjects: [
        "Air Law",
        "Aircraft General Knowledge",
        "Flight Performance and Planning",
        "Human Performance",
        "Meteorology",
        "Navigation",
        "Operational Procedures",
        "Principles of Flight",
        "Communications"
      ]
    },
    {
      title: "CPL Materials",
      description: "Commercial Pilot License study materials",
      subjects: [
        "Air Law and ATC Procedures",
        "Aircraft General Knowledge",
        "Flight Planning and Performance",
        "Human Performance and Limitations",
        "Meteorology",
        "Navigation",
        "Operational Procedures",
        "Principles of Flight",
        "Radio Navigation",
        "Communications"
      ]
    },
    {
      title: "ATPL Materials",
      description: "Airline Transport Pilot License study materials",
      subjects: [
        "Air Law",
        "Aircraft General Knowledge - Airframe/Systems/Power Plant",
        "Aircraft General Knowledge - Instrumentation",
        "Mass and Balance",
        "Performance",
        "Flight Planning and Monitoring",
        "Human Performance",
        "Meteorology",
        "General Navigation",
        "Radio Navigation",
        "Operational Procedures",
        "Principles of Flight",
        "Communications"
      ]
    },
    {
      title: "Rating Materials",
      description: "Additional ratings study materials",
      subjects: [
        "Instrument Rating",
        "Multi-Engine Rating",
        "Night Rating",
        "Aerobatic Rating",
        "Mountain Rating",
        "Seaplane Rating",
        "Type Ratings"
      ]
    }
  ];

  const handleSubjectClick = (category: string, subject: string) => {
    const licenseType = category.split(' ')[0].toLowerCase();
    navigate(`/study/${licenseType}/${subject.toLowerCase().replace(/ /g, '-')}`);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Study Materials</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {categories.map((category) => (
          <Card key={category.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <FileText className="h-8 w-8 text-secondary" />
              </div>
              <CardTitle className="text-center">{category.title}</CardTitle>
              <p className="text-center text-sm text-muted-foreground mt-2">
                {category.description}
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-2">
                {category.subjects.map((subject) => (
                  <div
                    key={subject}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent cursor-pointer transition-colors"
                    onClick={() => handleSubjectClick(category.title, subject)}
                  >
                    <Book className="h-4 w-4 text-primary" />
                    <span className="text-sm">{subject}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StudyMaterials;