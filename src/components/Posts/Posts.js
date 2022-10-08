import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {postsActions} from "../../redux/slices";
import {Post} from "../Post/Post";


export function Posts(){
    const {posts, loading, errors} = useSelector(store => store.postsReducer);

    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(postsActions.getAllPosts())

    },[])

    return(
    <div>
         <h1>posts:</h1>

        {loading && <img src={'https://thumbs.gfycat.com/DevotedDiligentAllosaurus-max-1mb.gif'} alt={'loading'}/>}
        {errors && <h1>{errors}</h1>}
        {posts.map(posts=><Post key={posts.id} posts={posts}/>)}

    </div>

        );
}