import WatchForm from "../components/WatchForm";

export default function WatchList() {
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
      </div>
    </div>
  );
}
