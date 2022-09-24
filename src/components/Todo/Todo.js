import css from './Todo.module.css';
export default function Todo({todo}){
    console.log(todo);
    return(
    <div className={css.Todo}>
       <div className={css.Head}>
           <h3>Title: <b>{todo.title}</b>. User id: <b>{todo.userId}</b>. Id: <b>{todo.id}</b>.</h3>
       </div>



    </div>

        );
}