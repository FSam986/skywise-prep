import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

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
      className="hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => path && onNavigate(path)}
    >
      <CardHeader>
        <div className="flex justify-center mb-4">
          <Icon className="h-8 w-8 text-secondary" />
        </div>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};