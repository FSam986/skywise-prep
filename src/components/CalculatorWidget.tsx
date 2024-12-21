import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { CalculatorDisplay } from "./calculator/CalculatorDisplay";
import { UnifiedKeypad } from "./calculator/UnifiedKeypad";
import { FractionInput } from "./calculator/FractionInput";
import { UnitConverter } from "./calculator/UnitConverter";

export const CalculatorWidget = () => {
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [newNumber, setNewNumber] = useState(true);
  const [memory, setMemory] = useState(0);
  const [isRadians, setIsRadians] = useState(false);

  const handleNumber = (num: string) => {
    if (newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const handleOperation = (op: string) => {
    setFirstNumber(display);
    setOperation(op);
    setNewNumber(true);
  };

  const calculate = () => {
    if (!firstNumber || !operation) return;
    
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(display);
    let result = 0;

    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "×":
        result = num1 * num2;
        break;
      case "÷":
        result = num1 / num2;
        break;
      case "^":
        result = Math.pow(num1, num2);
        break;
    }

    setDisplay(result.toString());
    setFirstNumber("");
    setOperation("");
    setNewNumber(true);
  };

  const handleScientificOperation = (operation: string) => {
    const num = parseFloat(display);
    let result = 0;

    switch (operation) {
      case "sin":
        result = isRadians ? Math.sin(num) : Math.sin((num * Math.PI) / 180);
        break;
      case "cos":
        result = isRadians ? Math.cos(num) : Math.cos((num * Math.PI) / 180);
        break;
      case "tan":
        result = isRadians ? Math.tan(num) : Math.tan((num * Math.PI) / 180);
        break;
      case "log":
        result = Math.log10(num);
        break;
      case "ln":
        result = Math.log(num);
        break;
      case "sqrt":
        result = Math.sqrt(num);
        break;
      case "square":
        result = num * num;
        break;
      case "1/x":
        result = 1 / num;
        break;
      case "π":
        result = Math.PI;
        break;
      case "e":
        result = Math.E;
        break;
    }

    setDisplay(result.toString());
    setNewNumber(true);
  };

  const clear = () => {
    setDisplay("0");
    setFirstNumber("");
    setOperation("");
    setNewNumber(true);
  };

  const toggleAngleUnit = () => {
    setIsRadians(!isRadians);
  };

  const handleFractionResult = (value: number) => {
    setDisplay(value.toString());
    setNewNumber(true);
  };

  const handleConversionResult = (value: number) => {
    setDisplay(value.toString());
    setNewNumber(true);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="bg-background hover:bg-muted">
          <Calculator className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-background">
        <DialogHeader>
          <DialogTitle className="text-foreground">Calculator</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-muted">
            <TabsTrigger 
              value="calculator"
              className="data-[state=active]:bg-background data-[state=active]:text-foreground"
            >
              Calculator
            </TabsTrigger>
            <TabsTrigger 
              value="fractions"
              className="data-[state=active]:bg-background data-[state=active]:text-foreground"
            >
              Fractions
            </TabsTrigger>
            <TabsTrigger 
              value="units"
              className="data-[state=active]:bg-background data-[state=active]:text-foreground"
            >
              Units
            </TabsTrigger>
          </TabsList>
          <TabsContent value="calculator" className="mt-4">
            <div className="grid gap-4">
              <CalculatorDisplay 
                display={display} 
                memory={memory}
                angleUnit={isRadians ? "RAD" : "DEG"}
              />
              <UnifiedKeypad
                handleNumber={handleNumber}
                handleOperation={handleOperation}
                handleScientificOperation={handleScientificOperation}
                calculate={calculate}
                clear={clear}
                toggleAngleUnit={toggleAngleUnit}
                isRadians={isRadians}
              />
            </div>
          </TabsContent>
          <TabsContent value="fractions" className="mt-4">
            <FractionInput onFractionSubmit={handleFractionResult} />
            <CalculatorDisplay display={display} memory={memory} />
          </TabsContent>
          <TabsContent value="units" className="mt-4">
            <UnitConverter onConversion={handleConversionResult} />
            <CalculatorDisplay display={display} memory={memory} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};