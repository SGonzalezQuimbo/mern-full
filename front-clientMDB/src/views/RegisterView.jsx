import { useForm } from 'react-hook-form'
import { axios } from '../helpers/axios'


function RegisterView() {
    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit( async (values) => {
        console.log(values);
        try {
            const res = await axios.post('/register', values);
            console.log(res);
        } catch (error) {
            console.log("ERROR", error.response.data.message);
        }
    })

    return ( 
        <div>

            <form
                onSubmit={onSubmit}>
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
    )
}

export default RegisterView;