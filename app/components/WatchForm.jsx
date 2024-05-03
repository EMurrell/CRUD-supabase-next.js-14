import { addWatch } from "../server-actions/addWatch";

export default function WatchForm() {
  return (
    <form
      className="px-4 py-8 shadow-lg rounded-xl sm:p-8 shadow-black/70 bg-white/10 backdrop-blur-md mt-9"
      action={addWatch}>
      <div className="mb-4">
        <label htmlFor="brand" className="block text-white">
          Brand
        </label>
        <input
          type="text"
          id="brand"
          name="brand"
          className="w-full px-3 py-2 text-white border rounded-xl bg-zinc-900 border-zinc-700"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="model" className="block text-white">
          Model
        </label>
        <input
          type="text"
          id="model"
          name="model"
          className="w-full px-3 py-2 text-white border rounded-xl bg-zinc-900 border-zinc-700"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="referenceNumber" className="block text-white">
          Reference Number
        </label>
        <input
          type="text"
          id="referenceNumber"
          name="referenceNumber"
          className="w-full px-3 py-2 text-white border rounded-xl bg-zinc-900 border-zinc-700"
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 transition duration-200 ease-in-out hover:shadow-md hover:shadow-black/95 bg-sky-100 rounded-xl hover:bg-sky-200 text-sky-600 hover:text-sky-950">
        Add Watch
      </button>
    </form>
  );
}
