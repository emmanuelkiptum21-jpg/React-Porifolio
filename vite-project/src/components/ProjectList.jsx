
import ProjectCard from "./Productcard";
import SearchBar from "./SearchBar";

function ProjectList({ projects, searchTerm, onSearchChange }) {
  return (
    <div className="project-list-container">

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
      />

      <div className="project-list">

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </div>

      {projects.length === 0 && (
        <p>No projects found.</p>
      )}

    </div>
  );
}

export default ProjectList;