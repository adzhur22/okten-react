import css from './Car.module.css';
import {carService} from "../../services";

export default function Car({car, setcars, connector}){

    let {id, model, price, year} = car;

    const deleteCar = async () => {
    await carService.deleteById(id)
    setcars(cars=>{
        let index = cars.findIndex(value => value.id === id);
        cars.splice(index, 1);
        return[...cars]
    })
    };

    function update() {
        connector(car);

    }

    return(
    <div className={css.Car}>
        <div>
            <div>id: <b>{id}</b></div>
            <div>model: <b>{model}</b></div>
            <div>price: <b>{price}</b></div>
            <div>year: <b>{year}</b></div>
        </div>

        <div className={css.buttons}>
            <button onClick={()=> update()} >update</button>
            <button onClick={()=> deleteCar()}>delete</button>
        </div>
    </div>

        );
}