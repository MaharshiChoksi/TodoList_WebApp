import React from "react"
import { Removed } from "../components/Tasks";
import useTaskstore from "../Hooks/States";
import { Header } from "../Layout/Header";
import { Footer } from "../Layout/Footer";


export const Deleted = () => {
    const { removed, removeTask, restoreTask } = useTaskstore((state) => ({
        removed: state.DeletedTasks,
        removeTask: state.removeFromDeleted,
        restoreTask: state.restoreTask,
    }));


    return (
        <>
        <Header />
            <div className="flex-grow text-2xl min-w-full p-10 pb-20 justify-center">
                <div className="flex flex-col pt-10 items-center">
                    {
                        removed[0] && removed.map((val, key) => <Removed props={val} key={key} onDelete={(childId) => removeTask(childId)} onRestore={(childId)=>restoreTask(childId)} />)
                    }
                </div>
            </div >
            <Footer />
        </>
    )
}
