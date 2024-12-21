export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      notes: NotesTable;
      profiles: ProfilesTable;
      question_attempts: QuestionAttemptsTable;
      quiz_progress: QuizProgressTable;
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}

interface NotesTable {
  Row: {
    content: Json;
    created_at: string;
    id: string;
    subject: string;
    updated_at: string;
    user_id: string;
  };
  Insert: {
    content?: Json;
    created_at?: string;
    id?: string;
    subject: string;
    updated_at?: string;
    user_id: string;
  };
  Update: {
    content?: Json;
    created_at?: string;
    id?: string;
    subject?: string;
    updated_at?: string;
    user_id?: string;
  };
  Relationships: never[];
}

interface ProfilesTable {
  Row: {
    avatar_url: string | null;
    created_at: string;
    id: string;
    username: string | null;
  };
  Insert: {
    avatar_url?: string | null;
    created_at?: string;
    id: string;
    username?: string | null;
  };
  Update: {
    avatar_url?: string | null;
    created_at?: string;
    id: string;
    username?: string | null;
  };
  Relationships: never[];
}

interface QuestionAttemptsTable {
  Row: {
    id: string;
    user_id: string;
    category: string;
    question_id: number;
    status: string;
    created_at: string;
  };
  Insert: {
    id?: string;
    user_id: string;
    category: string;
    question_id: number;
    status: string;
    created_at?: string;
  };
  Update: {
    id?: string;
    user_id?: string;
    category?: string;
    question_id?: number;
    status?: string;
    created_at?: string;
  };
  Relationships: never[];
}

interface QuizProgressTable {
  Row: {
    average_time: number | null;
    category: string;
    created_at: string | null;
    id: string;
    last_quiz_date: string | null;
    questions_completed: number | null;
    streak_days: number | null;
    total_questions: number | null;
    updated_at: string | null;
    user_id: string;
  };
  Insert: {
    average_time?: number | null;
    category: string;
    created_at?: string | null;
    id?: string;
    last_quiz_date?: string | null;
    questions_completed?: number | null;
    streak_days?: number | null;
    total_questions?: number | null;
    updated_at?: string | null;
    user_id: string;
  };
  Update: {
    average_time?: number | null;
    category?: string;
    created_at?: string | null;
    id?: string;
    last_quiz_date?: string | null;
    questions_completed?: number | null;
    streak_days?: number | null;
    total_questions?: number | null;
    updated_at?: string | null;
    user_id?: string;
  };
  Relationships: never[];
}