function ProjectCard({ project }) {
  return (
    <div className="project-card">

      <div className="project-image">
        <span>✕</span>
      </div>

      <div className="project-details">
        <h3>{project.title}</h3>

        <p>{project.description}</p>
      </div>

    </div>
  );
}

export default ProjectCard;