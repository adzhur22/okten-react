import axios from "axios";

import {baseUrl} from "../urls/urls";

let placeholderAxios = axios.create({
   baseURL: baseUrl,
});

export {placeholderAxios};