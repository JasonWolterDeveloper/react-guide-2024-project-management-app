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
      <main className="h-screen my-8">
        <ProjectsSidebar projectList={projectList} onAddNewProject={addNewProjectHandler} isAddingNewProject={isAddingNewProject}/>
      </main>
    </>
  );
}

export default App;
