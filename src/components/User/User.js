import {useDispatch} from "react-redux";
import {userActions} from "../../redux/slices/user.slice";

export function User({user}){

    const dispatch = useDispatch();

        return(
    <div>
        {user.name}/{user.id}
        <button onClick={()=> dispatch(userActions.currentUser(user))}>currentUser</button>
        <button onClick={()=> dispatch(userActions.deleteUser(user.id))}>delete user</button>
    </div>

        );
}