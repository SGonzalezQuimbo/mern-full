import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate } from "react-router-dom";


function TaskFormView() {

    const navigate = useNavigate()

    const { createTask } = useTasks();
    const { register, handleSubmit } = useForm();


    const onSubmit = handleSubmit((data) => {

        //primero chequear errores
        // si no hay errores crear la tarea y redirigir a /tasks
        createTask(data);

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