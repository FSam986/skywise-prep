import { Button } from "@/components/ui/button";

interface ScientificKeypadProps {
  handleOperation: (op: string) => void;
  toggleAngleUnit: () => void;
  isRadians: boolean;
}

export const ScientificKeypad = ({
  handleOperation,
  toggleAngleUnit,
  isRadians,
}: ScientificKeypadProps) => {
  const scientificButtons = [
    ["sin", "cos", "tan", "π"],
    ["log", "ln", "sqrt", "e"],
    ["square", "1/x", "^", "DEG/RAD"],
  ];

  return (
    <div className="grid gap-2">
      {scientificButtons.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-4 gap-2">
          {row.map((btn) => (
            <Button
              key={btn}
              variant="outline"
              className="bg-muted hover:bg-muted/80 text-foreground"
              onClick={() => {
                if (btn === "DEG/RAD") {
                  toggleAngleUnit();
                } else {
                  handleOperation(btn);
                }
              }}
            >
              {btn === "DEG/RAD" ? (isRadians ? "RAD" : "DEG") : btn}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};