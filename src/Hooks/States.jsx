import { create } from "zustand";
import { devtools, persist } from "zustand/middleware"

const TaskStore = (set) => ({
    Tasks: [],
    addTask: (task) => {
        set((state) => ({ Tasks: [task, ...state.Tasks] }))
    },
    removeTask: (taskId) => {
        set((state) => ({ Tasks: state.Tasks.filter((i) => i.id !== taskId) }))
    },
    toggleComplete: (taskID, CmpTime) => {
        set((state) => ({ Tasks: state.Tasks.map((i) => i.id == taskID ? {...i, completed : !i.completed, completionTime : CmpTime}: i) }))
    },
    editData: (taskID, NewData) =>{
        set((state) => ({ Tasks: state.Tasks.map((i) => i.id == taskID ? {...i, data: NewData}: i)}))
    }
})

const useTaskStore = create(
    devtools(
        persist(
            TaskStore, { name: "Tasks", }
        )
    )
)

export default useTaskStore;
