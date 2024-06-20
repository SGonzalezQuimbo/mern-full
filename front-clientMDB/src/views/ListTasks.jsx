import { axios } from "../helpers/axios";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";

function ListTasks() {

    const { getTasks, tasks, createTask } = useTasks();
    const { isAuthenticated, user } = useAuth();

    const { register, handleSubmit } = useForm();

    // const cargaTasks = async() => {
    //     try {
    //         const dataDB = await axios.get('/tasks')
    //         console.log(dataDB);
    //     } catch (error) {
    //         console.log('no se puede acceder');
    //     }
    // }

    useEffect(() => {
        getTasks();
    }, [])

    const onSubmit = handleSubmit((data) => {
        createTask(data);
    });

    return (
        <>
            <nav>
                <button className='btn m-7' >Perfil</button>
                <button className='btn m-7'>Cerrar sesion</button>
            </nav>

            <h2>Nombre: {user?.username}</h2>
            <h2>Email: {user?.email}</h2>

            
            <div>
                <form onSubmit={onSubmit}>
                    <label className="input input-bordered flex items-center gap-2 my-2">
                        <input type="text" className="grow" placeholder="Titulo" {...register("title")} autoFocus />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 my-2">
                        <input type="text" className="grow" placeholder="Descripcion" {...register("description")} />
                    </label>

                    <button className="btn btn-success">Guardar</button>
                </form>
            </div>

            <div>
            {tasks.length === 0 ? <h1>No hay Tareas, comienza a agregar tus tareas</h1> : <h1>Todas mis tareas:</h1>}
                {tasks?.map((task) => (
                    <div key={task._id}>
                        <h2>Titulo: {task.title}</h2>
                        <p>Descripcion: {task.description}</p>
                    </div>
                ))}
            </div>

        </>
    )
}

export default ListTasks;