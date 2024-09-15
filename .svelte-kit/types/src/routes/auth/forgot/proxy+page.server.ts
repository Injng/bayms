// @ts-nocheck
/**
 * (c) Copyright BAYMS
 *
 * Original Author:     Lin Jiang
 * License:             MIT License
 *
 * Provides action on password forgot form submission.
 **/
 
import { redirect } from '@sveltejs/kit'

import type { Actions } from './$types'

export const actions = {
  forgot: async ({ request, locals: { supabase } }: import('./$types').RequestEvent) => {
    const formData = await request.formData()
    const email = formData.get('email') as string

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'http://localhost:5173/private/reset',
    })
    if (error) {
      console.error(error)
      return redirect(303, '/auth/error')
    } else {
      return redirect(303, '/')
    }
  },
}
;null as any as Actions;