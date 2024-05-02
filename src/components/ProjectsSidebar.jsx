import Button from "./Button";

export default function ProjectsSidebar({ projectList, onAddNewProject, isAddingNewProject, onSelectProject, selectedProjectIndex }) {

    const addProjectHandler = () => {
        onAddNewProject();
    }

    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">YOUR PROJECTS</h2>
            <div>
                <Button onClick={addProjectHandler} disabled={isAddingNewProject}>+ Add Project</Button>
            </div>
            <ul className="mt-8">
                {
                    projectList.map((project, projectIndex) => {
                        let classes = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

                        if (selectedProjectIndex === projectIndex) {
                            classes += " bg-stone-800 text-stone-200"
                        } else {
                            classes += " text-stone-400"
                        }

                        return <li key={"project" + projectIndex.toString()} >
                            <button className={classes}
                            onClick={() => {onSelectProject(projectIndex)}}>{project.title}</button>
                        </li>
                    })
                }
            </ul>
        </aside>
    );
}