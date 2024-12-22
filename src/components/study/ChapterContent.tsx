import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChapterContentProps {
  chapter: {
    chapter_number: number;
    chapter_title: string;
    content: string;
  } | null;
}

export const ChapterContent = ({ chapter }: ChapterContentProps) => {
  if (!chapter) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Select a chapter to view its content</p>
      </div>
    );
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Chapter {chapter.chapter_number}: {chapter.chapter_title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-300px)]">
          <div className="prose prose-sm max-w-none">
            {chapter.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};