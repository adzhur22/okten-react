import './CardIncrease.css'
export default function CardIncrease(props){
    let {data,info}=props;
    console.log(info);
        return(
    <div className='cardIncrease'>

        <div className='title'>
            <h4>{info.title}</h4>
        </div>

        <div className='info'>
                <h4>{data}</h4>
                <img src={info.icon}/>
        </div>

    </div>

        );
}