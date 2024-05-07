"use server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function deleteEntry(formData) {
  const entryId = formData.get("id");

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  if (!user) {
    console.error("User is not authenticated within deleteEntry server action");
    return;
  }

  const { data, error } = await supabase
    .from("entries")
    .delete()
    .match({ id: entryId, user_id: user.id });

  if (error) {
    console.error("Error deleting data", error);
    return;
  }

  revalidatePath("/entry-list");

  return { message: "Entry deleted successfully" };
}
