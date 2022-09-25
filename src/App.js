import './App.css';

import {Link, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Albums from "./pages/Albums/Albums";
import Comments from "./pages/Comments/Comments";
import Todos from "./pages/Todos/Todos";
import Posts from "./pages/Posts/Posts";

//реалізувати 3 маршрути
// todos - при переході на який тягнуться всі todo з https://jsonplaceholder.typicode.com/todos
//
// albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums
//
// comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments
// при натисканні на комментар тягнеться пост, до якого належіить цей коментар всі його пости. приклад запиту https://jsonplaceholder.typicode.com/posts/ID
// id поста взяти з коментаря (postId)
//
// відображати ті чи інші маршрути можна на будь-якому рівні на ваш вибір.


function App() {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home Page</Link></li>
                <li><Link to={'/todos'}>Todos</Link></li>
                <li><Link to={'/albums'}>Albums</Link></li>
                <li><Link to={'/comments'}>Comments</Link></li>
            </ul>

            <hr/>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path={'albums'} element={<Albums/>}/>
                <Route path={'comments'} element={<Comments/>}/>
                <Route path={'posts/:id'} element={<Posts/>}/>
                <Route path={'todos'} element={<Todos/>}/>
            </Routes>


        </div>
    );
}

export default App;
