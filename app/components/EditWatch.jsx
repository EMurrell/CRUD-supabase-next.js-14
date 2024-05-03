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
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700">
        Edit
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center px-4 bg-gray-800 bg-opacity-75">
          <div className="w-full max-w-md p-6 bg-gray-900 rounded-lg modal-content">
            <span
              className="float-right text-xl leading-none text-white cursor-pointer close hover:text-gray-300"
              onClick={() => setShowModal(false)}>
              &times;
            </span>
            <form
              action={updateWatch}
              onSubmit={() => setShowModal(false)}
              className="mt-4">
              <input type="hidden" name="id" value={watch.id} />
              <div className="mb-4">
                <label htmlFor="brand" className="block mb-2 text-gray-300">
                  Brand
                </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="w-full p-2 text-white bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="model" className="block mb-2 text-gray-300">
                  Model
                </label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  className="w-full p-2 text-white bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="referenceNumber"
                  className="block mb-2 text-gray-300">
                  Reference Number
                </label>
                <input
                  type="text"
                  id="referenceNumber"
                  name="referenceNumber"
                  value={formData.referenceNumber}
                  onChange={handleChange}
                  className="w-full p-2 text-white bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700">
                Update Watch
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
