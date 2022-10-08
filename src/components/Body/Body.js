import {Users} from "../Users/Users";
import {Posts} from "../Posts/Posts";

import css from './Body.module.css'

export function Body(){

    return(
    <div className={css.body}>

        <div className={css.users}><Users/></div>

        <div className={css.posts}><Posts/></div>

    </div>

        );
}