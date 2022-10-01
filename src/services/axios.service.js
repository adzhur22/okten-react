import axios from "axios";

import {baseURL} from "../configs";

let axiosCars = axios.create({
   baseURL: baseURL,
   headers: {}

});

export {axiosCars}