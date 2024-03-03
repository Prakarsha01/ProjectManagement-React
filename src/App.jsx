import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import DefaultPage from "./Components/DefaultPage";
import NewProject from "./Components/NewProject";
import ProjectPage from "./Components/ProjectPage";

function App() {
  let content;
  const [newProjectBtn, setNewProjectBtn] = useState(false);
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projectList: [],
  });

  function addNewProject(newProject) {
    const updatedProjectList = [...projectState.projectList, newProject];
    setProjectState((prevState) => ({
      ...prevState,
      projectList: updatedProjectList,
    }));
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  }

  function handleAddTask(projectId, newTask) {
    const updatedProjectList = projectState.projectList.map((project) => {
      if (project.id == projectId) {
        return {
          ...project,
          tasks: [...project.tasks, newTask],
        };
      } else {
        return project;
      }
    });
    setProjectState((prevState) => ({
      ...prevState,
      projectList: updatedProjectList,
    }));
  }

  function handleClearTask(projectId, taskIndex) {
    const updatedProjectList = projectState.projectList.map((project) => {
      if (project.id == projectId) {
        return {
          ...project,
          tasks: project.tasks
            .slice(0, taskIndex)
            .concat(project.tasks.slice(taskIndex + 1)),
        };
      } else {
        return project;
      }
    });
    setProjectState((prevState) => ({
      ...prevState,
      projectList: updatedProjectList,
    }));
  }

  function handleCreateProject() {
    setNewProjectBtn(true);
    handleSelectProject(undefined);
  }

  function handleDeleteProject(projectId) {
    const updatedProjectList = projectState.projectList.filter(
      (project) => project.id !== projectId
    );
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projectList: updatedProjectList,
    }));
    setNewProjectBtn(false);
  }

  if (projectState.selectedProjectId) {
    const selectedProject = projectState.projectList.find(
      (project) => project.id === projectState.selectedProjectId
    );
    content = (
      <ProjectPage
        projectDetails={selectedProject}
        addTask={handleAddTask}
        clearTask={handleClearTask}
        deleteProject={handleDeleteProject}
      />
    );
  } else {
    content = newProjectBtn ? (
      <NewProject
        addNewProject={addNewProject}
        projects={projectState.projectList}
      />
    ) : (
      <DefaultPage createProject={handleCreateProject} />
    );
  }

  return (
    <div className="flex flex-wrap">
      <Sidebar
        createProject={handleCreateProject}
        projects={projectState.projectList}
        selectProject={handleSelectProject}
      />
      {content}
    </div>
  );
}

export default App;
