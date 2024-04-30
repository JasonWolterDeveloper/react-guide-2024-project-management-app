import { useState } from "react";
import ProjectsSidebar from "./components/projectsSidebar";

function App() {
  const [projectList, setProjectList] = useState([{name: "Project 1"}, {name: "Wow, cool Project"}])
  const [isAddingNewProject, setIsAddingNewProject] = useState(false);

  const addNewProjectHandler = () =>{
    setIsAddingNewProject(true)
  }

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <ProjectsSidebar projectList={projectList} onAddNewProject={addNewProjectHandler} isAddingNewProject={isAddingNewProject}></ProjectsSidebar>
    </>
  );
}

export default App;
