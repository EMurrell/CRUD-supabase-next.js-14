"use server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function updateEntry(formData) {
  const id = formData.get("id");
  const description = formData.get("description");
  const title = formData.get("title");
  const body = formData.get("body");

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  if (!user) {
    console.error("User is not authenticated within updateEntry server action");
    return;
  }

  const { data, error } = await supabase
    .from("entries")
    .update({ description, title, body })
    .match({ id, user_id: user.id });

  if (error) {
    console.error("Error updating entry", error);
    return;
  }

  revalidatePath("/entry-list");

  return { message: "Watch edited successfully" };
}
