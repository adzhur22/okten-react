import {useReducer} from "react";
import {useForm} from "react-hook-form";


import Cat from "../Cat/Cat";
import Dog from "../Dog/Dog";
import css from './Main.module.css';
import {reducer} from "../../reducer";



export default function Main(){

    const {register,handleSubmit, reset} = useForm();

    const [state, dispatch] = useReducer(reducer, {cats:[],dogs:[]});



    function onSubmit(data) {
        if(data.cat.length > 0){
            dispatch({type:Object.keys(data)[0], payload:Object.values(data)[0]})
            reset();
        } if (data.dog.length > 0){
            dispatch({type:Object.keys(data)[1], payload:Object.values(data)[1]})
            reset();
        }

    }

    function del (data){
        if (data.deleteCat?.length > 0){
            dispatch({type:Object.keys(data)[0], payload:Object.values(data)[0]})
        }
        if (data.deleteDog?.length > 0){
            dispatch({type:Object.keys(data)[0], payload:Object.values(data)[0]})
        }
    }

        return(
            <div >
             <div className={css.form}>
               <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder={'cat'} {...register('cat')}/>
                    <button>add cat</button>
                    <input placeholder={'dog'}  {...register('dog')}/>
                    <button>add dog</button>

                </form>
             </div>


                <hr/>

                <div className={css.info}>
                    <div className={css.cats}>
                        {state.cats.map((value, index) => <Cat key={index} cat={value} del={del} />)}
                    </div>

                    <div className={css.dogs}>
                        {state.dogs.map((value, index) => <Dog key={index} dog={value} del={del} />)}
                    </div>
                </div>





            </div>

        );
}