import { useState } from "react";
import CustomInput from "./CustomInput";

export default function ProjectComponent({ project, projectIndex, onAddTask, onRemoveTask, onDeleteProject }) {
    const [taskName, setTaskName] = useState('');

    const formattedDate = new Date(project.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    const handleTaskChanged = (event) => {
        setTaskName(event.target.value);
    }

    const addTaskHandler = () => {
        onAddTask(taskName, projectIndex);
        setTaskName('')
    };

    const removeTaskHandler = (taskIndex) => {
        onRemoveTask(taskIndex, projectIndex)
    }

    let tasksComponent = <p className="text-stone-800 mb-4">This Project does not have any Tasks Yet</p>

    if (project.tasks != null && !(project.tasks.length === 0)) {           
        tasksComponent = <ul>
        {
            project.tasks.map((task, taskIndex) => {
                return <span key={task + taskIndex.toString()}>
                        <p >{task}</p>
                        <button onClick={() =>{removeTaskHandler(taskIndex)}}>clear</button>
                    </span>
            })
        }
        </ul>
    }

    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <button className="text-stone-600 hover:text-stone-950" 
                            onClick={onDeleteProject}>
                                Delete
                    </button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <section>
                <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
                <span>
                <CustomInput label="Task" value={taskName} onChange={handleTaskChanged}/>
                    <button onClick={addTaskHandler}>Add Task</button>
                </span>
                {tasksComponent}
            </section>
        </div>
    );
};