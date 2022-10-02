import {HeaderComponent} from "../../components";
import {Outlet} from "react-router-dom";

import css from './MainLayout.module.css';

export  function MainLayout(){
        return(
    <div>
        <div className={css.Header}>
            <HeaderComponent/>
        </div>

        <Outlet/>

    </div>

        );
}