import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ckhbyqvrtmndvcvrzrdk.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNraGJ5cXZydG1uZHZjdnJ6cmRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyMDkzMzUsImV4cCI6MjA1MTc4NTMzNX0.9o6g8EZg7cV5HGFyL13fhPdDXWbKUGJNWg_mEQBNLJE'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
