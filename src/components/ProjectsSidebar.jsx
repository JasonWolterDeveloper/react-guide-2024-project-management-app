import Button from "./Button";

export default function ProjectsSidebar({ projectList, onAddNewProject, isAddingNewProject, onSelectProject }) {

    const addProjectHandler = () => {
        onAddNewProject();
    }

    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">YOUR PROJECTS</h2>
            <div>
                <Button onClick={addProjectHandler} disabled={isAddingNewProject}>+ Add Project</Button>
            </div>
            <ul>
                {
                    projectList.map((project, projectIndex) => {
                        return <button key={project.title} onClick={() => {onSelectProject(projectIndex)}}>{project.title}</button>
                    })
                }
            </ul>
        </aside>
    );
}