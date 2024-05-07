import { addEntry } from "../server-actions/addEntry";
import Button from "./Button";

export default function EntryForm() {
  return (
    <form
      className="px-4 py-8 shadow-lg rounded-xl sm:p-8 shadow-black/70 bg-white/10 backdrop-blur-md mt-9"
      action={addEntry}>
      <div className="mb-4">
        <label htmlFor="title" className="block text-white">
          title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="w-full px-3 py-2 text-white border rounded-xl bg-zinc-900 border-zinc-700"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-white capitalize">
          description
        </label>
        <input
          type="text"
          id="description"
          name="description"
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
      <Button type="submit" text="add Entry" style="primary" />
    </form>
  );
}
