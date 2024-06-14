import { supabase } from "$lib/supabaseClient";
import { redirect } from '@sveltejs/kit'
import type { Actions } from './$types'

export async function load() {
       let { data: events, error } = await supabase.from('events').select('*')
       return {
       	      events: events ?? [],
       };
}

export const actions: Actions = {
  logout: async ({ request, locals: { supabase } }) => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error(error)
      return redirect(303, '/auth/error')
    } else {
      return redirect(303, '/')
    }
  },
}