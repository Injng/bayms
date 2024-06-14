import { createClient } from '@supabase/supabase-js'
import { env } from '$env/dynamic/private';

export const supabase = createClient(env.DATA_URL, env.DATA_KEY)