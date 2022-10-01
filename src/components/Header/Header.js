import {useNavigate} from "react-router-dom";

export function Header(){
    let navigate = useNavigate();

    return(
    <div>
       <div>
        <button onClick={()=> navigate('/register')}>register</button>
        <button onClick={()=> navigate('/login')}>login</button>
       </div>

    </div>

        );
}