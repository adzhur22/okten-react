import {useEffect, useState} from "react";
import {getUsersAxios} from "../../services/flight.spacex.axios.service";
import Flight from "../Flight/Flight";


export default function Flights(){

    let [flights, setFlights] = useState([]);

    useEffect(()=>{
        getUsersAxios().then(value => value.data.filter((year) => year.launch_year < 2020))
            .then(value => setFlights(value))
    },[])



    return(
    <div>
        {flights.map((value,index) =>   <Flight item ={value} key ={index}/>)}

    </div>);
}