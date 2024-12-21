import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";
import { CanvasTools } from './notes/CanvasTools';
import { useCanvas } from './notes/useCanvas';

interface NotesWidgetProps {
  subject: string;
}

export const NotesWidget = ({ subject }: NotesWidgetProps) => {
  const [activeColor, setActiveColor] = useState("#000000");
  const [activeTool, setActiveTool] = useState<"pen" | "eraser" | "highlighter" | "text">("pen");
  
  const {
    canvas,
    isErasing,
    setIsErasing,
    initializeCanvas,
    addText,
    exportCanvas,
  } = useCanvas(subject);

  const handleToolChange = (tool: typeof activeTool) => {
    if (!canvas) return;

    setActiveTool(tool);
    
    if (tool === 'text') {
      canvas.isDrawingMode = false;
      addText();
      return;
    }
    
    setIsErasing(tool === 'eraser');
    canvas.isDrawingMode = true;
    
    if (tool === 'eraser') {
      canvas.freeDrawingBrush.width = 20;
      canvas.freeDrawingBrush.color = '#ffffff';
    } else if (tool === 'highlighter') {
      canvas.freeDrawingBrush.color = 'rgba(255, 255, 0, 0.3)';
      canvas.freeDrawingBrush.width = 20;
    } else {
      canvas.freeDrawingBrush.color = activeColor;
      canvas.freeDrawingBrush.width = 2;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Pen className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Notes - {subject}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <CanvasTools
            activeTool={activeTool}
            onToolChange={handleToolChange}
            activeColor={activeColor}
            onColorChange={setActiveColor}
            onExport={exportCanvas}
          />
          <div className="border rounded-lg overflow-hidden">
            <canvas
              ref={(canvasElement) => {
                if (canvasElement && !canvas) {
                  initializeCanvas(canvasElement);
                }
              }}
              style={{ touchAction: 'none' }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};