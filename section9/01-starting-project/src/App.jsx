import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Project from "./components/Project";
import NewProject from "./components/NewProject";


function App() {

  const [projects, setProjects] = useState([])

  function onAddProjectClick() {

  }

  function onProjectSave(project) {
    setProjects([...projects, project])
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar 
        projects={projects}
      
      />

      <NewProject onSave={onProjectSave}/>

      {/* <Project
        title={'Learning React'}
      >

      </Project> */}
    </main>
  );
}

export default App;
