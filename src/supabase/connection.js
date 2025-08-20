import { createClient } from "@supabase/supabase-js"

const SUPABASE_URL = 'https://xatdgiubfgoyzirhdqhg.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhdGRnaXViZmdveXppcmhkcWhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5NzA0NzksImV4cCI6MjA2OTU0NjQ3OX0.ACh_aADjp6Mi06XF6Ojh4T0iFwMUV89Nhrz4hL8qDiQ'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)