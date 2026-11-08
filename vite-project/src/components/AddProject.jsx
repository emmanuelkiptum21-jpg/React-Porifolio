import { useState } from "react";

function AddProject({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    onAddProject({
      title: title.trim(),
      description: description.trim(),
    });

    setTitle("");
    setDescription("");
  }

  return (
    <section className="my-8 rounded-xl bg-white p-6 shadow-md">

      <h2 className="mb-5 text-2xl font-bold text-indigo-950">
        Add New Project
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <input
          type="text"
          placeholder="Enter project title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="rounded-lg border border-slate-300 p-3 outline-none focus:border-purple-500"
          required
        />

        <textarea
          placeholder="Enter project description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="min-h-28 rounded-lg border border-slate-300 p-3 outline-none focus:border-purple-500"
          required
        />

        <button
          type="submit"
          className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
        >
          Add Project +
        </button>

      </form>
    </section>
  );
}

export default AddProject;