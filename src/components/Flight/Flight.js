export default function Flight({item}){

console.log(item);


        return(
    <div>
     <hr/>
    <h3>Mission name: {item.mission_name}</h3>
     <p>Launch year: {item.launch_year}</p>
        <img src={item?.links?.mission_patch_small}/>
    <hr/>
    </div>

        );
}