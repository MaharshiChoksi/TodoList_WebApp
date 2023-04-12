import { DateTime } from '../data/CalculateDate'

export const Task = ({ props, onDelete, toggleStatus }) => {
    const borderColor = props.completed ? "border-green-500": "border-yellow-400"

    return (
        <div className={`task flex flex-col items-center p-4 mt-5 gap-5 max-lg:gap-5 max-md:text-sm max-w-3xl border-2 ${borderColor} rounded-xl text-center`}>
            <span className={`${props.completed && 'line-through'} text-start`}>{props.data}</span>
            <div className="flex max-xs:flex-col items-center min-w-fit justify-evenly gap-5 w-full">
                <input type="checkbox" className="scale-150" defaultChecked={props.completed} onClick={(e) => { e.target.checked ? toggleStatus(props.id, DateTime()) : toggleStatus(props.id, "")}} />
                <button className="min-w-fit h-fit border-2 rounded-lg text-lg max-lg:text-sm" onClick={() => onDelete(props.id)}>Delete</button>
                <span className="text-lg max-md:text-xs">
                    Task Added Time: {props.AddTime}
                    <br />
                    {props.completed && <span> Completion Time: {props.completionTime}</span>}
                </span>
            </div>
        </div >
    )
}



// merge context and tasks component together ( will help to delete the task and you will be able to delete the task from tasks array too)