import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NightRatingMaterial = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted py-24">
      <div className="container">
        <div className="mb-6">
          <BackButton />
        </div>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Night Rating</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <h2>Introduction to Night Flying</h2>
            <p>
              Night rating enables pilots to fly during night hours, requiring specific
              skills and knowledge for safe night operations.
            </p>

            <h2>Key Topics</h2>
            <ul>
              <li>Night Vision and Human Factors</li>
              <li>Night Navigation Techniques</li>
              <li>Airport Lighting Systems</li>
              <li>Emergency Procedures at Night</li>
            </ul>

            <div className="mt-8">
              <Button 
                onClick={() => navigate("/quiz/night-rating")}
                className="w-full"
              >
                Start Practice Quiz
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NightRatingMaterial;