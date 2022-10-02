import {axiosCars} from "./axios.service";
import {urls} from "../configs";

const _accessTokenKey = 'access';
const _refreshTokenKey = 'refresh';

const authService = {
    register: (user) => axiosCars.post(urls.users, user),
    login: (user) => axiosCars.post(urls.auth.login, user),
    token: (token) => axiosCars.post(urls.auth.refresh, {token}),

    localStorage:{
        setTokens:({access,refresh})=>{
            localStorage.setItem(_accessTokenKey,access)
            localStorage.setItem(_refreshTokenKey,refresh);
        },
        deleteTokens:()=> {
            localStorage.removeItem(_accessTokenKey);
            localStorage.removeItem(_refreshTokenKey);
        },
        getAccessToken:()=> localStorage.getItem(_accessTokenKey),
        getRefreshToken:()=> localStorage.getItem(_refreshTokenKey)
    }

};


export {authService};