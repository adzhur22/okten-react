import axios from "axios";
import {createBrowserHistory} from "history";

import {baseURL} from "../configs";
import {authService} from "./auth.service";

let history = createBrowserHistory();

let axiosCars = axios.create({
   baseURL: baseURL,
});

let isRefreshing = false;

axiosCars.interceptors.request.use((config)=>{
   let access = authService.localStorage.getAccessToken();

  if(access){
     config.headers.Authorization = `Bearer ${access}`
  }
  return config

})

axiosCars.interceptors.response.use((config)=>{
    return config

}, async (erorr)=>{
    let refresh = authService.localStorage.getRefreshToken();

    if(erorr.response?.status === 401 && refresh && !isRefreshing){
        isRefreshing = true;
        try {
            let {data} = await authService.token(refresh);
            authService.localStorage.setTokens(data)
        }catch (e){
            authService.localStorage.deleteTokens();
            history.replace('/login?expSession=true');
        }
        isRefreshing = false;
        return axiosCars(erorr.config);
    }
    return Promise.reject(erorr);

})

export {axiosCars, history}