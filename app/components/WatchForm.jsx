import { addWatch } from "../server-actions/addWatch";

export default function WatchForm() {
  return (
    <form
      className="p-8 rounded-lg shadow-lg shadow-black/70 bg-white/10 backdrop-blur-md mt-9"
      action={addWatch}>
      <div className="mb-4">
        <label htmlFor="brand" className="block text-white">
          Brand
        </label>
        <input
          type="text"
          id="brand"
          name="brand"
          className="w-full px-3 py-2 text-white border rounded-lg bg-zinc-900 border-zinc-700"
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
          className="w-full px-3 py-2 text-white border rounded-lg bg-zinc-900 border-zinc-700"
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
          className="w-full px-3 py-2 text-white border rounded-lg bg-zinc-900 border-zinc-700"
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600">
        Add Watch
      </button>
    </form>
  );
}
