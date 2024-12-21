import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

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

  const handleScientific = (func: string) => {
    const num = parseFloat(display);
    let result = 0;
    
    switch (func) {
      case 'sin':
        result = isRadians ? Math.sin(num) : Math.sin(num * Math.PI / 180);
        break;
      case 'cos':
        result = isRadians ? Math.cos(num) : Math.cos(num * Math.PI / 180);
        break;
      case 'tan':
        result = isRadians ? Math.tan(num) : Math.tan(num * Math.PI / 180);
        break;
      case 'sqrt':
        result = Math.sqrt(num);
        break;
      case 'log':
        result = Math.log10(num);
        break;
      case 'ln':
        result = Math.log(num);
        break;
      case 'exp':
        result = Math.exp(num);
        break;
      case 'pow2':
        result = Math.pow(num, 2);
        break;
      case 'pow3':
        result = Math.pow(num, 3);
        break;
    }
    
    setDisplay(result.toString());
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

  const handleMemory = (action: string) => {
    const currentNum = parseFloat(display);
    switch (action) {
      case 'M+':
        setMemory(memory + currentNum);
        break;
      case 'M-':
        setMemory(memory - currentNum);
        break;
      case 'MR':
        setDisplay(memory.toString());
        setNewNumber(true);
        break;
      case 'MC':
        setMemory(0);
        break;
    }
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
          <DialogTitle>Scientific Calculator</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="text-right text-sm text-gray-500 mb-1">
              {memory !== 0 && `M = ${memory}`}
            </div>
            <div className="text-right text-2xl">
              {display}
            </div>
          </div>
          
          <div className="grid grid-cols-5 gap-2">
            <Button variant="outline" onClick={() => handleMemory('MC')}>MC</Button>
            <Button variant="outline" onClick={() => handleMemory('MR')}>MR</Button>
            <Button variant="outline" onClick={() => handleMemory('M+')}>M+</Button>
            <Button variant="outline" onClick={() => handleMemory('M-')}>M-</Button>
            <Button variant="secondary" onClick={() => setIsRadians(!isRadians)}>
              {isRadians ? 'RAD' : 'DEG'}
            </Button>

            <Button variant="outline" onClick={() => handleScientific('sin')}>sin</Button>
            <Button variant="outline" onClick={() => handleScientific('cos')}>cos</Button>
            <Button variant="outline" onClick={() => handleScientific('tan')}>tan</Button>
            <Button variant="outline" onClick={() => handleScientific('sqrt')}>√</Button>
            <Button variant="outline" onClick={() => handleOperation('^')}>^</Button>

            <Button variant="outline" onClick={() => handleScientific('log')}>log</Button>
            <Button variant="outline" onClick={() => handleScientific('ln')}>ln</Button>
            <Button variant="outline" onClick={() => handleScientific('exp')}>exp</Button>
            <Button variant="outline" onClick={() => handleScientific('pow2')}>x²</Button>
            <Button variant="outline" onClick={() => handleScientific('pow3')}>x³</Button>

            {["7", "8", "9", "÷"].map((btn) => (
              <Button
                key={btn}
                variant="outline"
                onClick={() => btn === "÷" ? handleOperation(btn) : handleNumber(btn)}
              >
                {btn}
              </Button>
            ))}
            <Button variant="outline" onClick={clear}>C</Button>

            {["4", "5", "6", "×"].map((btn) => (
              <Button
                key={btn}
                variant="outline"
                onClick={() => btn === "×" ? handleOperation(btn) : handleNumber(btn)}
              >
                {btn}
              </Button>
            ))}
            <Button variant="outline" onClick={() => setDisplay((prev) => (-parseFloat(prev)).toString())}>±</Button>

            {["1", "2", "3", "-"].map((btn) => (
              <Button
                key={btn}
                variant="outline"
                onClick={() => btn === "-" ? handleOperation(btn) : handleNumber(btn)}
              >
                {btn}
              </Button>
            ))}
            <Button variant="outline" onClick={() => handleNumber('.')}>.</Button>

            {["0", "(", ")", "+"].map((btn) => (
              <Button
                key={btn}
                variant="outline"
                onClick={() => btn === "+" ? handleOperation(btn) : handleNumber(btn)}
              >
                {btn}
              </Button>
            ))}
            <Button variant="secondary" onClick={calculate}>=</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};