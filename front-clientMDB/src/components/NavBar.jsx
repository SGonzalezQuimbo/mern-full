import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";

function NavBar() {
    const { isAuthenticated, logout, user } = useAuth();

    const location = useLocation();

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Sask</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <></>
            
            <nav className="bg-gray-600  my-3 flex justify-between py-5 px-10 rounded-lg">
                <Link to='/'>
                    <h1>Task aplication LOGO</h1>
                </Link>
                <ul className="flex gap-x-2">
                    {isAuthenticated ? (
                        <>
                            <li className="bg-yellow-500 rounded-md text-white">
                                Hola! {user?.username}
                            </li>

                            {location.pathname === '/tasks' ? (<li>
                                <Link className="bg-indigo-500 hover:bg-indigo-800 text-white px-1 py-0.5 rounded-md" to='/add-task'>Nueva tarea</Link>
                            </li>) : (<li>
                                <Link className="bg-indigo-500 hover:bg-indigo-800 text-white px-1 py-0.5 rounded-md" to='/tasks'>Ver mis Tareas</Link>
                            </li>)}

                            <li>
                                <Link className="bg-red-500 hover:bg-red-800 text-white px-1 py-0.5 rounded-md" to='/' onClick={() => { logout() }}>Cerrar Sesion</Link>
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
        </>

    )
}

export default NavBar;