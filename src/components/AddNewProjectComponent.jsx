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
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950" onClick={handleCancel}>Cancel</button></li>
                <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button></li>
            </menu>
            <div>
                <CustomInput label="Title" value={title} onChange={handleTitleChanged}/>
                <CustomInput label="Description" value={description} onChange={handleDescriptionChanged} textarea={true}/>
                <CustomInput label="Date" value={date} onChange={handleDateChanged}/>
            </div>
        </div>
    );
};