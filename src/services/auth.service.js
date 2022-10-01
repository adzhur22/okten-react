import {axiosCars} from "./axios.service";
import {urls} from "../configs";



const authService = {
    register: (user) => axiosCars.post(urls.users, user),
    login: (user) => axiosCars.post(urls.auth.login, user),
    token: (token) => axiosCars.post(urls.auth.refresh, {token}),

    localStorage:{

    }
};

export {authService};