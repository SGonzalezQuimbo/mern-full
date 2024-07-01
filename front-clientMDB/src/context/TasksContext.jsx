import { createContext, useContext, useState } from "react";
import { createTaskRequest, getAllTasksRequest, deleteTaskRequest, getTaskRequest, updateTaskRequest } from "../helpers/tasks";

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
        try {
            const res = await createTaskRequest(task)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const getTasks = async () => {
        try {
            const res = await getAllTasksRequest();
            setTasks(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getTaskByID = async (id) => {
        try {
            const res = await getTaskRequest(id);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTask = async (id) => {
        try {
            const res = await deleteTaskRequest(id);
            if (res.status === 200) {
                setTasks(tasks.filter((task) => task._id !== id));
            }
        } catch (error) {
            console.log(error);
        }
    }

    const updateTask = async (id, task) => {
        try {
            await updateTaskRequest(id, task)
            setTasks(tasks)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <TasksContext.Provider value={{
            tasks,
            createTask,
            getTasks,
            deleteTask,
            getTaskByID,
            updateTask,
        }}>
            {children}
        </TasksContext.Provider>
    )
}