import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PenLine } from "lucide-react";
import { CanvasTools } from "./notes/CanvasTools";
import { useCanvas } from "./notes/hooks/useCanvas";

interface NotesWidgetProps {
  subject: string;
}

export const NotesWidget = ({ subject }: NotesWidgetProps) => {
  const [activeTool, setActiveTool] = useState<"pen" | "eraser" | "highlighter">("pen");
  const [activeColor, setActiveColor] = useState("#000000");
  const {
    canvas,
    setDrawingTool,
    saveNotes,
    initializeCanvas,
    addText,
    exportCanvas,
    clearCanvas,
  } = useCanvas(subject);

  const handleToolChange = (tool: typeof activeTool) => {
    setActiveTool(tool);
    setDrawingTool(tool);
  };

  useEffect(() => {
    if (canvas) {
      canvas.freeDrawingBrush.color = activeColor;
    }
  }, [activeColor, canvas]);

  useEffect(() => {
    const handleSave = () => {
      saveNotes();
    };

    window.addEventListener("beforeunload", handleSave);
    return () => {
      handleSave();
      window.removeEventListener("beforeunload", handleSave);
    };
  }, [saveNotes]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <PenLine className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <div className="space-y-4">
          <CanvasTools
            activeTool={activeTool}
            onToolChange={handleToolChange}
            activeColor={activeColor}
            onColorChange={setActiveColor}
            onExport={exportCanvas}
            onClear={clearCanvas}
          />
          <div className="border rounded-lg overflow-hidden">
            <canvas
              id="canvas"
              style={{ width: "100%", touchAction: "none" }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};