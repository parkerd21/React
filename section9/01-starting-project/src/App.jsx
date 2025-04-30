import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Project from "./components/Project";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";



function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function onAddProjectClick() {
    setProjectsState(prevState => {
      return { ...prevState, selectedProjectId: null }
    })
  }

  function handleSaveProject(projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined
      };
    });
  }

  function handleProjectClick(id)
  {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }


  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onSave={handleSaveProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProjectClick={onAddProjectClick} />
  } else {
    const project = projectsState.projects.find((p) => p.id === projectsState.selectedProjectId)
    content = <Project project={project} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        projects={projectsState.projects}
        onAddProjectClick={onAddProjectClick}
        onProjectClick={handleProjectClick}
      />

      {content}
    </main>
  );
}

export default App;
