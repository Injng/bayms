/**
 * (c) Copyright BAYMS
 *
 * Original Author:     Lin Jiang
 * License:             MIT License
 *
 * Provides member data from the database.
 **/

import { supabase } from "$lib/supabaseClient";
import { redirect } from '@sveltejs/kit'
import type { Actions } from './$types'

function getPictureUrl(filePath: string) {
    if (filePath === null || filePath === "") {
        return ""
    } else {
        const { data } = supabase.storage.from('portraits').getPublicUrl(filePath)
        return data.publicUrl
    }
}

export async function load() {
    let { data: members, error } = await supabase.from('members').select('*')

    // only provide picture, name, instrument, grade, and bio data
    members = members.map(member => {
        console.log!(getPictureUrl(member.picture))
        return {
            picture: getPictureUrl(member.picture),
            name: member.name,
            instruments: member.instruments,
            bio: member.bio,
            grade: member.grade,
        }
    })
    return {
        members: members ?? [],
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
