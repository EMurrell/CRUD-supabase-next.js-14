"use client";
import { useState } from "react";
import { updateEntry } from "../server-actions/updateEntry";
import Button from "./Button";

export default function EditEntry({ entry }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: entry.title,
    description: entry.description,
    body: entry.body,
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
                <label htmlFor="title" className="block mb-2 text-zinc-300">
                  title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full p-2 text-white border rounded-xl bg-zinc-800 border-zinc-700 focus:border-sky-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block mb-2 capitalize text-zinc-300">
                  description
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full p-2 text-white border rounded-xl bg-zinc-800 border-zinc-700 focus:border-sky-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="body"
                  className="block mb-2 capitalize text-zinc-300">
                  body
                </label>
                <input
                  type="text"
                  id="body"
                  name="body"
                  value={formData.body}
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
