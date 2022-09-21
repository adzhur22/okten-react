import {useEffect, useState} from "react";
import {carService} from "../../services";
import Car from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";

export default function Cars(){

    const [cars,setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));



    }, []);

    let [update,setUpdate] = useState({});


function connector ({...data}) {
    setUpdate(data);


}


        return(
    <div>

    <CarForm setCars={setCars} update={update}/>

    <hr/>

        {cars.map(car => <Car key={car.id} car={car} setcars={setCars} connector={connector} />)}

    </div>

        );
}