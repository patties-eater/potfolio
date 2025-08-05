import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yphmzpmibnqloqgmujkq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwaG16cG1pYm5xbG9xZ211amtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxNDU2NDcsImV4cCI6MjA2OTcyMTY0N30.GQIcZVYzIEo0rre-EKlB3kKlPTeKujrNlhic3wgNe4I'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)


