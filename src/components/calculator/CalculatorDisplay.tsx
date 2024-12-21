import { Button } from "@/components/ui/button";

interface CalculatorDisplayProps {
  display: string;
  memory: number;
  angleUnit?: string;
}

export const CalculatorDisplay = ({ display, memory, angleUnit }: CalculatorDisplayProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex justify-between text-sm text-muted-foreground mb-1">
        <span>{angleUnit}</span>
        {memory !== 0 && <span>M = {memory}</span>}
      </div>
      <div className="text-right text-2xl font-medium text-card-foreground">
        {display}
      </div>
    </div>
  );
};