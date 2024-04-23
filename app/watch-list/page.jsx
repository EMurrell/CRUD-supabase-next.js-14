import WatchForm from "../components/WatchForm";
import EditWatch from "../components/EditWatch";

export default function WatchList() {
  const watches = [];
  return (
    // <div>
    //   <div>
    //     <div>
    //       <h1>my watch list</h1>
    //       <form action="/auth/signout" method="post">
    //         <button type="submit" className="p-3 bg-white/20">
    //           Sign out
    //         </button>
    //       </form>
    //     </div>
    //     <WatchForm />
    //     <div>
    //       {watches.map((watch) => (
    //         <div key={watch.id}>
    //           <h2>
    //             {watch.brand} - {watch.name}
    //           </h2>
    //           <div>
    //             <form action="deleteWatch">
    //               <input type="hidden" name="id" value={watch.id} />
    //               <button type="submit">Delete</button>
    //             </form>
    //             <EditWatch watch={watch} />
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-screen text-gray-300 bg-gray-900">
      <div className="container p-6 mx-auto sm:p-12">
        <div className="flex items-start justify-between">
          <h1 className="mb-6 text-5xl font-extrabold text-white md:text-6xl">
            My Watch List
          </h1>
          <form action="/auth/signout" method="post">
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-gray-600 rounded hover:bg-gray-700">
              Sign out
            </button>
          </form>
        </div>
        <WatchForm />
        <div className="mt-6">
          {watches.map((watch) => (
            <div
              key={watch.id}
              className="p-4 mb-4 bg-gray-800 rounded-lg shadow">
              <h2 className="mb-2 text-xl text-white">
                {watch.brand} - {watch.model}
              </h2>
              <div className="flex space-x-2">
                <form action={"deleteWatch"}>
                  <input type="hidden" name="id" value={watch.id} />
                  <button
                    type="submit"
                    className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700">
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
