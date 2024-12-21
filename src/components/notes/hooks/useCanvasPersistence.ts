import { fabric } from 'fabric';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export const useCanvasPersistence = (canvas: fabric.Canvas | null, subject: string) => {
  const saveNotes = async () => {
    if (!canvas) return;

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error('You must be logged in to save notes');
        return;
      }

      const { error } = await supabase.from('notes').upsert({
        subject,
        content: canvas.toJSON(),
        user_id: user.id,
        updated_at: new Date().toISOString(),
      });

      if (error) throw error;
      console.log('Notes saved successfully');
    } catch (error) {
      console.error('Error saving notes:', error);
      toast.error('Failed to save notes');
    }
  };

  return { saveNotes };
};