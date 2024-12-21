import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface UnitConverterProps {
  onConversion: (value: number) => void;
}

export const UnitConverter = ({ onConversion }: UnitConverterProps) => {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("nm");
  const [toUnit, setToUnit] = useState("km");

  const conversions: Record<string, number> = {
    nm: 1852, // nautical miles in meters
    km: 1000, // kilometers in meters
    m: 1,     // meters (base unit)
    ft: 0.3048, // feet in meters
  };

  const handleConvert = () => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      // Convert to meters first, then to target unit
      const meters = numValue * conversions[fromUnit];
      const result = meters / conversions[toUnit];
      onConversion(result);
    }
  };

  return (
    <div className="grid gap-4 mb-4">
      <div className="grid grid-cols-2 gap-2">
        <Input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter value"
        />
        <Select value={fromUnit} onValueChange={setFromUnit}>
          <SelectTrigger>
            <SelectValue placeholder="From" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="nm">Nautical Miles</SelectItem>
            <SelectItem value="km">Kilometers</SelectItem>
            <SelectItem value="m">Meters</SelectItem>
            <SelectItem value="ft">Feet</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline" onClick={handleConvert}>
          Convert to
        </Button>
        <Select value={toUnit} onValueChange={setToUnit}>
          <SelectTrigger>
            <SelectValue placeholder="To" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="nm">Nautical Miles</SelectItem>
            <SelectItem value="km">Kilometers</SelectItem>
            <SelectItem value="m">Meters</SelectItem>
            <SelectItem value="ft">Feet</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};