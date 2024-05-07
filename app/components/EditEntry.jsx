"use client";
import { useState } from "react";
import { updateEntry } from "../server-actions/updateEntry";
import Button from "./Button";

export default function EditEntry({ entry }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    brand: entry.brand,
    model: entry.model,
    referenceNumber: entry.reference_number,
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="">
      <Button
        onClick={() => setShowModal(true)}
        text="Edit"
        style="secondary"
      />
      {showModal && (
        <div className=" absolute z-[99] inset-0 flex items-center justify-center px-4 bg-opacity-75 bg-zinc-800">
          <div className="w-full max-w-md p-6 rounded-xl bg-zinc-900 modal-content">
            <span
              className="float-right text-xl leading-none text-white cursor-pointer close hover:text-zinc-300"
              onClick={() => setShowModal(false)}>
              &times;
            </span>
            <form
              action={updateEntry}
              onSubmit={() => setShowModal(false)}
              className="mt-4">
              <input type="hidden" name="id" value={entry.id} />
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
              <Button type="submit" style="primary" text="update entry" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
