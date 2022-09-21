import {useEffect, useState} from "react";
import {carService} from "../../services";
import Car from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";

export default function Cars(){

    const [cars,setcars] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setcars(data));



    }, []);

    let [update,setUpdate] = useState({});


function connector ({...data}) {
    setUpdate(data);


}


        return(
    <div>

    <CarForm setCars={setcars} update={update}/>

    <hr/>

        {cars.map(car => <Car key={car.id} car={car} setcars={setcars} connector={connector} />)}

    </div>

        );
}