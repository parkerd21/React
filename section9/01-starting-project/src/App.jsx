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

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  console.log(projectsState);

  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onSave={handleAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProjectClick={onAddProjectClick} />
  } else {
    content = <Project title={'test'} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        // projects={projects}
        onAddProjectClick={onAddProjectClick}
      />

      {content}
    </main>
  );
}

export default App;
