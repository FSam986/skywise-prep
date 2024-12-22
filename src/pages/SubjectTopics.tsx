import { useParams, useNavigate } from "react-router-dom";
import { BackButton } from "@/components/BackButton";
import { SubjectCard } from "@/components/subjects/SubjectCard";
import { meteorologyTopics } from "@/components/subjects/MeteorologySyllabus";

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

  return (
    <div className="min-h-screen bg-muted py-24">
      <div className="container">
        <div className="mb-6">
          <BackButton />
        </div>
        <h1 className="text-4xl font-bold text-center mb-12 text-primary capitalize">
          PPL {subject} Topics
        </h1>
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