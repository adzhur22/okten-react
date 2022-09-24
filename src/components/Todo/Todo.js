import css from './Todo.module.css';
export default function Todo({todo}){


    console.log(todo);
    return(
    <div className={css.Todo}>
       <div className={css.Head}>
           <h4>User id: <b>{todo.userId}</b>. Id: <b>{todo.id}</b>.</h4>
           <h4>Title: <b>{todo.title}</b></h4>
           {!todo.completed ? <h4 className={css.CompletedFalse} >Completed: <b>{todo.completed + ''}</b></h4> : <h4 className={css.CompletedTrue} >Completed: <b>{todo.completed + ''}</b></h4>}
       </div>



    </div>

        );
}