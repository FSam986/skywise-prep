import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const CPLRadioAidsMaterial = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6">
      <BackButton />
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>CPL Radio Aids Study Material</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Study material content for CPL Radio Aids will be available here.</p>
          <Button onClick={() => navigate("/quiz/cpl-radio-aids")}>
            Start Quiz
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CPLRadioAidsMaterial;