
import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import AddProject from "./components/AddProject";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProductList";
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
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) =>
    `${project.title} ${project.description}`
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase())
  );

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

      <Navbar />

      {/* Add Project Form */}
      <AddProject onAddProject={addProject} />

      <section id="projects" className="py-12">

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <ProjectList projects={filteredProjects} />

      </section>

    </div>


  )
}

export default App;
