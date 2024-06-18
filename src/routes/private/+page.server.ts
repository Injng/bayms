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
    let { data: info, err1 } = await supabase.from('members').select('*').eq('email', data.session.user.email)
    let { data: events, err2 } = await supabase.from('events').select('*').order('date', { ascending: true })
    let { data: locations, err3 } = await supabase.from('locations').select('*')
    return {
        user: info ?? [],
        events: events ?? [],
        locations: locations ?? []
    };
}

export const actions: Actions = {
    event: async ({ request, locals: { supabase } }) => {
        const formData = await request.formData()
        let name = formData.get('name') as string
        let description = formData.get('description') as string
        let date = formData.get('date') as string
        let time = formData.get('time') as string
        const { data, error } = await supabase.from('events').insert([{ name: name, description: description, date: date, time: time }]).select()
        return redirect(303, '/private')
    },

    location: async ({ request, locals: { supabase } }) => {
        const formData = await request.formData()
        let name = formData.get('name') as string
        let description = formData.get('description') as string
        const { data, error } = await supabase.from('locations').insert([{ name: name, description: description }]).select()
        return redirect(303, '/private')
    },

    save: async ({ request, locals: { supabase } }) => {
        // get form data
        const formData = await request.formData()
        let name = formData.get('name') as string
        let phone = formData.get('phone') as string
        let street = formData.get('address-street') as string
        let city = formData.get('address-city') as string
        let state = formData.get('address-state') as string
        let zip = formData.get('address-zip') as string
        let school = formData.get('school') as string
        let grade = formData.get('grade') as string
        let birthday = formData.get('birthday') as string
        let picture = formData.get('picture') as File
        let bio = formData.get('biography') as string
        let instruments = formData.getAll('instruments') as string[]
        let p1Name = formData.get('parent1-name') as string
        let p1Phone = formData.get('parent1-phone') as string
        let p1Email = formData.get('parent1-email') as string
        let p2Name = formData.get('parent2-name') as string
        let p2Phone = formData.get('parent2-phone') as string
        let p2Email = formData.get('parent2-email') as string

        // validate sizes
        if (bio.length > 650) {
            bio = ""
        }

        // update database and write picture to file
        if (picture.size != 0 && picture.size <= 5242880) {
            writeFileSync(`static/pictures/${picture.name}`, Buffer.from(await picture.arrayBuffer()))
        }

        const { data, error } = await supabase.from('members')
                .update({ 
                    phone: phone,
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
                    instruments: instruments,
                    'parent1/name': p1Name,
                    'parent1/phone': p1Phone,
                    'parent1/email': p1Email,
                    'parent2/name': p2Name,
                    'parent2/phone': p2Phone,
                    'parent2/email': p2Email})
                .eq('email', email)
                .select()
        return redirect(303, '/private')
    },
}
