import { createClient } from '@supabase/supabase-js'

// Ref: https://supabase.com/docs/guides/getting-started/quickstarts/nextjs
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
)
