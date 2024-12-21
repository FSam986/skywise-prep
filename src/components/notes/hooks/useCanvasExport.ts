import { fabric } from 'fabric';
import { jsPDF } from 'jspdf';
import { toast } from 'sonner';

export const useCanvasExport = (canvas: fabric.Canvas | null) => {
  const exportCanvas = async (type: 'pdf' | 'png') => {
    if (!canvas) return;

    try {
      if (type === 'pdf') {
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'px',
          format: [canvas.width || 800, canvas.height || 600]
        });
        
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage({
          imageData: imgData,
          format: 'PNG',
          x: 10,
          y: 10,
          width: canvas.width || 800,
          height: canvas.height || 600
        });
        pdf.save('notes.pdf');
      } else {
        const link = document.createElement('a');
        link.download = 'notes.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      }
      toast.success(`Notes exported as ${type.toUpperCase()}`);
    } catch (error) {
      console.error('Error exporting canvas:', error);
      toast.error('Failed to export notes');
    }
  };

  return { exportCanvas };
};