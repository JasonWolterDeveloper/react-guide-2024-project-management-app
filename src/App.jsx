import { useState } from "react";
import ProjectsSidebar from "./components/projectsSidebar";
import AddNewProjectComponent from "./components/AddNewProjectComponent";

function App() {
  const [projectList, setProjectList] = useState([{title: "Project 1"}, {title: "Wow, cool Project"}])
  const [isAddingNewProject, setIsAddingNewProject] = useState(false);

  const addNewProjectHandler = () => {
    setIsAddingNewProject(true)
  }
  
  const cancelAddProjectHandler = () => {
    setIsAddingNewProject(false);
  }

  const AddNewProjectSaveHandler = (newProject) => {
    setProjectList(
      (oldProjectList) => {
        return [newProject, ...oldProjectList]
      }
    )
    setIsAddingNewProject(false);
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar projectList={projectList} onAddNewProject={addNewProjectHandler} isAddingNewProject={isAddingNewProject}/>
        { 
          isAddingNewProject && <AddNewProjectComponent onCancel={cancelAddProjectHandler} onSave={AddNewProjectSaveHandler}/>
        } 
      </main>
    </>
  );
}

export default App;
