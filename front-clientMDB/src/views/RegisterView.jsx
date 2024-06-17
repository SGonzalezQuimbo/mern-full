import { useForm } from 'react-hook-form'
//import { axios } from '../helpers/axios'
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterView() {
    const { register, handleSubmit } = useForm(); //aca tambien extraer los errorres para mostrarlos en pantalla
    const {signup, isAuthenticated} = useAuth();
    const navigate = useNavigate();
    console.log(isAuthenticated);


    useEffect(()=>{
        if (isAuthenticated) {
            navigate('/tasks')
        }
    }, [isAuthenticated])


    const onSubmit = handleSubmit( async (values) => {

        signup(values);
        // console.log(values);
        // try {
        //     const res = await axios.post('/register', values);
        //     console.log(res);
        // } catch (error) {
        //     console.log("ERROR", error.response.data.message);
        // }
    })

    return ( 
        <div  className="flex justify-center" >
            <div className=" w-96  py-20">

            <form onSubmit={onSubmit} >
                {/* <label>Nombre de usuario:</label>
                <input type="text" {...register("username", { required: true })} />

                <label>Email:</label>
                <input type="email" {...register("email", { required: true })} />

                <label>Contraseña:</label>
                <input type="password" {...register("password", { required: true })} /> */}


                <label className="input input-bordered flex items-center gap-2 my-2">
                    <input type="email" className="grow" placeholder="Email" {...register("email", {required: true})} />
                </label>

                <label className="input input-bordered flex items-center gap-2 my-2">
                    <input type="text" className="grow" placeholder="Username" {...register("username", {required: true})} />
                </label>

                <label className="input input-bordered flex items-center gap-2 my-2">
                    <input type="password" className="grow" {...register("password", {required: true})} />
                </label>

                <button className='btn btn-success' type='submit'>Registrarse</button>


            </form>
            </div>
        </div>
    )
}

export default RegisterView;