import {useEffect, useState} from "react";
import {getUser} from "../../../rick data";


export default function User(props){

    let [users,setUsers] = useState(0);
    let {id} = props;
    useEffect(() => {getUser(id).then(value =>{setUsers(value)})},[]);


    return (
        <div className='Rick'>
                    <h2>{users.name}, id: {users.id}</h2>
                    <img src={users.image} alt={users.name}/>
                    <h4>status: {users.status}</h4>
                    <h4>species: {users.species}</h4>
                    <h4>gender: {users.gender}</h4>

        </div>
    );
}
