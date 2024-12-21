import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

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

  const initializeCanvas = (canvasElement: HTMLCanvasElement) => {
    const newCanvas = new fabric.Canvas(canvasElement, {
      width: 800,
      height: 600,
      backgroundColor: '#ffffff',
      isDrawingMode: true,
    });

    // Enhanced eraser functionality
    let isMouseDown = false;

    newCanvas.on('mouse:down', () => {
      isMouseDown = true;
    });

    newCanvas.on('mouse:up', () => {
      isMouseDown = false;
    });

    newCanvas.on('mouse:move', (event) => {
      if (isErasing && isMouseDown) {
        const pointer = newCanvas.getPointer(event.e);
        const objects = newCanvas.getObjects();
        
        objects.forEach((obj) => {
          if (obj.containsPoint(pointer)) {
            newCanvas.remove(obj);
            newCanvas.renderAll();
            saveNotes();
          }
        });
      }
    });

    setCanvas(newCanvas);
    
    // Auto-save when canvas is modified
    newCanvas.on('object:modified', saveNotes);
    newCanvas.on('object:added', saveNotes);
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
  };
};