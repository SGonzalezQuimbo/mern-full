import { useForm } from "react-hook-form";
import { axios } from "../helpers/axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";



function LoginView() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const {signin} = useAuth();

    const onSubmit = handleSubmit((values) => {
        signin(values);
    });

    return ( 
        <div  className="flex justify-center" >
            <div className="bg-zinc-500 max-w-md w-full p-10 rounded-md">

            <form onSubmit={onSubmit} >

                <label className="input input-bordered flex items-center gap-2 my-2">
                    <input type="email" className="grow" placeholder="Email" {...register("email", {required: true})} />
                </label>

                {/* <label className="input input-bordered flex items-center gap-2 my-2">
                    <input type="text" className="grow" placeholder="Username" {...register("username", {required: true})} />
                </label> */}

                <label className="input input-bordered flex items-center gap-2 my-2">
                    <input type="password" className="grow" {...register("password", {required: true})} />
                </label>

                <button className='btn btn-success' type='submit'>Ingresar</button>

            </form>
            </div>
        </div>
    )
}

export default LoginView;