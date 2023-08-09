import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vfaaduofekcoxekbemip.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmYWFkdW9mZWtjb3hla2JlbWlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyNDAxNDEsImV4cCI6MjAwNjgxNjE0MX0.2GQeqZQuDpRtuxewXbfb61TeCB4UTFDPUbw3oSuHm_8";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
