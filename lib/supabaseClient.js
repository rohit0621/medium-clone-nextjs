import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://cyhbbnsznumqbjjrruje.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5aGJibnN6bnVtcWJqanJydWplIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0OTM0MzIsImV4cCI6MTk5MzA2OTQzMn0.tpKF1OXwG-_F9W2PsPg-rcnJWp_oeWoqyNv-bYttsx0')