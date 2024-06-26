import { Link } from "react-router-dom";


function Task({task}) {
    return (
        <>
            <div key={task._id} className="card w-96 bg-base-100 shadow-xl">
                {/* <figure><img src="https://www.autoscout24.es/cms-content-assets/6w3WbaufrPylttArJPqS36-a4a52ac6901cfcb1b578f19e8644dbbe-ford-mustang-l-01-1100.jpg" alt="Shoes" /></figure> */}
                {/* <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div> */}
                <div>
                        <h2>Titulo: {task.title}</h2>
                        <p>Descripcion: {task.description}</p>

                        <button className="btn-success " onClick={()=>{console.log('eliminando tarea')}}>Eliminar</button>
                        <Link to={`/detail-tasks/${task._id}`}>Editar</Link>
                </div>
            </div>
        </>
    )
}

export default Task;