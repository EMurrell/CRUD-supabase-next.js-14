"use server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function addEntry(formData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const referenceNumber = formData.get("referenceNumber");

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  if (!user) {
    console.error("User is not authenticated within addEntry server action");
    return;
  }

  const { data, error } = await supabase
    .from("entries")
    .insert([
      {
        description,
        title,
        reference_number: referenceNumber,
        user_id: user.id,
      },
    ]);

  if (error) {
    console.error("Error adding entry", error);
    return;
  }

  revalidatePath("/entry-list");

  return { message: "Entry added successfully" };
}
