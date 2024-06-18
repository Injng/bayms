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

export async function load() {
       let { data: members, error } = await supabase.from('members').select('*')
       // only provide picture, name, instrument, grade, and bio data
       members = members.map(member => {
              return {
                     picture: member.picture,
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
