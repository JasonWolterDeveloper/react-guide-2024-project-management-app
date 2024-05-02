import { useState, useRef } from "react";
import CustomInput from "./CustomInput";
import Modal from "./Modal";

export default function AddNewProjectComponent({ onCancel, onSave }) {
    const errorModal = useRef();
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

    const validateValues = () => {
        return !(title.trim() === '' ||
           description.trim() === '' ||
           date.trim() === ''
        )
    }

    const clearFields = () => {
        setTitle('');
        setDescription('');
        setDate('');
    }
    
    const handleSave = () => {
        if (validateValues()) {
            const project = {
                title: title,
                description: description,
                date: date
            }
            clearFields();
            onSave(project);
        }
        else {
            errorModal.current.open()
        }
    };

    const handleCancel = () => {
        clearFields();
        onCancel();
    }

    return (
        <>
        <Modal ref={errorModal} buttonCaption="Okay">
            <h2 className="text-xl font-bold text-stone-700 my-4">
                Invalid Input
            </h2>
            <p className="text-stone-600 mb-4">
                Oops ... looks like you forgot to enter a value
            </p>
            <p className="text-stone-600 mb-4">
                Please make sure you provide a valid value for every input field.
            </p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950" onClick={handleCancel}>Cancel</button></li>
                <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button></li>
            </menu>
            <div>
                <CustomInput type="text" label="Title" value={title} onChange={handleTitleChanged}/>
                <CustomInput label="Description" value={description} onChange={handleDescriptionChanged} textarea={true}/>
                <CustomInput type="date" label="Date" value={date} onChange={handleDateChanged}/>
            </div>
        </div>
        </>
    );
};