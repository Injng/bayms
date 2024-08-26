/**
 * (c) Copyright BAYMS
 *
 * Original Author:     Lin Jiang
 * License:             MIT License
 *
 * Provides action on password reset form submission.
 **/
 
import { redirect } from '@sveltejs/kit'

import type { Actions } from './$types'

export const actions: Actions = {
  reset: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()
    const new_password = formData.get('password') as string

    const { error } = await supabase.auth.updateUser({ password: new_password })
    if (error) {
      console.error(error)
      return redirect(303, '/auth/reset-error')
    } else {
      return redirect(303, '/')
    }
  },
}
