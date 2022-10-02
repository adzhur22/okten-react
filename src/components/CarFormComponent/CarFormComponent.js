import {useForm} from "react-hook-form";
import {carService} from "../../services";


export function CarFormComponent({setCars}){

    let {register,handleSubmit} = useForm();


    const submit = async (data) => {
       let {data: da} = await carService.create(data)
        setCars(car => {
            car.unshift(da)
            return [...car]
        })

    }

    return(
    <div>
        CarFormComponent
        <form onSubmit={handleSubmit(submit)}>
            <input type='text' placeholder='model' {...register('model')}/>
            <input type='number' placeholder='price' {...register('price')}/>
            <input type='number' placeholder='year' {...register('year')}/>
            <button>add car</button>
        </form>

    </div>

        );
}