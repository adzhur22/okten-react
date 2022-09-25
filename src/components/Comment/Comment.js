import css from './Comment.module.css';
import {useNavigate} from "react-router-dom";

export default function Comment({comment}){
    console.log(comment);

    let navigate = useNavigate();

    return (
        <div className={css.Comment}>
            <div>
                <h3>id: {comment.id} --- Post id: {comment.postId}</h3>
                <h3>email: {comment.email}</h3>
                <h3>name: {comment.name}</h3>
                <p>{comment.body}</p>
            </div>
            <div>

                <button onClick={() => {
                    navigate('/posts/' + comment.id)
                }}>view post</button>
            </div>


        </div>

    );
}