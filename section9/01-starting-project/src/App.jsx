import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Project from "./components/Project";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";


function App() {

  const [projects, setProjects] = useState([])
  const [showNewProject, setShowNewProject] = useState(false)
  const [noProjectSelected, setNoProjectSelected] = useState(true)

  function onAddProjectClick() {
      setNoProjectSelected(false)
      setShowNewProject(prevState => !prevState)
  }

  function onProjectSave(project) {
    setProjects([...projects, project])
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar 
        projects={projects}
        onAddProjectClick={onAddProjectClick}
      />

      {noProjectSelected && 
        <NoProjectSelected onAddProjectClick={onAddProjectClick}/>
      }
        

      {showNewProject && <NewProject onSave={onProjectSave}/>}

      {/* <Project
        title={'Learning React'}
      >

      </Project> */}
    </main>
  );
}

export default App;
