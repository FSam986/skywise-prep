import { fabric } from 'fabric';
import { toast } from 'sonner';

export const useCanvasTools = (canvas: fabric.Canvas | null) => {
  const setDrawingTool = (tool: string) => {
    if (!canvas) return;

    switch (tool) {
      case 'pen':
        canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
        break;
      case 'eraser':
        canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
        break;
      case 'highlighter':
        canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
        canvas.freeDrawingBrush.width = 20;
        canvas.freeDrawingBrush.opacity = 0.3;
        break;
      default:
        canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
    }
  };

  const addText = () => {
    if (!canvas) return;
    const text = new fabric.IText('Click to edit', {
      left: 100,
      top: 100,
      fontSize: 20,
    });
    canvas.add(text);
    canvas.setActiveObject(text);
    canvas.renderAll();
  };

  const clearCanvas = () => {
    if (!canvas) return;
    canvas.clear();
    canvas.backgroundColor = '#ffffff';
    canvas.renderAll();
    toast.success('Canvas cleared');
  };

  return { setDrawingTool, addText, clearCanvas };
};