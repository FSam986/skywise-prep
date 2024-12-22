import React from 'react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface ChapterListProps {
  chapters: Array<{
    chapter_number: number;
    chapter_title: string;
  }>;
  selectedChapter: number | null;
  onSelectChapter: (chapterNumber: number) => void;
}

export const ChapterList = ({ chapters, selectedChapter, onSelectChapter }: ChapterListProps) => {
  return (
    <ScrollArea className="h-[calc(100vh-200px)]">
      <div className="space-y-2 p-2">
        {chapters.map((chapter) => (
          <Button
            key={chapter.chapter_number}
            variant="ghost"
            className={cn(
              "w-full justify-start text-left",
              selectedChapter === chapter.chapter_number && "bg-accent"
            )}
            onClick={() => onSelectChapter(chapter.chapter_number)}
          >
            Chapter {chapter.chapter_number}: {chapter.chapter_title}
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
};