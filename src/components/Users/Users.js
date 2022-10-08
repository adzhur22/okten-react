import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userActions} from "../../redux/slices";
import {User} from "../User/User";


export function Users(){
    const dispatch = useDispatch();

    const {users, error, loading} = useSelector(store => store.userReducer);


    useEffect(()=>{
        dispatch(userActions.getAll())
    },[])

        return(
    <div>
        <h1>Users:</h1>

        {loading&& <img src={'https://thumbs.gfycat.com/DevotedDiligentAllosaurus-max-1mb.gif'} alt={'loading'}/>}
        {error && <h1>{error}</h1>}
        {users.map(value => <User key={value.id} user={value}/>)}


    </div>

        );
}