import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oljnzbzuwesjkhoosngw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sam56Ynp1d2Vzamtob29zbmd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4MjYwNjIsImV4cCI6MjAyMDQwMjA2Mn0.1eTrZeU3mTXcPvnNQPGEjnMHhQY2bwbTyFTQZw_Q0Oc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

console.log("Supabase initialized with URL:", supabaseUrl);