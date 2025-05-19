import { useState } from "react";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";



function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
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

  function handleProjectDelete() {
    setProjectsState(prevState => {
      const projects = prevState.projects.filter(project => project.id !== prevState.selectedProjectId)
      return {
        projects,
        selectedProjectId: undefined
      }
    })
  }

  function handleAddTask(text) {
    setProjectsState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectsState(prevState => {
      const tasks = prevState.tasks.filter(task => task.id !== taskId)

      return {
        ...prevState,
        tasks: tasks
      }
    })

  }

  const project = projectsState.projects.find((p) => p.id === projectsState.selectedProjectId)
  let content = (
    <SelectedProject
      project={project}
      onProjectDelete={handleProjectDelete}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

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
