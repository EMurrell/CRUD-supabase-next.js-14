"use client";
import { useState } from "react";
import { updateWatch } from "../server-actions/updateWatch";

export default function EditWatch({ watch }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    brand: watch.brand,
    model: watch.model,
    referenceNumber: watch.reference_number,
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="">
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 transition duration-200 ease-in-out bg-sky-100 rounded-xl hover:bg-sky-200 text-sky-600 hover:text-sky-950 hover:shadow-md hover:shadow-black/95">
        Edit
      </button>
      {showModal && (
        <div className=" absolute z-[99] inset-0 flex items-center justify-center px-4 bg-opacity-75 bg-zinc-800">
          <div className="w-full max-w-md p-6 rounded-xl bg-zinc-900 modal-content">
            <span
              className="float-right text-xl leading-none text-white cursor-pointer close hover:text-zinc-300"
              onClick={() => setShowModal(false)}>
              &times;
            </span>
            <form
              action={updateWatch}
              onSubmit={() => setShowModal(false)}
              className="mt-4">
              <input type="hidden" name="id" value={watch.id} />
              <div className="mb-4">
                <label htmlFor="brand" className="block mb-2 text-zinc-300">
                  Brand
                </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="w-full p-2 text-white border rounded-xl bg-zinc-800 border-zinc-700 focus:border-sky-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="model" className="block mb-2 text-zinc-300">
                  Model
                </label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  className="w-full p-2 text-white border rounded-xl bg-zinc-800 border-zinc-700 focus:border-sky-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="referenceNumber"
                  className="block mb-2 text-zinc-300">
                  Reference Number
                </label>
                <input
                  type="text"
                  id="referenceNumber"
                  name="referenceNumber"
                  value={formData.referenceNumber}
                  onChange={handleChange}
                  className="w-full p-2 text-white border rounded-xl bg-zinc-800 border-zinc-700 focus:border-sky-500"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 mt-5 transition duration-200 ease-in-out bg-sky-100 rounded-xl hover:shadow-md hover:shadow-black/95 hover:bg-sky-200 text-sky-600 hover:text-sky-950">
                Update Watch
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
