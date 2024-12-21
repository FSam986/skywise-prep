import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Pen, Type, Ruler, Eraser, Highlighter } from "lucide-react";
import { fabric } from "fabric";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface NotesWidgetProps {
  subject: string;
}

export const NotesWidget = ({ subject }: NotesWidgetProps) => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [activeColor, setActiveColor] = useState("#000000");
  const [activeTool, setActiveTool] = useState<"pen" | "text" | "ruler" | "eraser" | "highlighter">("pen");

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const { data: notes, error } = await supabase
          .from('notes')
          .select('content')
          .eq('subject', subject)
          .maybeSingle();

        if (error) throw error;

        if (notes && canvas) {
          canvas.loadFromJSON(notes.content, () => {
            canvas.renderAll();
          });
        }
      } catch (error) {
        console.error('Error loading notes:', error);
      }
    };

    if (canvas) {
      loadNotes();
    }
  }, [canvas, subject]);

  const initializeCanvas = (canvasElement: HTMLCanvasElement) => {
    const newCanvas = new fabric.Canvas(canvasElement, {
      width: 800,
      height: 600,
      backgroundColor: '#ffffff',
    });

    newCanvas.freeDrawingBrush.color = activeColor;
    newCanvas.freeDrawingBrush.width = 2;
    setCanvas(newCanvas);

    // Auto-save when canvas is modified
    newCanvas.on('object:modified', saveNotes);
    newCanvas.on('object:added', saveNotes);
  };

  const saveNotes = async () => {
    if (!canvas) return;

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error('You must be logged in to save notes');
        return;
      }

      const content = canvas.toJSON();
      const { error } = await supabase
        .from('notes')
        .upsert({
          subject,
          content,
          user_id: user.id,
          updated_at: new Date().toISOString(),
        });

      if (error) throw error;
      toast.success('Notes saved successfully');
    } catch (error) {
      console.error('Error saving notes:', error);
      toast.error('Failed to save notes');
    }
  };

  const handleToolChange = (tool: typeof activeTool) => {
    if (!canvas) return;

    setActiveTool(tool);
    canvas.isDrawingMode = tool === 'pen' || tool === 'highlighter';

    if (tool === 'highlighter') {
      canvas.freeDrawingBrush.color = 'rgba(255, 255, 0, 0.3)';
      canvas.freeDrawingBrush.width = 20;
    } else if (tool === 'pen') {
      canvas.freeDrawingBrush.color = activeColor;
      canvas.freeDrawingBrush.width = 2;
    } else if (tool === 'eraser') {
      // Implement eraser functionality
      canvas.freeDrawingBrush.color = '#ffffff';
      canvas.freeDrawingBrush.width = 20;
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
          <div className="flex gap-2">
            <Button
              variant={activeTool === 'pen' ? 'default' : 'outline'}
              size="icon"
              onClick={() => handleToolChange('pen')}
            >
              <Pen className="h-4 w-4" />
            </Button>
            <Button
              variant={activeTool === 'text' ? 'default' : 'outline'}
              size="icon"
              onClick={() => handleToolChange('text')}
            >
              <Type className="h-4 w-4" />
            </Button>
            <Button
              variant={activeTool === 'ruler' ? 'default' : 'outline'}
              size="icon"
              onClick={() => handleToolChange('ruler')}
            >
              <Ruler className="h-4 w-4" />
            </Button>
            <Button
              variant={activeTool === 'eraser' ? 'default' : 'outline'}
              size="icon"
              onClick={() => handleToolChange('eraser')}
            >
              <Eraser className="h-4 w-4" />
            </Button>
            <Button
              variant={activeTool === 'highlighter' ? 'default' : 'outline'}
              size="icon"
              onClick={() => handleToolChange('highlighter')}
            >
              <Highlighter className="h-4 w-4" />
            </Button>
            <input
              type="color"
              value={activeColor}
              onChange={(e) => setActiveColor(e.target.value)}
              className="w-8 h-8 rounded cursor-pointer"
            />
          </div>
          <div className="border rounded-lg overflow-hidden">
            <canvas
              ref={(canvasElement) => {
                if (canvasElement && !canvas) {
                  initializeCanvas(canvasElement);
                }
              }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};