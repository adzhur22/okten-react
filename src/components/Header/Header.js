import {useSelector} from "react-redux";

import css from './Header.module.css'

export function Header(){
       const {currentUser} = useSelector(store => store.userReducer);
       const {post} = useSelector(store => store.postsReducer);
       console.log(currentUser)

        return(
    <div className={css.header}>

        <div className={css.current}>
            <h3>Current User: {currentUser?.name}</h3>
            <h3>Current Post: {post?.title}</h3>
        </div>

    </div>

        );
}