import { Link } from "react-router-dom";
import { useTasks } from "../../context/TasksContext";




function Task({ task }) {

    const {deleteTask} = useTasks()

    const handleClick = () => {
        deleteTask(task._id);
        window.alert('Se elimino la tarea correctamente');
    }
    return (
        <>
            <div key={task._id} className="bg-zinc-700 max-w-md w-full p-3 rounded-md "> {/*card w-80 bg-base-200 shadow-xl m-5*/}
                <div>
                    <header className="flex justify-between">
                        <h2>Titulo: {task.title}</h2>

                        <div className="flex gap-x-2 items-center">
                            <button className="bg-red-500 hover:bg-red-800 text-white px-1 py-0.5 rounded-md" onClick={handleClick}>Eliminar</button>
                            <Link className="bg-yellow-500 hover:bg-yellow-800 text-white px-1 py-0.5 rounded-md" to={`/detail-tasks/${task._id}`}>Editar</Link>
                        </div>

                    </header>

                    <p>Descripcion: {task.description}</p>


                </div>
            </div>
        </>
    )
}

export default Task;