import {useForm} from "react-hook-form";
import {authService} from "../../services";
import {useState} from "react";

export function LoginComponent(){
    let {register,handleSubmit} = useForm();

    let [error, setError] = useState();


    async function submit(user) {
        try {
            let {data} = await authService.login(user);
            console.log(data);
        }catch (e){
            setError(e.response.data?.detail);
        }


    }

    return(
    <div>
        LoginComponent

        {error && <h3>{error}</h3>}

        <form onSubmit={handleSubmit(submit)}>
            <input placeholder={'username'} {...register('username')}/>
            <input placeholder={'password'} {...register('password')}/>
            <button>login</button>
        </form>


    </div>

        );
}