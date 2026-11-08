
import { useState } from "react";

import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "My First Website",
      description: "A website built using HTML and CSS."
    },
    {
      id: 2,
      title: "Calculator App",
      description: "A simple calculator built using JavaScript."
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A personal website showcasing my work."
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  function handleAddProject(newProject) {
    setProjects((previousProjects) => [
      ...previousProjects,
      {
        id: Date.now(),
        ...newProject
      }
    ]);
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <header>
        <h1>Personal Project Showcase App</h1>
      </header>

      <ProjectForm onAddProject={handleAddProject} />

      <ProjectList
        projects={filteredProjects}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
    </div>
  );
}

export default App;
