import { BookOpen, Cloud, Scale, Compass, Wrench, FileText, Brain, Plane, Wind, Sun, CloudRain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { BackButton } from "@/components/BackButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const meteorologyTopics = [
  {
    title: "1. Advanced Atmospheric Structure",
    description: "Study composition, layers, and characteristics of the atmosphere",
    icon: Cloud,
    path: "quiz/ppl-meteorology/atmospheric-structure",
  },
  {
    title: "7. Air Masses and Fronts",
    description: "Learn about different air masses and frontal systems",
    icon: Wind,
    path: "quiz/ppl-meteorology/air-masses-fronts",
  }
];

const subjects = [
  {
    title: "PPL Navigation",
    description: "Test your knowledge on navigation principles",
    icon: Compass,
    path: "quiz/ppl-navigation",
  },
  {
    title: "PPL Flight Planning",
    description: "Practice flight planning concepts",
    icon: FileText,
    path: "quiz/ppl-flight-planning",
  },
  {
    title: "PPL Meteorology",
    description: "Test your understanding of weather patterns",
    icon: Cloud,
    topics: meteorologyTopics,
  },
  {
    title: "PPL Human Performance",
    description: "Quiz yourself on human factors",
    icon: Brain,
    path: "quiz/ppl-human-performance",
  },
  {
    title: "PPL Principles of Flight",
    description: "Test your knowledge of flight principles",
    icon: Plane,
    path: "quiz/ppl-principles",
  },
  {
    title: "PPL Aircraft Technical",
    description: "Practice technical knowledge",
    icon: Wrench,
    path: "quiz/ppl-technical",
  },
  {
    title: "PPL Air Law",
    description: "Test your understanding of aviation regulations",
    icon: BookOpen,
    path: "quiz/ppl-air-law",
  },
];

const PPLSubjects = () => {
  const navigate = useNavigate();

  const handleCardClick = (subject: any) => {
    if (subject.path) {
      navigate(`/${subject.path}`);
    }
  };

  return (
    <div className="min-h-screen bg-muted py-24">
      <div className="container">
        <div className="mb-6">
          <BackButton />
        </div>
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">PPL Training Quizzes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <Card 
              key={subject.title} 
              className={`hover:shadow-lg transition-shadow ${!subject.topics ? 'cursor-pointer' : ''}`}
              onClick={() => !subject.topics && handleCardClick(subject)}
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <subject.icon className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-center">{subject.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {!subject.topics ? (
                  <p className="text-center text-sm text-gray-600">{subject.description}</p>
                ) : (
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="topics">
                      <AccordionTrigger className="text-sm">
                        View Topics
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {subject.topics.map((topic) => (
                            <div
                              key={topic.title}
                              className="p-2 hover:bg-accent rounded-md cursor-pointer flex items-center gap-2"
                              onClick={() => navigate(`/${topic.path}`)}
                            >
                              <topic.icon className="h-4 w-4" />
                              <span className="text-sm">{topic.title}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PPLSubjects;
