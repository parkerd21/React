import { useState } from "react";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";
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

  function handleProjectClick(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }

  function handleCancelClick() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined 
      }
    })
  }

  const project = projectsState.projects.find((p) => p.id === projectsState.selectedProjectId)
  let content = <SelectedProject project={project} />;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onSave={handleSaveProject} onCancel={handleCancelClick} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProjectClick={onAddProjectClick} />
  } 

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
        onAddProjectClick={onAddProjectClick}
        onProjectClick={handleProjectClick}
      />

      {content}
    </main>
  );
}

export default App;
