// @ts-nocheck
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

// format phone number universally
function formatPhoneNumber(phone: string): string {
  if (!phone) return "";

  // remove all non-digit characters
  const cleaned = phone.replace(/\D/g, "");

  // if it's a US/Canada number (10 or 11 digits)
  if (
    cleaned.length === 10 ||
    (cleaned.length === 11 && cleaned.startsWith("1"))
  ) {
    // remove leading 1 if present
    const digits = cleaned.length === 11 ? cleaned.substring(1) : cleaned;
    // format as (XXX) XXX-XXXX
    return `(${digits.substring(0, 3)}) ${digits.substring(3, 6)}-${digits.substring(6)}`;
  }

  // for international numbers:
  // if longer than 7 digits, group in chunks of 2-3 from the right
  if (cleaned.length >= 7) {
    let formatted = "";
    let remaining = cleaned;

    // add last 4 digits
    formatted = remaining.slice(-4);
    remaining = remaining.slice(0, -4);

    // add next 3 digits
    if (remaining.length > 0) {
      formatted = remaining.slice(-3) + "-" + formatted;
      remaining = remaining.slice(0, -3);
    }

    // add remaining digits in groups of 2-3
    while (remaining.length > 0) {
      if (remaining.length > 3) {
        formatted = remaining.slice(-3) + "-" + formatted;
        remaining = remaining.slice(0, -3);
      } else {
        formatted = remaining + "-" + formatted;
        remaining = "";
      }
    }

    return formatted;
  }

  // for very short numbers, just return as is
  return cleaned;
}

export const load = async ({
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

  let { data: members } = await supabase.from("members").select("*");
  members = members ?? [];
  // replace all null values with empty string and format phone numbers
  members = members.map((member) => {
    for (const key in member) {
      if (member[key] === null) {
        member[key] = "";
      }
      // Format phone numbers
      if (key === "phone") {
        member[key] = formatPhoneNumber(member[key]);
      }
      if (key === "parent1/phone") {
        member[key] = formatPhoneNumber(member[key]);
      }
      if (key === "parent2/phone") {
        member[key] = formatPhoneNumber(member[key]);
      }
    }
    return member;
  });

  let { data: applicants } = await supabase.from("applicants").select("*");
  applicants = applicants ?? [];
  // replace all null values with empty string and format phone numbers
  applicants = applicants.map((applicant) => {
    for (const key in applicant) {
      if (applicant[key] === null) {
        applicant[key] = "";
      }
      // Format phone numbers
      if (key === "phone") {
        applicant[key] = formatPhoneNumber(applicant[key]);
      }
      if (key === "parent1/phone") {
        applicant[key] = formatPhoneNumber(applicant[key]);
      }
      if (key === "parent2/phone") {
        applicant[key] = formatPhoneNumber(applicant[key]);
      }
    }
    return applicant;
  });

  return {
    user: userInfo ?? [],
    events: events ?? [],
    locations: locations ?? [],
    roles: roles ?? [],
    members: members ?? [],
    applicants: applicants ?? [],
  };
};

export const actions = {
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

  accept: async ({ request, locals: { supabase } }: import('./$types').RequestEvent) => {
    const formData = await request.formData();
    const email = formData.get("email") as string;

    // get applicant data
    const { data: applicant } = await supabase
      .from("applicants")
      .select("*")
      .eq("email", email)
      .single();

    console.log(applicant);

    if (applicant) {
      // insert into members
      await supabase.from("members").insert(applicant);
      // delete from applicants
      await supabase.from("applicants").delete().eq("email", email);
    }

    return { success: true };
  },

  reject: async ({ request, locals: { supabase } }: import('./$types').RequestEvent) => {
    const formData = await request.formData();
    const email = formData.get("email") as string;

    await supabase.from("applicants").delete().eq("email", email);

    return { success: true };
  },
};
;null as any as PageServerLoad;;null as any as Actions;