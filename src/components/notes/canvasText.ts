import { fabric } from 'fabric';

export const addTextToCanvas = (canvas: fabric.Canvas, color: string) => {
  const text = new fabric.IText('Click to edit', {
    left: 100,
    top: 100,
    fontFamily: 'Arial',
    fontSize: 20,
    fill: color,
  });
  
  canvas.add(text);
  canvas.setActiveObject(text);
  canvas.renderAll();
  
  return text;
};