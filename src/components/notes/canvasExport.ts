import { fabric } from 'fabric';
import { jsPDF } from 'jspdf';
import { toast } from "sonner";

export const exportCanvasToImage = (canvas: fabric.Canvas) => {
  try {
    const dataUrl = canvas.toDataURL({
      format: 'png',
      quality: 1
    });
    const link = document.createElement('a');
    link.download = `notes.png`;
    link.href = dataUrl;
    link.click();
    toast.success('Notes exported as PNG');
  } catch (error) {
    console.error('Error exporting as PNG:', error);
    toast.error('Failed to export as PNG');
  }
};

export const exportCanvasToPDF = (canvas: fabric.Canvas) => {
  try {
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
    pdf.save('notes.pdf');
    toast.success('Notes exported as PDF');
  } catch (error) {
    console.error('Error exporting as PDF:', error);
    toast.error('Failed to export as PDF');
  }
};