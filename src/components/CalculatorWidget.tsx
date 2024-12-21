import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

export const CalculatorWidget = () => {
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [newNumber, setNewNumber] = useState(true);

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
        <div className="grid gap-4">
          <div className="bg-gray-100 p-4 rounded-lg text-right text-2xl">
            {display}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {["7", "8", "9", "÷"].map((btn) => (
              <Button
                key={btn}
                variant="outline"
                onClick={() => btn === "÷" ? handleOperation(btn) : handleNumber(btn)}
              >
                {btn}
              </Button>
            ))}
            {["4", "5", "6", "×"].map((btn) => (
              <Button
                key={btn}
                variant="outline"
                onClick={() => btn === "×" ? handleOperation(btn) : handleNumber(btn)}
              >
                {btn}
              </Button>
            ))}
            {["1", "2", "3", "-"].map((btn) => (
              <Button
                key={btn}
                variant="outline"
                onClick={() => btn === "-" ? handleOperation(btn) : handleNumber(btn)}
              >
                {btn}
              </Button>
            ))}
            {["0", ".", "+", "="].map((btn) => (
              <Button
                key={btn}
                variant="outline"
                onClick={() => {
                  if (btn === "=") calculate();
                  else if (btn === "+") handleOperation(btn);
                  else handleNumber(btn);
                }}
              >
                {btn}
              </Button>
            ))}
            <Button
              className="col-span-4"
              variant="secondary"
              onClick={clear}
            >
              Clear
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};