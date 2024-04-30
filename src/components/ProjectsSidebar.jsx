export default function ProjectsSidebar({ projectList, onAddNewProject, isAddingNewProject }) {

    const addProjectHandler = () => {
        onAddNewProject();
    }

    return <div>
        <h1>YOUR PROJECTS</h1>
        <button onClick={addProjectHandler} disabled={isAddingNewProject}>+ Add Project</button>
        {
            projectList.map((project) =>{
                return <button key={project.name}>{project.name}</button>
            })
        }
    </div>
}