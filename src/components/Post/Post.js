import {useDispatch} from "react-redux";

import {postsActions} from "../../redux/slices";


export function Post({posts}){

    const dispatch = useDispatch();

        return(
    <div>
        <h3>post id: {posts.id} / user id: {posts.userId}</h3>

        <h4>{posts.title}</h4>
        <p>{posts.body}</p>

        <button onClick={()=> dispatch(postsActions.currentPost(posts))}>current post</button>
        <button onClick={()=> dispatch(postsActions.deletePost(posts.id))}>delete post</button>
        <hr/>

    </div>

        );
}