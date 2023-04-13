import React, { useRef, useState } from "react"
import { Task } from "../components/Tasks";
import { DateTime } from '../data/CalculateDate'
import useTaskstore from "../Hooks/States";

const validateAndAdd = (inputText) => {
    try {
        if (inputText === '') {
            return false
        }
        else {
            return {
                id: (Math.floor(Math.random() * 100000)), // for deletion
                completed: false, // to mark as complete and set the completion time
                data: inputText,
                AddTime: DateTime(),
                completionTime: ''
            }
        }
    }
    catch (Error) {
        console.log(Error);
    }
}

export const Content = () => {
    const inputVal = useRef();
    const { Tasks, addTask, removeTask, toggleComplete, editData } = useTaskstore((state) => ({
        Tasks: state.Tasks,
        addTask: state.addTask,
        removeTask: state.removeTask,
        toggleComplete: state.toggleComplete,
        editData: state.editData
    }));

    const [alertState, setAlert] = useState(false);

    return (
        <div className="flex-grow text-2xl min-w-full p-10 pb-20 justify-center">
            <div className="flex flex-wrap gap-5 justify-center">
                <input type="text" name="task" placeholder="Enter your task" className="h-10 w-96 max-lg:w-52 rounded-xl bg-black border-2 white text-white p-2 text-xl max-lg:h-10 max-lg:text-lg" ref={inputVal} />
                <button className="border-2 rounded-lg text-lg max-lg:text-sm" onClick={() => { const returned = validateAndAdd(((inputVal.current.value).toString()).trim()); returned === false ? setAlert(true) : (addTask(returned), setAlert(false)); inputVal.current.value = '' }}>Add Task</button>
                {alertState && <span className="text-sm font-bold text-red-500 order-last">* Task can't be void</span>}
            </div>
            <div className="flex flex-col pt-10 items-center">
                {
                    Tasks[0] && Tasks.map((val, key) => <Task props={val} key={key} onDelete={(childId) => removeTask(childId)} toggleStatus={(childId, status, CmpTime) => toggleComplete(childId, status, CmpTime)} ChgData={(taskID, NewData) => editData(taskID, NewData)} />)
                }
            </div>
        </div >
    )
}
