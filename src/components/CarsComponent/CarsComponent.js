import {useEffect, useState} from "react";
import {carService} from "../../services";
import {CarComponent} from "../CarComponent/CarComponent";
import {useSearchParams} from "react-router-dom";
import {CarFormComponent} from "../CarFormComponent/CarFormComponent";



export function CarsComponent(){
        let [cars, setCars] = useState([]);
        let [prev,setPrev] = useState(null);
        let [next,setNext] = useState(null);
        let [query, setQuery] = useSearchParams({page:'1'});




        useEffect(()=>{
            carService.getAll(query.get('page')).then(({data: array}) => {
                setCars(array.data)
                setPrev(array.prev)
                setNext(array.next)
            })
        },[query]);

    const prevPage = () => {
        setQuery(value =>({page:value.get('page')-1}))
    };

    const nextPage = () => {
        setQuery(value =>({page:+value.get('page')+1}))
    };


    return(
    <div>

        <CarFormComponent setCars = {setCars}/>

        {cars.map(value => <CarComponent key={value.id} car={value} setCars={setCars} />)}

        <div>
            <button disabled={!prev} onClick={prevPage}>prevPage</button>
            <button disabled={!next} onClick={nextPage}>nextPage</button>
        </div>

    </div>

        );
}
