import { useState } from "react";
import ProjectsSidebar from "./components/projectsSidebar";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import NoProjectSelectedComponent from "./components/NoProjectSelectedComponent";
import ProjectComponent from "./components/ProjectComponent";

function App() {
  const [projectList, setProjectList] = useState([])
  const [isAddingNewProject, setIsAddingNewProject] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [openProjectIndex, setOpenProjectIndex] = useState(0);

  const addNewProjectHandler = () => {
    setIsAddingNewProject(true)
  }
  
  const cancelAddProjectHandler = () => {
    setIsAddingNewProject(false);
  }

  const AddNewProjectSaveHandler = (newProject) => {
    setProjectList(
      (oldProjectList) => {
        newProject.tasks = []
        setOpenProjectIndex(oldProjectList.length)
        return [...oldProjectList, newProject]
      }
    )
    setIsProjectOpen(true);
    setIsAddingNewProject(false);
  }

  const projectSelectionHandler = (projectIndex) => {
    setIsProjectOpen(true);
    setOpenProjectIndex(projectIndex);
  }

  const addTaskToProject = (task, projectIndex) => {
    setProjectList(
      (oldProjectList) => {
        const updatedProject = {...oldProjectList[projectIndex]}
        updatedProject.tasks.push(task)
        let newProjectList = [...oldProjectList]
        newProjectList[projectIndex] = updatedProject
        return newProjectList
      }
    )
  }

  const removeTaskFromProject = (taskIndex, projectIndex) => {
    setProjectList(oldProjectList => {

      const updatedProject = {...oldProjectList[projectIndex]}

      const newTasksArray = [...updatedProject.tasks];
      newTasksArray.splice(taskIndex, 1);
      updatedProject.tasks = newTasksArray

      let newProjectList = [...oldProjectList]
      newProjectList[projectIndex] = updatedProject
      return newProjectList;
    });
  };

  const handleDeleteProject = (projectIndex) => {
    setIsProjectOpen(false);
    setOpenProjectIndex(0);
    setProjectList(oldProjectList => {
      const newProjectList = [...oldProjectList];
      newProjectList.splice(projectIndex, 1);
      return newProjectList;
    });
  };

  let currentMainComponent = <NoProjectSelectedComponent onAddNewProject={addNewProjectHandler} />

  if (isAddingNewProject) {
    currentMainComponent = <AddNewProjectComponent onCancel={cancelAddProjectHandler} onSave={AddNewProjectSaveHandler} />
  }
  else if (isProjectOpen) {
    currentMainComponent = <ProjectComponent project={projectList[openProjectIndex]} projectIndex={openProjectIndex} onDeleteProject={handleDeleteProject} onAddTask={addTaskToProject} onRemoveTask={removeTaskFromProject} />
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar projectList={projectList} onAddNewProject={addNewProjectHandler} isAddingNewProject={isAddingNewProject} onSelectProject={projectSelectionHandler} selectedProjectIndex={openProjectIndex}/>
        {currentMainComponent} 
      </main>
    </>
  );
}

export default App;
