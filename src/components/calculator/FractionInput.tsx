import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface FractionInputProps {
  onFractionSubmit: (value: number) => void;
}

export const FractionInput = ({ onFractionSubmit }: FractionInputProps) => {
  const [numerator, setNumerator] = useState("");
  const [denominator, setDenominator] = useState("");

  const handleSubmit = () => {
    const num = parseInt(numerator);
    const den = parseInt(denominator);
    if (den !== 0 && !isNaN(num) && !isNaN(den)) {
      onFractionSubmit(num / den);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-2 items-center mb-4">
      <Input
        type="number"
        value={numerator}
        onChange={(e) => setNumerator(e.target.value)}
        placeholder="Numerator"
      />
      <div className="text-center font-bold">/</div>
      <Input
        type="number"
        value={denominator}
        onChange={(e) => setDenominator(e.target.value)}
        placeholder="Denominator"
      />
      <Button onClick={handleSubmit} className="col-span-3">
        Convert to Decimal
      </Button>
    </div>
  );
};