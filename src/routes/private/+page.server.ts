/**
 * (c) Copyright BAYMS
 *
 * Original Author:     Lin Jiang
 * License:             MIT License
 *
 * Loads the dashboard form with database info and provides action on form save.
 **/

import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { Actions } from "./$types";
import type { SupabaseClient } from "@supabase/supabase-js";

interface LocalsWithSupabase {
  supabase: SupabaseClient;
}

let email: string = "";

export const load: PageServerLoad = async ({
  parent,
  locals: { supabase },
}: {
  parent: () => Promise<any>;
  locals: LocalsWithSupabase;
}) => {
  const data = await parent();
  email = data.session.user.email;

  // first check if user is a member
  let { data: memberInfo } = await supabase
    .from("members")
    .select("*")
    .eq("email", email);

  // if not a member, check if they're an applicant
  let userInfo = memberInfo;
  if (!memberInfo || memberInfo.length === 0) {
    let { data: applicantInfo } = await supabase
      .from("applicants")
      .select("*")
      .eq("email", email);
    userInfo = applicantInfo;
  }

  let { data: events } = await supabase
    .from("events")
    .select("*")
    .order("date", { ascending: true });

  let { data: locations } = await supabase.from("locations").select("*");

  let { data: roles } = await supabase
    .from("roles")
    .select("*")
    .eq("email", email);

  return {
    user: userInfo ?? [],
    events: events ?? [],
    locations: locations ?? [],
    roles: roles ?? [],
  };
};

export const actions: Actions = {
  save: async ({
    request,
    locals: { supabase },
  }: {
    request: Request;
    locals: LocalsWithSupabase;
  }) => {
    const formData = await request.formData();

    // common fields for both members and applicants
    const updateFields = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      "address/street": formData.get("address-street") as string,
      "address/city": formData.get("address-city") as string,
      "address/state": formData.get("address-state") as string,
      "address/zip": formData.get("address-zip") as string,
      school: formData.get("school") as string,
      grade: formData.get("grade") as string,
      birthday: formData.get("birthday") as string,
      picture: "",
      bio: (formData.get("biography") as string)?.substring(0, 650),
      instruments: formData.getAll("instruments") as string[],
      "parent1/name": formData.get("parent1-name") as string,
      "parent1/phone": formData.get("parent1-phone") as string,
      "parent1/email": formData.get("parent1-email") as string,
      "parent2/name": formData.get("parent2-name") as string,
      "parent2/phone": formData.get("parent2-phone") as string,
      "parent2/email": formData.get("parent2-email") as string,
    };

    // handle picture upload
    const picture = formData.get("picture") as File;
    if (picture && picture.size > 0 && picture.size <= 5242880) {
      const { error: uploadError } = await supabase.storage
        .from("portraits")
        .upload(picture.name, picture);

      if (uploadError) {
        console.error(uploadError);
        return redirect(303, "/private/error");
      }

      updateFields.picture = picture.name;
    }

    // check if user is in members or applicants table
    const { data: memberCheck } = await supabase
      .from("members")
      .select("email")
      .eq("email", email);

    const targetTable =
      memberCheck && memberCheck.length > 0 ? "members" : "applicants";
    console.log(targetTable);

    // update the appropriate table
    const { error } = await supabase
      .from(targetTable)
      .update(updateFields)
      .eq("email", email)
      .select();

    if (error) {
      console.error(error);
      return redirect(303, "/private/error");
    }

    return redirect(303, "/private");
  },

  event: async ({
    request,
    locals: { supabase },
  }: {
    request: Request;
    locals: LocalsWithSupabase;
  }) => {
    const formData = await request.formData();
    const { error } = await supabase
      .from("events")
      .insert([
        {
          name: formData.get("name") as string,
          description: formData.get("description") as string,
          date: formData.get("date") as string,
          time: formData.get("time") as string,
        },
      ])
      .select();

    if (error) {
      return redirect(303, "/private/error");
    }
    return redirect(303, "/private");
  },

  location: async ({
    request,
    locals: { supabase },
  }: {
    request: Request;
    locals: LocalsWithSupabase;
  }) => {
    const formData = await request.formData();
    const { error } = await supabase
      .from("locations")
      .insert([
        {
          name: formData.get("name") as string,
          description: formData.get("description") as string,
        },
      ])
      .select();

    if (error) {
      return redirect(303, "/private/error");
    }
    return redirect(303, "/private");
  },

  logout: async ({
    request,
    locals: { supabase },
  }: {
    request: Request;
    locals: LocalsWithSupabase;
  }) => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
      return redirect(303, "/private/error");
    }
    return redirect(303, "/");
  },
};
