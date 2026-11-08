
import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import AddProject from "./components/AddProject";

function App() {

  // Store our projects
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Kipearth Grow",
      description: "A grocery delivery platform connecting farmers with customers."
    },
    {
      id: 2,
      title: "Wordly SPA",
      description: "A dictionary application built using JavaScript."
    }
  ]);

  // Add a new project
  function addProject(newProject) {
    const project = {
      id: Date.now(),
      ...newProject
    };

    setProjects((previousProjects) => [
      ...previousProjects,
      project
    ]);
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <main className="mx-auto max-w-6xl">

        {/* Navigation */}
        <Navbar />

        {/* Add Project Form */}
        <AddProject onAddProject={addProject} />

        {/* Display Projects */}
        <section className="mt-10">

          <h2 className="mb-6 text-2xl font-bold text-indigo-950">
            My Projects
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {projects.map((project) => (
              <div
                key={project.id}
                className="rounded-xl bg-white p-6 shadow-md"
              >
                <h3 className="mb-3 text-xl font-bold text-purple-700">
                  {project.title}
                </h3>

                <p className="text-slate-600">
                  {project.description}
                </p>
              </div>
            ))}

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;
