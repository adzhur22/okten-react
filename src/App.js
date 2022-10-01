import './App.css';
import {MainLayout} from "./layouts";
import {Route, Routes} from "react-router-dom";
import {LoginPage, RegisterPage} from "./pages";


function App() {
  return (
    <div >
    <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route path={'login'} element={<LoginPage/>}/>
          <Route path={'register'} element={<RegisterPage/>}/>
        </Route>

    </Routes>


    </div>
  );
}

export default App;
