/**
 * (c) Copyright BAYMS
 *
 * Original Author:     Lin Jiang
 * License:             MIT License
 *
 * Loads the dashboard form with database info and provides action on form save.
 **/
 
import { supabase } from '$lib/supabaseClient.js'
import { redirect } from '@sveltejs/kit'
import { writeFileSync } from 'fs'

import type { Actions } from './$types'

let email: string = ""

export async function load({ parent }) {
       const data = await parent()
       email = data.session.user.email
       let { data: info, error } = await supabase.from('members').select('*').eq('email', data.session.user.email)
       return {
       	      user: info ?? [],
       };
}

export const actions: Actions = {
  save: async ({ request, locals: { supabase } }) => {
    // get form data
    const formData = await request.formData()
    const name = formData.get('name') as string
    const phone = formData.get('phone') as string
    const street = formData.get('address-street') as string
    const city = formData.get('address-city') as string
    const state = formData.get('address-state') as string
    const zip = formData.get('address-zip') as string
    const school = formData.get('school') as string
    const grade = formData.get('grade') as string
    const birthday = formData.get('birthday') as string
    const picture = formData.get('picture') as File
    const bio = formData.get('biography') as string
    const p1Name = formData.get('parent1-name') as string
    const p1Phone = formData.get('parent1-phone') as string
    const p1Email = formData.get('parent1-email') as string
    const p2Name = formData.get('parent2-name') as string
    const p2Phone = formData.get('parent2-phone') as string
    const p2Email = formData.get('parent2-email') as string

    // validate sizes
    if (picture.size > 5242880) {
       alert("Picture is too big!");
    }
    if (bio.length > 650) {
       alert("Bio is too long!");
       bio = ""
    }
       
    // update database and write picture to file
    console.log(picture)
    if (picture.size != 0 && picture.size <= 5242880) {
       writeFileSync(`static/pictures/${picture.name}`, Buffer.from(await picture.arrayBuffer()))
    }
    
    const { data, error } = await supabase.from('members')
    	  .update({ phone: phone,
    	            name: name,
	            'address/street': street,
	            'address/city': city,
	            'address/state': state,
	            'address/zip': zip,
	            school: school,
	            grade: grade,
	            birthday: birthday,
	            picture: picture.name,
	            bio: bio,
	            'parent1/name': p1Name,
	            'parent1/phone': p1Phone,
	            'parent1/email': p1Email,
	            'parent2/name': p2Name,
	            'parent2/phone': p2Phone,
	            'parent2/email': p2Email})
	  .eq('email', email)
	  .select()
    console.log(error)
    return redirect(303, '/private')
  },
}