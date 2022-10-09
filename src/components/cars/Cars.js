import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carActions} from "../../redux/car.slicer";
import {Car} from "../car/Car";
import {CarFrom} from "../carForm/CarFrom";

export function Cars(){

    const dispatch = useDispatch();

    const {cars, loading, errors} = useSelector(store => store.carReducer);


    useEffect(()=>{
        dispatch(carActions.getAllCars())
    },[])

        return(
    <div>
        <CarFrom/>
        <hr/>
        {loading && <img src={'https://acegif.com/wp-content/uploads/loading-25.gif'} alt={'loading'}/>}
        {cars && cars.map(value => <Car key={value.id} car={value}/>)}
        {errors && <h1>{errors}</h1>}
    </div>

        );
}