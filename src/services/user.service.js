import {axiosInstance} from "./axios.service";

import {urls} from "../configs";

const userService = {
    getAll:()=> axiosInstance(urls.users),


}

export {userService}