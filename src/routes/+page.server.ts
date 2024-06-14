import { supabase } from "$lib/supabaseClient";

export async function load() {
       let { data: events, error } = await supabase.from('events').select('*')
       return {
       	      events: events ?? [],
       };
}
