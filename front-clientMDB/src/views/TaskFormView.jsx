import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";


function TaskFormView() {

    const navigate = useNavigate();
    const params = useParams();

    const { createTask, getTaskByID, updateTask } = useTasks();
    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const task = await getTaskByID(params.id);
                setValue('title', task.title);
                setValue('description', task.description);
            }
        }
        loadTask();

    })


    const onSubmit = handleSubmit((data) => {

        //primero chequear errores
        // si no hay errores crear la tarea y redirigir a /tasks

        if (params.id) {
            updateTask(params.id, data);
        } else {
            createTask(data);
        }
        navigate('/tasks')
    });



    return (

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

    )
}

export default TaskFormView;