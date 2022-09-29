export default function Cat({cat,del}){


    return(

    <div>
        <div>cat: {cat}</div>
        <button onClick={()=> del({deleteCat: cat})}>delete</button>
    </div>

        );
}