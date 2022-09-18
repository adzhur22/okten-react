import './Statistic.css';
import {useEffect, useState} from "react";
import {getImage, getLastStatistic} from "../../services/dead.russian.api.axios";
import CardIncrease from "../Card/CardIncrease";

export default function Statistic(){

    let [statistic, setStatistic] = useState(null)

    useEffect(() =>{
        getLastStatistic().then(value => {setStatistic(value.data.data)})

    },[])
    // console.log(statistic);

    let [image, setImage] = useState(null);

    useEffect(() => {
        getImage().then(value => {setImage(value.data.data)})

    },[])
    // console.log(image);

    return(
        <div>
           <div className='day'>
               <h3>Дата: <b>{statistic?.date}</b></h3>
               <h3>Сьогодні <b>{statistic?.day}</b> день від початку повномаштабної війни.</h3>
               <h3>Статистика по удобренню українських чорноземів за  сьогодні:</h3>
               <div className='increase'>
                   {image && statistic && Object.keys(statistic?.increase).map(value => <CardIncrease data={statistic.increase[value]} info={image[value]}/>)}
               </div>

           </div>

        </div>

    );
}