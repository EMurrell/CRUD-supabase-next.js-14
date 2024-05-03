import { cookies } from "next/headers";
import WatchForm from "../components/WatchForm";
import EditWatch from "../components/EditWatch";
import { deleteWatch } from "../server-actions/deleteWatch";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

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
    <div className="min-h-screen text-zinc-300 bg-gradient-to-br from-zinc-950 to-zinc-900 via-gray-800">
      <div className="container max-w-4xl p-6 mx-auto sm:p-12">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <h1 className="text-5xl text-white md:text-6xl">My Watch List</h1>
          <form action="/auth/signout" method="post">
            <button
              type="submit"
              className="px-4 py-2 text-white rounded-lg bg-zinc-600 hover:bg-zinc-700">
              Sign out
            </button>
          </form>
        </div>
        <WatchForm />
        <div className="mt-6">
          {watches.map((watch) => (
            <div
              key={watch.id}
              className="p-8 mt-5 rounded-lg shadow-lg shadow-black/70 bg-white/10 backdrop-blur-md">
              <h2 className="mb-2 text-xl text-white">
                {watch.brand} - {watch.model}
              </h2>
              <span className="mb-2 text-white/60">
                {watch.referenceNumber}
              </span>
              <div className="flex space-x-2">
                <form action={deleteWatch}>
                  <input type="hidden" name="id" value={watch.id} />
                  <button
                    type="submit"
                    className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-700">
                    Delete
                  </button>
                </form>
                <EditWatch watch={watch} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
