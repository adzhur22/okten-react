import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux/car.slicer";
import {useEffect} from "react";

export function CarFrom(){

    const {updateCar} = useSelector(store=> store.carReducer);

    const {register,handleSubmit,reset,formState:{errors,isValid}, setValue} = useForm({
        resolver:joiResolver(carValidator),
        mode:'all'
    });

    useEffect(()=>{
        setValue('model', updateCar?.model);
        setValue('price', updateCar?.price);
        setValue('year', updateCar?.year);
    },[updateCar])



    const dispatch = useDispatch();

    const submit = (car) =>{
        if(!updateCar){
            dispatch(carActions.createCar(car));
        }else {
            // dispatchUpdate
        }

    }

        return(
    <form onSubmit={handleSubmit(submit)}>

        <div>
            <input type={'text'} placeholder={'model'} {...register('model')}/>
            {errors.model && <span>{errors.model.message}</span>}
        </div>

        <div>
            <input type={'text'} placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
            {errors.price && <span>{errors.price.message}</span>}
        </div>

        <div>
            <input type={'text'} placeholder={'year'} {...register('year', {valueAsNumber:true})}/>
            {errors.year && <span>{errors.year.message}</span>}
        </div>
        {updateCar ?  <button disabled={!isValid}>update</button>  : <button disabled={!isValid}>save</button>}
    </form>

        );
}