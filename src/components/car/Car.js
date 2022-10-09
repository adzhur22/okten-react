import {useDispatch} from "react-redux";

import {carActions} from "../../redux/car.slicer";

export function Car({car}){

    const dispatch = useDispatch();

        return(
    <div>
        <h4>Car model: {car.model} / car id: {car.id}</h4>
        <p>price: {car.price}</p>
        <p>year: {car.year}</p>

        <button onClick={()=> dispatch(carActions.updateCar(car))} >update</button>
        <button onClick={()=>dispatch(carActions.deleteCar(car.id))} >delete</button>

    </div>

        );
}