import { create } from "zustand";
import { devtools, persist } from "zustand/middleware"

const TaskStore = (set) => ({
    Tasks: [],
    addTask: (task) => {
        set((state) => ({ Tasks: [task, ...state.Tasks] }))
    },
    removeTask: (taskId) => {
        set((state) => ({ Tasks: state.Tasks.filter((i) => i.id !== taskId) }))
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
