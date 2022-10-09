import axios from "axios";

import {baseURL} from "../configs";

const axoisService = axios.create({
   baseURL,
   headers: {}

});

export {axoisService}