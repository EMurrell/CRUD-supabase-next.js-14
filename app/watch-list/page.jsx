import WatchForm from "../components/WatchForm";

export default function WatchList() {
  const watches = [];
  return (
    <div>
      <div>
        <div>
          <h1>my watch list</h1>
          <form action="/auth/signout" method="post">
            <button type="submit" className="p-3 bg-white/20">
              Sign out
            </button>
          </form>
        </div>
        <WatchForm />
        <div>
          {watches.map((watch) => (
            <div key={watch.id}>
              <h2>
                {watch.brand} - {watch.name}
              </h2>
              <div>
                <form action="deleteWatch">
                  <input type="hidden" name="id" value={watch.id} />
                  <button type="submit">Delete</button>
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
