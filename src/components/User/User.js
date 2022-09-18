export default function User(props){

    let {item, lift} = props;

        return(
    <div>
        <hr/>
        <h3>{item.name}</h3>
        <p>User id: <b>{item.id}</b></p>
        <button onClick={() => lift(item.id)}> details </button>
        <br/>
    </div>

        );
}