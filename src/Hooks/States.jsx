import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import Cookies from 'js-cookie'

const TaskStore = (set) => ({
    isAuthenticated: false, // Indicates user login state
    Tasks: [], // Active Tasks

    login: () => {
        set({ isAuthenticated: true });
        // Load Tasks from cookies or the server when the user logs in
        const savedTasks = loadTasksFromServer();
        set({ Tasks: savedTasks });
    },

    logout: () => {
        clearCookies(); // Clear any cookies related to Tasks
        set({ isAuthenticated: false });
        set({ Tasks: [] }); // Clear Tasks arrays
    },

    checkLoginStatus: () => {
        const token = Cookies.get('token');

        if (token) {
            set({ isAuthenticated: true })
        } else {
            set({ isAuthenticated: false })
        }
    }
});

// Load Tasks from cookies or the server
function loadTasksFromServer() {
    // Implement loading logic here
    // Return an array of Tasks
    
    return [];
}

// Clear cookies
function clearCookies() {
    // Implement clearing cookies logic here
    Cookies.remove('token');
}

const useTaskStore = create(
    devtools(
        persist(TaskStore, { name: 'Tasks' })
    )
);

export default useTaskStore;




// import { create } from "zustand";
// import { devtools, persist } from "zustand/middleware"

// const TaskStore = (set) => ({
//     Tasks: [],
//     DeletedTasks: [],
//     addTask: (task) => {
//         set((state) => ({ Tasks: [task, ...state.Tasks] }))
//     },
//     removeTask: (taskId) => {
//         set((state) => {
//             const removedTask = state.Tasks.find((task) => task.id === taskId);
//             if (removedTask) {
//                 return {
//                     ...state,
//                     Tasks: state.Tasks.filter((task) => task.id !== taskId),
//                     DeletedTasks: [...state.DeletedTasks, removedTask], // Move the removed task to DeletedTasks array
//                 };
//             }
//             return state;
//         });
//     },
//     removeFromDeleted: (taskId) => {
//         set((state) => ({DeletedTasks: state.DeletedTasks.filter((task) => task.id !== taskId)}));
//     },
//     toggleComplete: (taskID, isCompleted, CmpTime) => {
//         set((state) => ({ Tasks: state.Tasks.map((i) => i.id == taskID ? { ...i, completed: isCompleted, completionTime: CmpTime } : i) }))
//     },
//     editData: (taskID, NewData) => {
//         set((state) => ({ Tasks: state.Tasks.map((i) => i.id == taskID ? { ...i, data: NewData } : i) }))
//     },
//     restoreTask: (taskId) => {
//         set((state) => {
//             const restoredTask = state.DeletedTasks.find((task) => task.id === taskId);
//             if (restoredTask) {
//                 return {
//                     ...state,
//                     Tasks: [...state.Tasks, restoredTask], // Add the restored task back to Tasks array
//                     DeletedTasks: state.DeletedTasks.filter((task) => task.id !== taskId), // Remove the task from DeletedTasks array
//                 };
//             }
//             return state;
//         });
//     },
// })

// const useTaskStore = create(
//     devtools(
//         persist(
//             TaskStore, { name: "Tasks", }
//         )
//     )
// )

// export default useTaskStore;
