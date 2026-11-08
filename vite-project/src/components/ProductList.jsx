import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <>
      <h2 className="text-3xl font-semibold text-center">
        My Projects
      </h2>

      <p className="mx-auto mt-2 max-w-lg text-center text-sm text-slate-500">
        Explore my work, creativity and development journey.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-8 pt-12">

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </div>
    </>
  );
}

export default ProjectList;