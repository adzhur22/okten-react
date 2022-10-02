import {axiosCars} from "./axios.service";
import {urls} from "../configs";

let carService = {
    getAll: (page=1) => axiosCars(urls.cars,{params:{page}}),
    create: (car) => axiosCars.post(urls.cars, car),
    addPhotoById: (id, data) => axiosCars.patch(urls.cars + '/' + id,data)
}

export {carService};