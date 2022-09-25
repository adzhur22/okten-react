import {useEffect, useState} from "react";

import {placeholderAxios} from "../../services/placeholder.axios.services";
import {urls} from "../../urls/urls";
import Todo from "../../components/Todo/Todo";

import css from './Todos.module.css';

export default function Todos(){

    let [todos, setTodos]  = useState([]);

    useEffect(()=>{
        placeholderAxios(urls.todos).then(value => setTodos(value.data));

    },[])

        return(
    <div className={css.Todos}>
        <h1>Todo:</h1>
        {todos.map(value => <Todo key={value.id} todo={value}/>)}

    </div>

        );
}