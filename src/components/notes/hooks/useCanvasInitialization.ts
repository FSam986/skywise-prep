import { useEffect, useState } from 'react';
import { fabric } from 'fabric';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export const useCanvasInitialization = (subject: string) => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  const initializeCanvas = async () => {
    const canvasElement = document.getElementById('canvas') as HTMLCanvasElement;
    if (!canvasElement) return;

    const fabricCanvas = new fabric.Canvas('canvas', {
      isDrawingMode: true,
      width: canvasElement.offsetWidth,
      height: 600,
      backgroundColor: '#ffffff',
    });

    setCanvas(fabricCanvas);
    await loadNotes(fabricCanvas);
  };

  const loadNotes = async (fabricCanvas: fabric.Canvas) => {
    try {
      const { data: notesData, error } = await supabase
        .from('notes')
        .select('content')
        .eq('subject', subject)
        .single();

      if (error) {
        console.error('Error loading notes:', error);
        return;
      }

      if (notesData?.content) {
        fabricCanvas.loadFromJSON(notesData.content, () => {
          fabricCanvas.renderAll();
          console.log('Notes loaded successfully');
        });
      }
    } catch (error) {
      console.error('Error loading notes:', error);
    }
  };

  useEffect(() => {
    initializeCanvas();
    return () => {
      if (canvas) {
        canvas.dispose();
      }
    };
  }, []);

  return { canvas, initializeCanvas };
};