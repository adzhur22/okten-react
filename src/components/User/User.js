import {useDispatch} from "react-redux";

import {userActions} from "../../redux/slices";


export function User({user}){

    const dispatch = useDispatch();

        return(
    <div>
        <h3>user name: {user.name} / user id:{user.id}</h3>

        <button onClick={()=> dispatch(userActions.getUser(user))}>currentUser</button>
        <button onClick={()=> dispatch(userActions.deleteUser(user.id))}>delete user</button>
        <hr/>

    </div>

        );
}