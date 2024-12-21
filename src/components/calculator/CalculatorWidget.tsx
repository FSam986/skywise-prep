import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalculatorDisplay } from "./CalculatorDisplay";
import { UnifiedKeypad } from "./UnifiedKeypad";
import { FractionInput } from "./FractionInput";
import { UnitConverter } from "./UnitConverter";
import { useCalculator } from "@/hooks/useCalculator";

export const CalculatorWidget = () => {
  const {
    display,
    memory,
    isRadians,
    handleNumber,
    handleOperation,
    handleScientificOperation,
    calculateResult,
    clear,
    toggleAngleUnit,
  } = useCalculator();

  const handleFractionSubmit = (value: number) => {
    // Convert the fraction to decimal and update the display
    const decimalValue = value; // Assuming value is already in decimal
    handleNumber(decimalValue.toString());
  };

  const handleConversion = (value: number) => {
    // Update the display with the converted value
    handleNumber(value.toString());
  };

  return (
    <Card className="w-[350px] bg-background border-border">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="fraction">Fraction</TabsTrigger>
            <TabsTrigger value="converter">Converter</TabsTrigger>
          </TabsList>
          
          <TabsContent value="calculator" className="space-y-4">
            <CalculatorDisplay 
              display={display} 
              memory={memory} 
              angleUnit={isRadians ? "RAD" : "DEG"} 
            />
            <UnifiedKeypad
              handleNumber={handleNumber}
              handleOperation={handleOperation}
              handleScientificOperation={handleScientificOperation}
              calculate={calculateResult}
              clear={clear}
              toggleAngleUnit={toggleAngleUnit}
              isRadians={isRadians}
            />
          </TabsContent>

          <TabsContent value="fraction">
            <FractionInput onFractionSubmit={handleFractionSubmit} />
          </TabsContent>

          <TabsContent value="converter">
            <UnitConverter onConversion={handleConversion} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
