import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const CPLInstrumentsMaterial = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6">
      <BackButton />
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>CPL Instruments Study Material</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Study material content for CPL Instruments will be available here.</p>
          <Button onClick={() => navigate("/quiz/cpl-instruments")}>
            Start Quiz
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CPLInstrumentsMaterial;