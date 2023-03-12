import { useState } from "react";
import { DateTime } from '../data/CalculateDate'

export const Task = ({ props, onDelete }) => {
    const [check, setCheck] = useState(false);

    return (
        <div className="task flex flex-col items-center p-4 mt-5 gap-5 max-lg:gap-5 max-md:text-sm max-w-3xl border-2 border-yellow-400 rounded-xl text-center">
            <span className={`${check === true && 'line-through'} text-start`}>{props.data}</span>
            <div className="flex max-xs:flex-col items-center min-w-fit justify-evenly gap-5 w-full">
                <input type="checkbox" className="scale-150" onClick={(e) => { setCheck(e.target.checked), check && (props.completed = check) }} />
                <button className="min-w-fit h-fit border-2 rounded-lg text-lg max-lg:text-sm" onClick={() => onDelete(props.id)}>Delete</button>
                <span className="text-lg max-md:text-xs">
                    Task Added Time: {props.AddTime}
                    <br />
                    {check && ((props.completionTime = DateTime()), <span> Completion Time: {props.completionTime}</span>)}
                </span>
            </div>
        </div >
    )
}



// merge context and tasks component together ( will help to delete the task and you will be able to delete the task from tasks array too)