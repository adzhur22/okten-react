import css from './Post.module.css';

export default function Post({post}){
       console.log(post);

        return(
    <div className={css.Post}>
        <h5> User id: {post.userId}  /  id: {post.id}</h5>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </div>

        );
}