export default function User(props){
    let{item: value}=props;

        return(
    <div>
        <h2>{value.name} {value.surname}</h2>
        <p>Age: {value.age}</p>
        <p>{value.info}</p>
        <img src={value.photo} alt='simpsons'/>

    </div>

        );
}



