import {useForm} from "react-hook-form";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {authService} from "../../services";


export function LoginComponent(){

    let {register,handleSubmit} = useForm();

    let [error, setError] = useState();

    let navigate = useNavigate();


    async function submit(user) {
        try {
            let {data} = await authService.login(user);
            authService.localStorage.setTokens(data);
            navigate('/cars')

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