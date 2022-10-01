import {Header} from "../../components";
import {Outlet} from "react-router-dom";

export  function MainLayout(){
        return(
    <div>
        <Header/>
        <hr/>
        <Outlet/>
    </div>

        );
}