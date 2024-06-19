import { createContext, useContext, useState } from "react";
import { createTaskRequest, getAllTasksRequest } from "../helpers/tasks";

const TasksContext = createContext();

export const useTasks = () => {
    const context = useContext(TasksContext);

    if (!context) {
        throw new Error('useTasksContext must be used within a TaskProvider');
    }

    return context;
}

export function TaskProvider({ children }) {

    const [tasks, setTasks] = useState([])
    const createTask = async (task) => {
        const res = await createTaskRequest(task)
        console.log(res);
    }

    const getTasks = async () => {
        try {
            const res = await getAllTasksRequest(); 
            setTasks(res.data);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <TasksContext.Provider value={{
            tasks,
            createTask,
            getTasks,
        }}>
            {children}
        </TasksContext.Provider>
    )
}