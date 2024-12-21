import { Button } from "@/components/ui/button";

interface CalculatorDisplayProps {
  display: string;
  memory: number;
}

export const CalculatorDisplay = ({ display, memory }: CalculatorDisplayProps) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <div className="text-right text-sm text-gray-500 mb-1">
        {memory !== 0 && `M = ${memory}`}
      </div>
      <div className="text-right text-2xl">
        {display}
      </div>
    </div>
  );
};