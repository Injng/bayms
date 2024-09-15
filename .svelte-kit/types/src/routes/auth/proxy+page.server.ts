// @ts-nocheck
/**
 * (c) Copyright BAYMS
 *
 * Original Author:     Lin Jiang
 * License:             MIT License
 *
 * Provides action on login form submit to hand authentication.
 **/
 
import { redirect } from '@sveltejs/kit'

import type { Actions } from './$types'

export const actions = {
  login: async ({ request, locals: { supabase } }: import('./$types').RequestEvent) => {
    const formData = await request.formData()
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      console.error(error)
      return redirect(303, '/auth/error')
    } else {
      return redirect(303, '/')
    }
  },
};null as any as Actions;