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
    <div className="relative min-h-screen py-12">
      <div className="container max-w-4xl p-6 mx-auto sm:p-12">
        <div className="flex flex-col justify-between sm:items-center sm:flex-row">
          <h1 className="text-5xl text-white md:text-6xl">My Watch List</h1>
          <form action="/auth/signout" method="post">
            <button
              type="submit"
              className="px-4 py-2 mt-4 transition duration-200 ease-in-out bg-sky-100 rounded-xl hover:shadow-md hover:shadow-black/95 hover:bg-sky-200 text-sky-700 hover:text-sky-950 sm:mt-0">
              Sign out
            </button>
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
                  <button
                    type="submit"
                    className="px-4 py-2 text-red-600 transition duration-200 ease-in-out bg-red-200 rounded-xl hover:bg-red-600 hover:text-red-100 hover:shadow-md hover:shadow-black/95">
                    Delete
                  </button>
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
