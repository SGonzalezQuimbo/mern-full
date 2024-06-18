import { axios } from "../helpers/axios";
import { useState, useEffect} from "react";
import { useAuth } from "../context/AuthContext";

function ListTasks() {

    const {allTasks, setAllTasks} = useState([]);
    const {user} = useAuth();
    // const cargaTasks = async() => {
    //     try {
    //         const dataDB = await axios.get('/tasks')
    //         console.log(dataDB);
    //     } catch (error) {
    //         console.log('no se puede acceder');
    //     }
    // }

    // useEffect(()=>{
    //     cargaTasks();
    // },[] )

    return (
        <>
            <nav>
                <button className='btn m-7' >Perfil</button>
                <button className='btn m-7'>Cerrar sesion</button>
            </nav>

            <h2>Todas las tareas tasks del usuario</h2>
            <h2>Nombre: {user.username}</h2>
            <h2>Email: {user.email}</h2>
        </>
    )
}

export default ListTasks;