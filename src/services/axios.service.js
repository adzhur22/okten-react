import axios from "axios";

import {baseURL} from "../configs";

let axiosInstance = axios.create({
   baseURL,
   headers: {}

});

export {axiosInstance}