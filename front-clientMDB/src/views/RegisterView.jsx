import { useForm } from 'react-hook-form'

function RegisterView() {
    const { register, handleSubmit } = useForm();
    return (
        <div>

            <form
                onSubmit={handleSubmit((values) => {
                    console.log(values);
                })}>
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