import { useParams, useNavigate } from "react-router-dom";
import { BackButton } from "@/components/BackButton";
import { SubjectCard } from "@/components/subjects/SubjectCard";
import { meteorologyTopics } from "@/components/subjects/MeteorologySyllabus";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { seedAtmosphericStructureQuestions } from "@/data/seedQuestions";
import { toast } from "sonner";

const SubjectTopics = () => {
  const { subject } = useParams();
  const navigate = useNavigate();

  const getTopics = () => {
    switch (subject?.toLowerCase()) {
      case "meteorology":
        return meteorologyTopics;
      // Add other subjects here as needed
      default:
        return [];
    }
  };

  const handleNavigation = (path: string) => {
    navigate(`/${path}`);
  };

  const handleSeedQuestions = async () => {
    try {
      await seedAtmosphericStructureQuestions();
      toast.success("Successfully added Chapter 1 quiz questions!");
    } catch (error) {
      console.error("Error seeding questions:", error);
      toast.error("Failed to add quiz questions. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-muted py-24">
      <div className="container">
        <div className="mb-6">
          <BackButton />
        </div>
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-primary capitalize">
            PPL {subject} Topics
          </h1>
          <Button onClick={handleSeedQuestions}>
            Add Chapter 1 Questions
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getTopics().map((topic) => (
            <SubjectCard
              key={topic.title}
              {...topic}
              onNavigate={handleNavigation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectTopics;