export default function User(props){

    let {item, lift} = props;

        return(
    <div>
        <hr/>
        <h3>{item.name}</h3>
        <p>Username: <b>{item.username}</b> / Email: <b>{item.email}</b></p>
        <button onClick={() => lift(item.id)}> details </button>
        <br/>
    </div>

        );
}