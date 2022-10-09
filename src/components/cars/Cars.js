import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {carActions} from "../../redux/car.slicer";
import {Car} from "../car/Car";
import {CarFrom} from "../carForm/CarFrom";

export function Cars(){

    const dispatch = useDispatch();

    const {cars} = useSelector(store => store.carReducer);

    useEffect(()=>{
        dispatch(carActions.getAllCars())
    },[])

        return(
    <div>
        <CarFrom/>
        <hr/>
        {cars.map(value => <Car key={value.id} car={value}/>)}
    </div>

        );
}