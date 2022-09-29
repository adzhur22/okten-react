export default function Cat({cat,del}){


    return(

    <div>
        <div>{cat}
            <button onClick={()=> del({deleteCat: cat})}>delete</button>
        </div>

    </div>

        );
}