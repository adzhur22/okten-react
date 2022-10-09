import {axoisService} from "./axios.service";

import {urls} from "../configs";

const carService = {
    getAll:()=> axoisService.get(urls.cars),
    create:(car)=> axoisService.post(urls.cars,car),
    getByID:(id)=> axoisService.get(urls.cars + '/' + id),
    updateByID:(id, car)=> axoisService.put(urls.cars + '/' + id, car),
    deleteByID:(id)=> axoisService.delete(urls.cars + '/' + id)
}

export {carService}