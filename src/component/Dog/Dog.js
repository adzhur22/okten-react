export default function Dog({dog,del}){


    return(

        <div>
            <div>dog: {dog}</div>
            <button onClick={()=> del({deleteDog: dog})}>delete</button>
        </div>

    );
}