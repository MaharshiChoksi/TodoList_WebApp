import { useRef, useState } from 'react'
import { DateTime } from '../data/CalculateDate'
import close from '../assets/close.png';

const EditBar = ({ props, ChgData, setShowHiddenDiv }) => {
    const data = useRef();

    return (<div className='fixed flex min-w-full min-h-[100%] z-10 backdrop-blur-sm items-center justify-center top-0'>
        <div className='flex flex-col gap-5 m-[10%] p-[3%] items-center relative border-2 border-gray-400 rounded-xl font-mono max-sm:text-xl text-4xl max-md:text-3xl bg-neutral-900/95'>
            <button onClick={() => setShowHiddenDiv(false)}><img src={close} className='absolute top-2 right-2 h-10 max-md:h-9' alt='Close Menu' /></button>
            <div>Edit your Task: </div>
            <textarea type="text" name="task" defaultValue={props.data} placeholder="Edit your task" className=" rounded-xl bg-black border-2 text-white p-2 h-96 text-xl max-sm:w-30 max-lg:h-72 max-lg:text-sm" ref={data} />
            <input type="submit" className='socialmedia' onClick={() => (ChgData(props.id, data.current.value), setShowHiddenDiv(false))} />
        </div>
    </div>)

}


export const Task = ({ props, onDelete, toggleStatus, ChgData }) => {
    const [showHiddenDiv, setShowHiddenDiv] = useState(false);
    const borderColor = props.completed ? "border-green-500" : "border-yellow-400";

    return (<>        <div className={`task flex flex-col items-center p-4 mt-5 gap-5 max-lg:gap-5 max-md:text-sm max-w-3xl border-2 ${borderColor} rounded-xl text-center`}>
        <span className={`${props.completed && 'line-through'} text-start`} onClick={() => setShowHiddenDiv(!showHiddenDiv)}>{props.data}</span>
        <div className="flex max-xs:flex-col items-center min-w-fit justify-evenly gap-5 w-full">
            <input type="checkbox" className="scale-150" checked={props.completed} onChange={(e) => { e.target.checked ? toggleStatus(props.id, true, DateTime()) : toggleStatus(props.id, false, DateTime()) }} />
            <button className="min-w-fit h-fit border-2 rounded-lg text-lg max-lg:text-sm" onClick={() => onDelete(props.id)}>Delete</button>
            <span className="text-lg max-md:text-xs">
                Added on: {props.AddTime}
                <br />
                {props.completed && <span> Completed on: {props.completionTime}</span>}
            </span>
        </div>
    </div >
        {showHiddenDiv && <EditBar props={props} ChgData={ChgData} setShowHiddenDiv={setShowHiddenDiv} />}
    </>
    )
}


export const Removed = ({ props, onDelete, onRestore }) => {
    const borderColor = props.completed ? "border-green-500" : "border-yellow-400";

    return (<>        <div className={`task flex flex-col items-center p-4 mt-5 gap-5 max-lg:gap-5 max-md:text-sm max-w-3xl border-2 ${borderColor} rounded-xl text-center`}>
        <span className="text-start">{props.data}</span>
        <div className="flex max-xs:flex-col items-center min-w-fit justify-evenly gap-5 w-full">
            <button className="min-w-fit h-fit border-2 rounded-lg text-lg max-lg:text-sm" onClick={() => onDelete(props.id)}>Delete</button>
            <button className="min-w-fit h-fit border-2 rounded-lg text-lg max-lg:text-sm" onClick={() => onRestore(props.id)}>Restore</button>
        </div>
    </div >
    </>
    )
}



// merge context and tasks component together ( will help to delete the task and you will be able to delete the task from tasks array too)