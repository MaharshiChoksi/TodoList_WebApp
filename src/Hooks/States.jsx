import { create } from "zustand";
import { devtools, persist } from "zustand/middleware"

const TaskStore = (set) => ({
    Tasks: [],
    DeletedTasks: [],
    addTask: (task) => {
        set((state) => ({ Tasks: [task, ...state.Tasks] }))
    },
    removeTask: (taskId) => {
        set((state) => {
            const removedTask = state.Tasks.find((task) => task.id === taskId);
            if (removedTask) {
                return {
                    ...state,
                    Tasks: state.Tasks.filter((task) => task.id !== taskId),
                    DeletedTasks: [...state.DeletedTasks, removedTask], // Move the removed task to DeletedTasks array
                };
            }
            return state;
        });
    },
    removeFromDeleted: (taskId) => {
        set((state) => ({DeletedTasks: state.DeletedTasks.filter((task) => task.id !== taskId)}));
    },
    toggleComplete: (taskID, isCompleted, CmpTime) => {
        set((state) => ({ Tasks: state.Tasks.map((i) => i.id == taskID ? { ...i, completed: isCompleted, completionTime: CmpTime } : i) }))
    },
    editData: (taskID, NewData) => {
        set((state) => ({ Tasks: state.Tasks.map((i) => i.id == taskID ? { ...i, data: NewData } : i) }))
    },
    restoreTask: (taskId) => {
        set((state) => {
            const restoredTask = state.DeletedTasks.find((task) => task.id === taskId);
            if (restoredTask) {
                return {
                    ...state,
                    Tasks: [...state.Tasks, restoredTask], // Add the restored task back to Tasks array
                    DeletedTasks: state.DeletedTasks.filter((task) => task.id !== taskId), // Remove the task from DeletedTasks array
                };
            }
            return state;
        });
    },
})

const useTaskStore = create(
    devtools(
        persist(
            TaskStore, { name: "Tasks", }
        )
    )
)

export default useTaskStore;
