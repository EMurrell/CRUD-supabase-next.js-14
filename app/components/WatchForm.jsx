export default function WatchForm() {
  return (
    <form action={"addWatch"}>
      <div>
        <label htmlFor="brand">Brand</label>
        <input type="text" id="brand" name="brand" required />
      </div>
      <div>
        <label htmlFor="model">Model</label>
        <input type="text" id="model" name="model" required />
      </div>
      <div>
        <label htmlFor="referenceNumber">Reference Number</label>
        <input
          type="text"
          id="referenceNumber"
          name="referenceNumber"
          required
        />
      </div>
      <button type="submit">Add Watch</button>
    </form>
  );
}
