import { Button } from "@/components/ui/button";

interface NumericKeypadProps {
  handleNumber: (num: string) => void;
  handleOperation: (op: string) => void;
  calculate: () => void;
  clear: () => void;
}

export const NumericKeypad = ({ handleNumber, handleOperation, calculate, clear }: NumericKeypadProps) => {
  return (
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
      <Button variant="outline" onClick={clear}>C</Button>
    </div>
  );
};