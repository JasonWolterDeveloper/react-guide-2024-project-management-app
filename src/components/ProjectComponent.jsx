import { useState } from "react";
import CustomInput from "./CustomInput";

export default function ProjectComponent({ project, projectIndex, onAddTask, onRemoveTask, onDeleteProject }) {
    const [taskName, setTaskName] = useState('');

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

    return (
        <div>
            <span>
                <h1>{project.title}</h1>
                <button onClick={onDeleteProject}>Delete</button>
            </span>
            <h3>{project.date}</h3>
            <p>{project.description}</p>
            <hr/>
            <h1>Tasks</h1>
            <span>
            <CustomInput label="Task" value={taskName} onChange={handleTaskChanged}/>
                <button onClick={addTaskHandler}>Add Task</button>
            </span>
            <ul>
                {
                    project.tasks.map((task, taskIndex) => {
                        return <span key={task + taskIndex.toString()}>
                                <p >{task}</p>
                                <button onClick={() =>{removeTaskHandler(taskIndex)}}>clear</button>
                            </span>
                    })
                }
            </ul>
        </div>
    );
};