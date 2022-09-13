import {simpsons} from "../../../simpsons array";
import User from "../person/person";

export default function Family(){
        return(
    <div className= 'simpsons'>
        {
            simpsons.map((value,index) => (<User item={value} key = {index}/>))
        }
    </div>

        );
}