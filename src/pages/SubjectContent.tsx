import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";
import { ChapterList } from '@/components/study/ChapterList';
import { ChapterContent } from '@/components/study/ChapterContent';
import { BackButton } from '@/components/BackButton';

interface Chapter {
  id: string;
  license_type: 'ppl' | 'cpl' | 'atpl';
  subject: string;
  chapter_number: number;
  chapter_title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

const SubjectContent = () => {
  const { licenseType, subject } = useParams();
  const [selectedChapter, setSelectedChapter] = React.useState<number | null>(1); // Default to first chapter

  console.log('Current route params:', { licenseType, subject }); // Debug log

  const { data: chapters = [], isLoading } = useQuery<Chapter[]>({
    queryKey: ['chapters', licenseType, subject],
    queryFn: async () => {
      console.log('Fetching chapters for:', { licenseType, subject }); // Debug log
      const { data, error } = await supabase
        .from('subject_chapters')
        .select('*')
        .eq('license_type', licenseType?.toLowerCase())
        .eq('subject', subject?.toLowerCase())
        .order('chapter_number');

      if (error) {
        console.error('Error fetching chapters:', error);
        throw error;
      }
      console.log('Fetched chapters:', data);
      return data;
    },
  });

  const selectedChapterContent = chapters.find(
    (chapter) => chapter.chapter_number === selectedChapter
  );

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <BackButton />
      <h1 className="text-3xl font-bold mb-8 capitalize">
        {subject?.replace(/-/g, ' ')} - {licenseType?.toUpperCase()}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
        <div className="bg-card rounded-lg p-4 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Chapters</h2>
          {chapters.length === 0 ? (
            <p className="text-muted-foreground">No chapters available</p>
          ) : (
            <ChapterList
              chapters={chapters}
              selectedChapter={selectedChapter}
              onSelectChapter={setSelectedChapter}
            />
          )}
        </div>
        <div className="bg-card rounded-lg shadow-sm">
          <ChapterContent chapter={selectedChapterContent} />
        </div>
      </div>
    </div>
  );
};

export default SubjectContent;