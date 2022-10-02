import {useNavigate} from "react-router-dom";

import css from './HeaderComponent.module.css';


export function HeaderComponent(){
    let navigate = useNavigate();

    return(
    <div>



       <div className={css.buttonDiv} >

        <button onClick={()=> navigate('/register')}>register</button>
        <button onClick={()=> navigate('/login')}>login</button>
       </div>

    </div>

        );
}