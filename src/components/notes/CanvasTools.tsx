import { Button } from "@/components/ui/button";
import { Pen, Eraser, Highlighter, Type, Download } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CanvasToolsProps {
  activeTool: "pen" | "eraser" | "highlighter" | "text";
  onToolChange: (tool: "pen" | "eraser" | "highlighter" | "text") => void;
  activeColor: string;
  onColorChange: (color: string) => void;
  onExport: (type: "pdf" | "png") => void;
}

export const CanvasTools = ({
  activeTool,
  onToolChange,
  activeColor,
  onColorChange,
  onExport,
}: CanvasToolsProps) => {
  return (
    <div className="flex gap-2 items-center">
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
      <Button
        variant={activeTool === 'text' ? 'default' : 'outline'}
        size="icon"
        onClick={() => onToolChange('text')}
      >
        <Type className="h-4 w-4" />
      </Button>
      <input
        type="color"
        value={activeColor}
        onChange={(e) => onColorChange(e.target.value)}
        className="w-8 h-8 rounded cursor-pointer"
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            size="icon" 
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            <Download className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white shadow-lg border rounded-md min-w-[150px]">
          <DropdownMenuItem 
            onClick={() => onExport('png')} 
            className="cursor-pointer hover:bg-muted px-3 py-2 rounded"
          >
            Export as PNG
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => onExport('pdf')} 
            className="cursor-pointer hover:bg-muted px-3 py-2 rounded"
          >
            Export as PDF
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};