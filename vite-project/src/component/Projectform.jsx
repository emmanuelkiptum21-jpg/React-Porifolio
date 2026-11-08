function ProjectForm() {
  return (
    <div className="form-container">
      <h2>Add Project</h2>

      <form>
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter project title"
        />

        <label>Description</label>
        <textarea
          placeholder="Enter project description"
        />

        <button type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default ProjectForm;