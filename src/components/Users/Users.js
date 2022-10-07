import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {userService} from "../../services";
import {userActions} from "../../redux";

export function Users(){

    let dispatch = useDispatch();
    
    const state = useSelector(state => state.userReducer);
    console.log(state);
    
    useEffect(()=>{

        userService.getAll().then(({data})=>dispatch(userActions.getAll(data)));

    },[])

        return(
    <div>


    </div>

        );
}