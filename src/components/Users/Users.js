import {useEffect, useState} from "react";

import {getUsers} from "../../services/users.api.service";
import User from "../User/User";
import Details from "../Details/Details";

export default function Users(){

    let [users, setUsers] = useState([]);

    let[user, setUser] = useState(undefined);

    const lift = (id) => {
        setUser(id);

    };



    useEffect(()=>{
        getUsers().then(value => setUsers(value));

    },[]);

        return(
    <div>
        {user && <Details id={user}/>}
        {users.map((user, index) =>  <User item={user} key={index} lift={lift}/>)}

    </div>

        );
}