import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button 
      variant="outline"
      onClick={() => navigate(-1)}
      className="mb-6 bg-card hover:bg-muted/80 border border-border shadow-sm"
    >
      <ChevronLeft className="mr-2 h-4 w-4" /> Back
    </Button>
  );
};