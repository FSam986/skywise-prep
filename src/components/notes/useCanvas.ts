import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { jsPDF } from 'jspdf';

export const useCanvas = (subject: string) => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [isErasing, setIsErasing] = useState(false);

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

  const loadNotes = async () => {
    if (!canvas) return;
    
    try {
      const { data: notes, error } = await supabase
        .from('notes')
        .select('content')
        .eq('subject', subject)
        .maybeSingle();

      if (error) throw error;

      if (notes) {
        canvas.loadFromJSON(notes.content, () => {
          canvas.renderAll();
        });
      }
    } catch (error) {
      console.error('Error loading notes:', error);
    }
  };

  const addText = () => {
    if (!canvas) return;
    
    const text = new fabric.IText('Click to edit', {
      left: 100,
      top: 100,
      fontFamily: 'Arial',
      fontSize: 20,
      fill: canvas.freeDrawingBrush.color,
    });
    
    canvas.add(text);
    canvas.setActiveObject(text);
    canvas.renderAll();
    saveNotes();
  };

  const exportCanvas = async (type: 'pdf' | 'png') => {
    if (!canvas) return;

    try {
      if (type === 'png') {
        const dataUrl = canvas.toDataURL({
          format: 'png',
          quality: 1
        });
        const link = document.createElement('a');
        link.download = `${subject}-notes.png`;
        link.href = dataUrl;
        link.click();
        toast.success('Notes exported as PNG');
      } else {
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'px',
          format: [canvas.width || 800, canvas.height || 600]
        });
        
        const dataUrl = canvas.toDataURL({
          format: 'png',
          quality: 1
        });
        
        pdf.addImage(dataUrl, 'PNG', 0, 0);
        pdf.save(`${subject}-notes.pdf`);
        toast.success('Notes exported as PDF');
      }
    } catch (error) {
      console.error('Error exporting notes:', error);
      toast.error('Failed to export notes');
    }
  };

  const initializeCanvas = (canvasElement: HTMLCanvasElement) => {
    const newCanvas = new fabric.Canvas(canvasElement, {
      width: 800,
      height: 600,
      backgroundColor: '#ffffff',
      isDrawingMode: true,
    });
    
    // Configure touch and pointer events
    newCanvas.upperCanvasEl.style.touchAction = 'none';
    newCanvas.upperCanvasEl.style.userSelect = 'none';
    
    // Set pressure sensitivity for Apple Pencil
    if (window.PointerEvent) {
      newCanvas.on('pointer:down', (e) => {
        if (e.pointer?.pressure !== undefined) {
          const pressure = e.pointer.pressure;
          if (isErasing) {
            newCanvas.freeDrawingBrush.width = pressure * 30;
          } else {
            newCanvas.freeDrawingBrush.width = pressure * 5;
          }
        }
      });
    }

    // Auto-save when canvas is modified
    newCanvas.on('object:added', saveNotes);
    newCanvas.on('object:modified', saveNotes);
    newCanvas.on('object:removed', saveNotes);

    setCanvas(newCanvas);
  };

  useEffect(() => {
    if (canvas) {
      loadNotes();
    }
  }, [canvas, subject]);

  return {
    canvas,
    isErasing,
    setIsErasing,
    initializeCanvas,
    saveNotes,
    addText,
    exportCanvas,
  };
};