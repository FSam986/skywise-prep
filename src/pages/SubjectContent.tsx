import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";
import { ChapterList } from '@/components/study/ChapterList';
import { ChapterContent } from '@/components/study/ChapterContent';
import { Separator } from '@/components/ui/separator';

const SubjectContent = () => {
  const { licenseType, subject } = useParams();
  const [selectedChapter, setSelectedChapter] = React.useState<number | null>(null);

  const { data: chapters = [], isLoading } = useQuery({
    queryKey: ['chapters', licenseType, subject],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('subject_chapters')
        .select('*')
        .eq('license_type', licenseType)
        .eq('subject', subject)
        .order('chapter_number');

      if (error) throw error;
      return data;
    },
  });

  const selectedChapterContent = chapters.find(
    (chapter) => chapter.chapter_number === selectedChapter
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">
        {subject} - {licenseType?.toUpperCase()}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Chapters</h2>
          <ChapterList
            chapters={chapters}
            selectedChapter={selectedChapter}
            onSelectChapter={setSelectedChapter}
          />
        </div>
        <Separator orientation="vertical" className="hidden md:block" />
        <div>
          <ChapterContent chapter={selectedChapterContent} />
        </div>
      </div>
    </div>
  );
};

export default SubjectContent;