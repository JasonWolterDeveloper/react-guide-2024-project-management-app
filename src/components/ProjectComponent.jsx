import { useState } from "react";
import CustomInput from "./CustomInput";

export default function ProjectComponent({ project, projectIndex, onAddTask }) {
    const [taskName, setTaskName] = useState('');

    const handleTaskChanged = (event) => {
        setTaskName(event.target.value);
    }

    const addTaskHandler = () => {
        onAddTask(taskName, projectIndex);
        setTaskName('')
    };

    return (
        <div>
            <h1>{project.title}</h1>
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
                        return <p key={task + taskIndex.toString()}>{task}</p>
                    })
                }
            </ul>
        </div>
    );
};