import { Moon, Compass } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { BackButton } from "@/components/BackButton";

const subjects = [
  {
    title: "Night Rating",
    description: "Test your night flying knowledge",
    icon: Moon,
    path: "quiz/night-rating",
  },
  {
    title: "Instrument Rating",
    description: "Practice instrument flight rules",
    icon: Compass,
    path: "quiz/instrument-rating",
  },
];

const Ratings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted py-24">
      <div className="container">
        <div className="mb-6">
          <BackButton />
        </div>
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Rating Quizzes</h1>
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

export default Ratings;