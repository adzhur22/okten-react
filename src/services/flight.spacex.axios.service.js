import axios from "axios";

let axiosInstance = axios.create({
   baseURL: 'https://api.spacexdata.com/v3/launches/',
   headers: {}

});

const getUsersAxios = () => {
    return axiosInstance.get()

};

export {getUsersAxios}
