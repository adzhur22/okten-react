import {useSelector} from "react-redux";

export function Header(){
       const {currentUser} = useSelector(store => store.userReducer);
       console.log(currentUser)

        return(
    <div>
        currentUser: {currentUser?.name}

    </div>

        );
}