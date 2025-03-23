import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rftnajaquvoddvgqwxgg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmdG5hamFxdXZvZGR2Z3F3eGdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2NjM0NTAsImV4cCI6MjA1ODIzOTQ1MH0.BaoGZO7keNI7D9boxsLB2BHWEvlslCgJF-O7QoeP_CM';

export const supabaseClient = createClient(supabaseUrl, supabaseKey);
