export default function WatchList() {
  return (
    <div>
      <div>
        <div>
          <h1>my watch list</h1>
          <form action="/auth/signout" method="post">
            <button type="submit">Sign out</button>
          </form>
        </div>
        <WatchList />
      </div>
    </div>
  );
}
