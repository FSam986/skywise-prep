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
  console.log('ChapterContent received chapter:', chapter);

  if (!chapter) {
    console.warn('No chapter content available');
    return (
      <div className="flex items-center justify-center h-full p-8">
        <p className="text-muted-foreground">Select a chapter to view its content</p>
      </div>
    );
  }

  console.log('Chapter content:', chapter.content);

  // Parse the content string into paragraphs
  const paragraphs = chapter.content.split('\n').filter(p => p.trim().length > 0);
  console.log('Parsed paragraphs:', paragraphs);

  return (
    <Card className="h-full border-0">
      <CardHeader className="bg-muted/50">
        <CardTitle>Chapter {chapter.chapter_number}: {chapter.chapter_title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <ScrollArea className="h-[calc(100vh-300px)]">
          <div className="prose prose-sm max-w-none dark:prose-invert">
            {paragraphs.map((paragraph, index) => {
              // Handle headings
              if (paragraph.startsWith('#')) {
                const level = paragraph.match(/^#+/)[0].length;
                const text = paragraph.replace(/^#+\s*/, '');
                const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
                return (
                  <HeadingTag 
                    key={index} 
                    className={`font-bold ${level === 1 ? 'text-2xl mt-0' : 'text-xl mt-6'} mb-4`}
                  >
                    {text}
                  </HeadingTag>
                );
              }
              
              // Handle nested list items
              if (paragraph.startsWith('  - ')) {
                // Nested list item
                const text = paragraph.replace(/^\s*-\s*/, '');
                return (
                  <li key={index} className="ml-12 mb-2 text-base list-disc">
                    {text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
                  </li>
                );
              }
              
              // Handle main list items
              if (paragraph.startsWith('- ')) {
                const text = paragraph.replace(/^-\s*/, '');
                return (
                  <li key={index} className="ml-6 mb-2 text-base font-semibold list-none">
                    {text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
                  </li>
                );
              }
              
              // Regular paragraphs
              return (
                <p key={index} className="mb-4 text-base leading-relaxed">
                  {paragraph.trim()}
                </p>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};