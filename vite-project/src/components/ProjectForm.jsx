
import { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    onAddProject({
      title: title.trim(),
      description: description.trim()
    });

    setTitle("");
    setDescription("");
  }

  return (
    <div className="form-container">
      <h2>Add Project</h2>

      <form onSubmit={handleSubmit}>
        <label>Title</label>

        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter project title"
        />

        <label>Description</label>

        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Enter project description"
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ProjectForm;
