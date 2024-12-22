import React from 'react';
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";

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

interface ChapterListProps {
  chapters: Chapter[];
  selectedChapter: number | null;
  onSelectChapter: (chapterNumber: number) => void;
}

export const ChapterList = ({ chapters, selectedChapter, onSelectChapter }: ChapterListProps) => {
  return (
    <div className="space-y-2">
      {chapters.map((chapter) => (
        <Button
          key={chapter.id}
          variant={selectedChapter === chapter.chapter_number ? "secondary" : "ghost"}
          className="w-full justify-start gap-2 text-left"
          onClick={() => onSelectChapter(chapter.chapter_number)}
        >
          <Book className="h-4 w-4" />
          <span className="truncate">
            Chapter {chapter.chapter_number}: {chapter.chapter_title}
          </span>
        </Button>
      ))}
    </div>
  );
};