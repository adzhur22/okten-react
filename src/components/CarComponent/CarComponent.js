import {carService} from "../../services";

export function CarComponent({car, setCars}){

      const  sendPhoto = async (e) =>{
        const formData = new FormData();
        formData.append('photo', e.target.files[0]);
        const {data} = await carService.addPhotoById(car.id, formData);
        setCars(cars=> {
           const find = cars.find(cars => cars.id === car.id)
        Object.assign(find, {...data, photo:URL.createObjectURL(e.target.files[0])})
            return[...cars]
        })
    };

        return(
    <div>
        <div>
            <p>id: {car.id}</p>
            <p>model: {car.model}</p>
            <p>price: {car.price}</p>
            <p>year: {car.year}</p>
            {
                car.photo ? <img src={car.photo} alt='model'/>
                    :
                <input type="file" onChange={sendPhoto}/>
            }
        </div>
        <hr/>

    </div>

        );
}