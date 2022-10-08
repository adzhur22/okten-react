import {axiosInstance} from "./axios.service";

import {urls} from "../configs";

const userService = {
    getAll:()=> axiosInstance(urls.users),
    getById:(id)=> axiosInstance(urls.users + '/' + id)

}

export {userService}