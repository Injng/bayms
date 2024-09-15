// @ts-nocheck
/**
 * (c) Copyright BAYMS
 *
 * Original Author:     Lin Jiang
 * License:             MIT License
 *
 * Provides signout action.
 **/

import { redirect } from '@sveltejs/kit'
import type { Actions } from './$types'

export async function load({ locals: { supabase } }) {
    // get events
    let { data: events, error } = await supabase.from('events').select('*').order('date', { ascending: true });
    if (events.length > 3) {
        events = events.slice(0, 3);
    }

    // get user
    const { data: { user } } = await supabase.auth.getUser()

    return {
        events: events ?? [],
        user: user ?? null,
    };
}

export const actions = {
  logout: async ({ request, locals: { supabase } }: import('./$types').RequestEvent) => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error(error)
      return redirect(303, '/auth/error')
    } else {
      return redirect(303, '/')
    }
  },
}
;null as any as Actions;