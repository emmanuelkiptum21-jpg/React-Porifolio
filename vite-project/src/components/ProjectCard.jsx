
function ProjectCard({ project }) {
  return (
    <>
      <div className="max-w-72 w-full overflow-hidden rounded-xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

        {/* Project image */}
        {project.image ? (
          <img
            className="h-44 w-full rounded-xl object-cover"
            src={project.image}
            alt={project.title}
          />
        ) : (
          <div className="flex h-44 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-900 to-purple-600 text-4xl font-bold text-white">
            {project.title.charAt(0)}
          </div>
        )}

        {/* Project details */}
        <div className="p-4">

          <h3 className="mt-2 text-base font-semibold text-slate-900">
            {project.title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            {project.description}
          </p>

          <p className="mt-3 text-xs font-medium text-indigo-600">
            {project.category || "Personal Project"}
          </p>

        </div>
      </div>
    </>
  );
}

export default ProjectCard;
