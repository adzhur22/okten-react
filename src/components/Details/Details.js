import {useEffect, useState} from "react";

import {getUser} from "../../services/users.api.service";

export default function Details({id}){


    let [user, setUser] = useState([]);

    useEffect(() =>{
        getUser(id).then(value =>{setUser(value)
            console.log(value);
        } );
    },[id]);


        return(
    <div>
    <h1>{user.name} id: {id}</h1>
        <h3> Username: {user.username}</h3>
        <h3> Email: {user.email}</h3>
        <h3> Phone: {user.phone}</h3>
        <h3> Website: {user.website}</h3>
        <ul> <b>address:</b>
            <li>city: {user.city?.street}</li>
            <li>street: {user.address?.street}</li>
            <li>suite: {user.address?.suite}</li>
            <li>zipcode: {user.address?.zipcode}</li>

            <ul> <b>geo:</b>
                <li>lat: {user.address?.geo?.lat} / lng: {user.address?.geo?.lng} </li>
            </ul>
        </ul>

        <ul> <b>company:</b>
            <li>name: {user.company?.name}</li>
            <li>catch phrase: {user.company?.catchPhrase}</li>
            <li>bs: {user.company?.bs}</li>
        </ul>

    </div>

        );
}