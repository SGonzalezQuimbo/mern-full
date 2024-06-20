import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function NavBar() {
    const { isAuthenticated, logout, user } = useAuth();

    return (
        <nav className="bg-blue-200 my-3 flex justify-between py-5 px-10 rounded-lg">
            <Link to='/'>
                <h1>Task aplication LOGO</h1>
            </Link>
            <ul className="flex gap-x-2">
                {isAuthenticated ? (
                    <>
                        <li>
                            Hola! {user?.username}
                        </li>
                        <li>
                            <Link to='/add-task'>Nueva tarea</Link>
                        </li>
                        <li>
                            <Link to='/' onClick={() => { logout() }}>Cerrar Sesion</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to='/login'>Iniciar Sesion</Link>
                        </li>
                        <li>
                            <Link to='/register'>Registrarse</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default NavBar;