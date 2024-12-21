import { Button } from "@/components/ui/button";

interface CalculatorDisplayProps {
  display: string;
  memory: number;
  angleUnit?: string;
}

export const CalculatorDisplay = ({ display, memory, angleUnit }: CalculatorDisplayProps) => {
  return (
    <div className="bg-muted p-4 rounded-lg">
      <div className="flex justify-between text-sm text-muted-foreground mb-1">
        <span>{angleUnit}</span>
        {memory !== 0 && <span>M = {memory}</span>}
      </div>
      <div className="text-right text-2xl text-foreground">
        {display}
      </div>
    </div>
  );
};