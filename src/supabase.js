
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://fhftyftrcklhzvijooqx.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoZnR5ZnRyY2tsaHp2aWpvb3F4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2OTE4MTksImV4cCI6MjA0ODI2NzgxOX0.EfgePd_TnUKAlCriTUUsua-8b-477tQ2f3uu1PYPQ3o"
export const SupabaseClient = createClient(supabaseUrl, supabaseKey)
