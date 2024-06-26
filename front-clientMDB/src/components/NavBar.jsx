import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";


function NavBar() {
    const { isAuthenticated, logout, user } = useAuth();

    const location = useLocation();

    console.log(location.pathname);

    return (
        <nav className="bg-gray-600  my-3 flex justify-between py-5 px-10 rounded-lg">
            <Link to='/'>
                <h1>Task aplication LOGO</h1>
            </Link>
            <ul className="flex gap-x-2">
                {isAuthenticated ? (
                    <>
                        <li className="bg-yellow-200">
                            Hola! {user?.username}
                        </li>

                        {location.pathname === '/tasks' ? (<li>
                            <Link className="bg-indigo-500 " to='/add-task'>Nueva tarea</Link>
                        </li>) : (<li>
                            <Link className="bg-indigo-500 " to='/tasks'>Ver mis Tareas</Link>
                        </li>)}

                        <li>
                            <Link className="bg-red-500 " to='/' onClick={() => { logout() }}>Cerrar Sesion</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link className="bg-indigo-500 " to='/login'>Iniciar Sesion</Link>
                        </li>
                        <li>
                            <Link className="bg-indigo-500 " to='/register'>Registrarse</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default NavBar;