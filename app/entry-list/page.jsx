import { cookies } from "next/headers";
import EntryForm from "../components/EntryForm";
import EditEntry from "../components/EditEntry";
import { deleteEntry } from "../server-actions/deleteEntry";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Button from "../components/Button";

export default async function EntryList() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  const { data: entries, error } = await supabase
    .from("entries")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching entries", error);
  }

  return (
    <div className="relative min-h-screen py-12">
      <div className="container max-w-4xl p-6 mx-auto sm:p-12">
        <div className="flex items-end justify-between">
          <h1 className="text-5xl font-medium text-white md:text-6xl">
            Entries
          </h1>
          <form action="/auth/signout" method="post" className="pb-1 pl-1">
            <Button type="submit" text="sign out" style="primary" />
          </form>
        </div>
        <EntryForm />
        <div className="mt-6">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="px-4 py-8 mt-5 shadow-lg rounded-xl sm:p-8 shadow-black/70 bg-white/10">
              <h2 className="mb-1 text-2xl text-white capitalize">
                {entry.title}
              </h2>
              <h3 className="mb-2 text-lg text-white/80">
                {entry.description}
              </h3>
              <span className="whitespace-pre-line text-white/80">
                {entry.body}
              </span>
              <div className="flex gap-2 mt-6">
                <form action={deleteEntry}>
                  <input type="hidden" name="id" value={entry.id} />
                  <Button type="submit" style="delete" text="Delete" />
                </form>
                <div className="">
                  <EditEntry entry={entry} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
