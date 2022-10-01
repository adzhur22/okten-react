import {useForm} from "react-hook-form";

import {authService} from "../../services";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export function RegisterComponent(){

    let {register,handleSubmit} = useForm();
    let navigate = useNavigate();
    
    let [error, setError] = useState();


   async function submit(data) {
       try {
           await authService.register(data)
           navigate('/login')
       }catch (e){
           setError(e.response.data?.username[0]);
       }

    }

    return(
    <div>
        RegisterComponent
        {error && <h3>{error}</h3>}
        <form onSubmit={handleSubmit(submit)}>
            <input placeholder={'username'} {...register('username')}/>
            <input placeholder={'password'} {...register('password')}/>
            <button>registeration</button>
        </form>

    </div>

        );
}