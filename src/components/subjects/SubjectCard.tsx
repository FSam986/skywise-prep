import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Topic {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
}

interface SubjectCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  topics?: Topic[];
  path?: string;
  onNavigate: (path: string) => void;
}

export const SubjectCard = ({ 
  title, 
  description, 
  icon: Icon, 
  topics, 
  path, 
  onNavigate 
}: SubjectCardProps) => {
  return (
    <Card 
      className={`hover:shadow-lg transition-shadow ${!topics ? 'cursor-pointer' : ''}`}
      onClick={() => !topics && path && onNavigate(path)}
    >
      <CardHeader>
        <div className="flex justify-center mb-4">
          <Icon className="h-8 w-8 text-secondary" />
        </div>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {!topics ? (
          <p className="text-center text-sm text-gray-600">{description}</p>
        ) : (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="topics">
              <AccordionTrigger className="text-sm">
                View Topics
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {topics.map((topic) => {
                    const TopicIcon = topic.icon;
                    return (
                      <div
                        key={topic.title}
                        className="p-2 hover:bg-accent rounded-md cursor-pointer flex items-center gap-2"
                        onClick={() => onNavigate(topic.path)}
                      >
                        <TopicIcon className="h-4 w-4" />
                        <span className="text-sm">{topic.title}</span>
                      </div>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </CardContent>
    </Card>
  );
};