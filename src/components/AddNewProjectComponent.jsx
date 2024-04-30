import { useState } from "react";
import CustomInput from "./CustomInput";

export default function AddNewProjectComponent({ onCancel, onSave }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(''); 

    const handleTitleChanged = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChanged = (event) => {
        setDescription(event.target.value);
    };

    const handleDateChanged = (event) => {
        setDate(event.target.value);
    }

    const clearFields = () => {
        setTitle('');
        setDescription('');
        setDate('');
    }
    
    const handleSave = () => {
        const project = {
            title: title,
            description: description,
            date: date
        }
        clearFields();
        onSave(project);
    };

    const handleCancel = () => {
        clearFields();
        onCancel();
    }

    return (
        <div>
            <div>
                <button onClick={handleCancel}>Cancel</button>
                <button onClick={handleSave}>Save</button>
            </div>
            <div>
                <CustomInput label="Title" value={title} onChange={handleTitleChanged}/>
                <CustomInput label="Description" value={description} onChange={handleDescriptionChanged}/>
                <CustomInput label="Date" value={date} onChange={handleDateChanged}/>
            </div>
        </div>
    );
};