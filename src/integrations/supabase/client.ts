import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://oljnzbzuwesjkhoosngw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sam56Ynp1d2Vzamtob29zbmd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2ODQyNDQsImV4cCI6MjA1MDI2MDI0NH0.2SA1ldKWEbDcO8yzYbBoU-kgeEGzWiRNqwdXgo7hirc";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);