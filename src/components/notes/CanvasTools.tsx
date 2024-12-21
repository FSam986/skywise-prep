import { Button } from "@/components/ui/button";
import { Pen, Eraser, Highlighter } from "lucide-react";

interface CanvasToolsProps {
  activeTool: "pen" | "eraser" | "highlighter";
  onToolChange: (tool: "pen" | "eraser" | "highlighter") => void;
  activeColor: string;
  onColorChange: (color: string) => void;
}

export const CanvasTools = ({
  activeTool,
  onToolChange,
  activeColor,
  onColorChange,
}: CanvasToolsProps) => {
  return (
    <div className="flex gap-2">
      <Button
        variant={activeTool === 'pen' ? 'default' : 'outline'}
        size="icon"
        onClick={() => onToolChange('pen')}
      >
        <Pen className="h-4 w-4" />
      </Button>
      <Button
        variant={activeTool === 'eraser' ? 'default' : 'outline'}
        size="icon"
        onClick={() => onToolChange('eraser')}
      >
        <Eraser className="h-4 w-4" />
      </Button>
      <Button
        variant={activeTool === 'highlighter' ? 'default' : 'outline'}
        size="icon"
        onClick={() => onToolChange('highlighter')}
      >
        <Highlighter className="h-4 w-4" />
      </Button>
      <input
        type="color"
        value={activeColor}
        onChange={(e) => onColorChange(e.target.value)}
        className="w-8 h-8 rounded cursor-pointer"
      />
    </div>
  );
};