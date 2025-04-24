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
        return {...prevState, selectedProjectId: null}
      })
  }

  function onProjectSave(project) {
    
  }

  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onSave={onProjectSave}/>
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProjectClick={onAddProjectClick}/>
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
