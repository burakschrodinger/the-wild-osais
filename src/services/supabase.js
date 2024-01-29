import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tuqheonmndmlyxsxjlyf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1cWhlb25tbmRtbHl4c3hqbHlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU2MDgzMjYsImV4cCI6MjAyMTE4NDMyNn0.nB-io3sWfS6CJenBP_223rR3JjoLEF0fTCATPSiQJ74";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
