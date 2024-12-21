import { useCanvasInitialization } from './useCanvasInitialization';
import { useCanvasTools } from './useCanvasTools';
import { useCanvasExport } from './useCanvasExport';
import { useCanvasPersistence } from './useCanvasPersistence';

export const useCanvas = (subject: string) => {
  const { canvas, initializeCanvas } = useCanvasInitialization(subject);
  const { setDrawingTool, addText, clearCanvas } = useCanvasTools(canvas);
  const { exportCanvas } = useCanvasExport(canvas);
  const { saveNotes } = useCanvasPersistence(canvas, subject);

  return {
    canvas,
    initializeCanvas,
    setDrawingTool,
    saveNotes,
    addText,
    exportCanvas,
    clearCanvas,
  };
};