import { axios } from "../helpers/axios";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import Task from "../components/Task/Task";

function ListTasks() {

    const { getTasks, tasks} = useTasks();
    const { isAuthenticated, user } = useAuth();

    useEffect(() => {
        getTasks();
    }, [])



    return (
        <>

            <h2>Nombre: {user?.username}</h2>
            <h2>Email: {user?.email}</h2>




            <div>
                {tasks.length === 0 ? <h1>No hay Tareas, comienza a agregar tus tareas</h1> : <h1>Todas mis tareas:</h1>}
                {tasks?.map((task) => (
                    <Task task={task} key={task._id} />
                ))}
            </div>

        </>
    )
}

export default ListTasks;