import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";


import {getPlaceholder} from "../../services/get.placeholder.service";
import Post from "../../components/Post/Post";
import css from './Posts.module.css';

export default function Posts(){
    let {id} = useParams();
    let [posts, setPosts] = useState([]);
    console.log(id);
    useEffect(() => {
      getPlaceholder.getCommentPosts(id).then(value => setPosts(value.data))
    }, [id]);

    console.log(posts);

    return(
    <div className={css.Posts}>
        <h1>Posts:</h1>
        {posts.map(value => <Post key={value.id} post={value}/>)}


    </div>

        );
}