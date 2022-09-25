import {useEffect, useState} from "react";

import {placeholderAxios} from "../../services/placeholder.axios.services";
import {urls} from "../../urls/urls";
import Comment from "../../components/Comment/Comment";

import css from './Comments.module.css';
import {Outlet} from "react-router-dom";

export default function Comments(){



    let [comment, setComment] = useState([]);

        useEffect(()=>{
            placeholderAxios(urls.comments).then(value => setComment(value.data))

        },[])

    return(
    <div className={css.Comments}>
        <h1>Comments:</h1>
        {comment.map(value => <Comment key={value.id} comment={value}/>)}

    </div>

        );
}