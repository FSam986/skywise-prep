import { NotesWidget } from "../NotesWidget";
import { CalculatorWidget } from "../CalculatorWidget";
import { FlightComputerWidget } from "../FlightComputerWidget";

interface QuizWidgetsProps {
  subject: string;
}

export const QuizWidgets = ({ subject }: QuizWidgetsProps) => {
  return (
    <div className="flex justify-end gap-2 mb-4">
      <NotesWidget subject={subject} />
      <CalculatorWidget />
      <FlightComputerWidget />
    </div>
  );
};