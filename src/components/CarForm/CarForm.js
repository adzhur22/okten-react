import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi'
import {useEffect, useState} from "react";

import {carValidator} from "../../validators";
import {carService} from "../../services";
import css from './CarForm.module.css';



const CarForm = ({setCars, update}) =>{



    let [buttonSave, setButtonSave] = useState(false);
    let [buttonUpdate, setButtonUpdate] = useState(true);

   const {register,handleSubmit,reset,formState:{errors,isValid}, setValue} = useForm({
       resolver:joiResolver(carValidator),
       mode:'all'});

    useEffect(() => {
        // console.log(update);
        setValue('model', update.model);
        setValue('price', update.price);
        setValue('year', update.year);

        function click ()  {

            if (buttonSave === false) {
                 setButtonSave(true)
                setButtonUpdate(false)
             } else {
                setButtonSave(false)
                setButtonUpdate(true)
            }
        }
        click();

    }, [update]);



    const submit = async (car) => {
        let {data} = await carService.create(car);
        setCars(cars=>[...cars,data])
        reset()
    }
// нажаль не зміг реалізувати оновлення інформації... як не крутив, не получилось(

    const updateInfo = async (car) => {
        let {data} = await carService.updateById(update.id, car);
        reset()

    }



    return(


        <div className={css.DivButton}>
        <form onSubmit={handleSubmit(submit)}>
            <input type='text' placeholder={'model'} {...register('model')}/>
            {errors.model && <span>{errors.model.message}</span>}
            <input type='text' placeholder={'price'} {...register('price',{valueAsNumber:true})}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type='text' placeholder={'year'} {...register('year',{valueAsNumber:true})}/>
            {errors.year && <span>{errors.year.message}</span>}

            {buttonSave && <button disabled={!isValid}>save</button>}


        </form>
            {buttonUpdate && <button onClick={handleSubmit(updateInfo)}>update</button>}
        </div>
    );
}
export {CarForm}