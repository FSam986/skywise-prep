import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { CalculatorDisplay } from "./calculator/CalculatorDisplay";
import { NumericKeypad } from "./calculator/NumericKeypad";
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

  const clear = () => {
    setDisplay("0");
    setFirstNumber("");
    setOperation("");
    setNewNumber(true);
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
        <Button variant="outline" size="icon">
          <Calculator className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Calculator</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="calculator">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="fractions">Fractions</TabsTrigger>
            <TabsTrigger value="units">Units</TabsTrigger>
          </TabsList>
          <TabsContent value="calculator">
            <div className="grid gap-4">
              <CalculatorDisplay display={display} memory={memory} />
              <NumericKeypad
                handleNumber={handleNumber}
                handleOperation={handleOperation}
                calculate={calculate}
                clear={clear}
              />
            </div>
          </TabsContent>
          <TabsContent value="fractions">
            <FractionInput onFractionSubmit={handleFractionResult} />
            <CalculatorDisplay display={display} memory={memory} />
          </TabsContent>
          <TabsContent value="units">
            <UnitConverter onConversion={handleConversionResult} />
            <CalculatorDisplay display={display} memory={memory} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};