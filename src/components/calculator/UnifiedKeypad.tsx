import { Button } from "@/components/ui/button";

interface UnifiedKeypadProps {
  handleNumber: (num: string) => void;
  handleOperation: (op: string) => void;
  handleScientificOperation: (op: string) => void;
  calculate: () => void;
  clear: () => void;
  toggleAngleUnit: () => void;
  isRadians: boolean;
}

export const UnifiedKeypad = ({
  handleNumber,
  handleOperation,
  handleScientificOperation,
  calculate,
  clear,
  toggleAngleUnit,
  isRadians,
}: UnifiedKeypadProps) => {
  const scientificButtons = [
    ["sin", "cos", "tan", "π"],
    ["log", "ln", "sqrt", "e"],
    ["square", "1/x", "^", "DEG/RAD"],
  ];

  return (
    <div className="grid gap-2">
      {/* Scientific Functions */}
      {scientificButtons.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-4 gap-2">
          {row.map((btn) => (
            <Button
              key={btn}
              variant="outline"
              className="bg-muted/80 hover:bg-muted text-foreground"
              onClick={() => {
                if (btn === "DEG/RAD") {
                  toggleAngleUnit();
                } else {
                  handleScientificOperation(btn);
                }
              }}
            >
              {btn === "DEG/RAD" ? (isRadians ? "RAD" : "DEG") : btn}
            </Button>
          ))}
        </div>
      ))}

      {/* Basic Calculator */}
      <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "÷"].map((btn) => (
          <Button
            key={btn}
            variant="outline"
            className="bg-muted/80 hover:bg-muted text-foreground"
            onClick={() => btn === "÷" ? handleOperation(btn) : handleNumber(btn)}
          >
            {btn}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["4", "5", "6", "×"].map((btn) => (
          <Button
            key={btn}
            variant="outline"
            className="bg-muted/80 hover:bg-muted text-foreground"
            onClick={() => btn === "×" ? handleOperation(btn) : handleNumber(btn)}
          >
            {btn}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["1", "2", "3", "-"].map((btn) => (
          <Button
            key={btn}
            variant="outline"
            className="bg-muted/80 hover:bg-muted text-foreground"
            onClick={() => btn === "-" ? handleOperation(btn) : handleNumber(btn)}
          >
            {btn}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["0", ".", "+", "="].map((btn) => (
          <Button
            key={btn}
            variant="outline"
            className="bg-muted/80 hover:bg-muted text-foreground"
            onClick={() => {
              if (btn === "=") calculate();
              else if (btn === "+") handleOperation(btn);
              else handleNumber(btn);
            }}
          >
            {btn}
          </Button>
        ))}
      </div>
      <Button 
        variant="outline" 
        onClick={clear}
        className="bg-muted/80 hover:bg-muted text-foreground"
      >
        C
      </Button>
    </div>
  );
};