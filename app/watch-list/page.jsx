import { cookies } from "next/headers";
import WatchForm from "../components/EntryForm";
import EditWatch from "../components/EditEntry";
import { deleteWatch } from "../server-actions/deleteWatch";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Button from "../components/Button";

export default async function WatchList() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  const { data: watches, error } = await supabase
    .from("watches")
    .select("*")
    .eq("user_id", user.id)
    .order("brand", { ascending: true });

  if (error) {
    console.error("Error fetching watches", error);
  }

  return (
    <div className="relative min-h-screen py-12">
      <div className="container max-w-4xl p-6 mx-auto sm:p-12">
        <div className="flex flex-col justify-between sm:items-center sm:flex-row">
          <h1 className="text-5xl text-white md:text-6xl">My Watch List</h1>
          <form action="/auth/signout" method="post">
            <Button type="submit" text="sign out" style="primary" />
          </form>
        </div>
        <WatchForm />
        <div className="mt-6">
          {watches.map((watch) => (
            <div
              key={watch.id}
              className="px-4 py-8 mt-5 shadow-lg rounded-xl sm:p-8 shadow-black/70 bg-white/10">
              <h2 className="mb-2 text-xl text-white">
                {watch.brand} - {watch.model}
              </h2>
              <span className="mb-2 text-white/60">
                {watch.referenceNumber}
              </span>
              <div className="flex space-x-2 ">
                <form action={deleteWatch}>
                  <input type="hidden" name="id" value={watch.id} />
                  <Button type="submit" style="delete" text="Delete" />
                </form>
                <div className="">
                  <EditWatch watch={watch} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
