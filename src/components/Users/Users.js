import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userService} from "../../services";
import {userActions} from "../../redux/slices/user.slice";
import {User} from "../User/User";

export function Users(){

    const dispatch = useDispatch();

    const {users} = useSelector(store => store.userReducer);


    useEffect(()=>{
        userService.getAll().then(({data}) => dispatch(userActions.getAll(data)))
    },[])

        return(
    <div>
        {users.map(value => <User key={value.id} user={value}/>)}


    </div>

        );
}