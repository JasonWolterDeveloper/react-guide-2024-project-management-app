export default function NoProjectSelectedComponent({ onAddNewProject }) {
    return (
        <div>
            <h1>No Project Selected</h1>
            <p>Select a Project or get started with a new one</p>
            <button onClick={onAddNewProject}>Create new project</button>
        </div>
    );
}