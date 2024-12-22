import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertTriangle, BookOpen, Info } from "lucide-react";

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

  const getIcon = (text: string) => {
    if (text.toLowerCase().includes('warning') || text.toLowerCase().includes('caution')) {
      return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    }
    if (text.toLowerCase().includes('introduction')) {
      return <Info className="h-5 w-5 text-blue-500" />;
    }
    return <BookOpen className="h-5 w-5 text-gray-500" />;
  };

  return (
    <Card className="h-full border-0 bg-white dark:bg-gray-900">
      <CardHeader className="bg-muted/50 sticky top-0 z-10 backdrop-blur-sm">
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-6 w-6" />
          Chapter {chapter.chapter_number}: {chapter.chapter_title}
        </CardTitle>
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
                    className={`flex items-center gap-2 font-bold ${
                      level === 1 ? 'text-2xl mt-0' : 'text-xl mt-6'
                    } mb-4`}
                  >
                    {level <= 2 && getIcon(text)}
                    {text}
                  </HeadingTag>
                );
              }
              
              // Handle nested list items
              if (paragraph.startsWith('  - ')) {
                const text = paragraph.replace(/^\s*-\s*/, '');
                return (
                  <li key={index} className="ml-12 mb-2 text-base list-disc">
                    {text}
                  </li>
                );
              }
              
              // Handle main list items
              if (paragraph.startsWith('- ')) {
                const text = paragraph.replace(/^-\s*/, '');
                return (
                  <li key={index} className="ml-6 mb-2 text-base font-semibold list-none">
                    {text}
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