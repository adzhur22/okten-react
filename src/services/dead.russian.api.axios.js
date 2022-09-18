import axios from "axios";

let axoisInstance = axios.create({
   baseURL: 'https://russianwarship.rip/api/v1/',
   headers: {}

});

const getLastStatistic = () => {
   return axoisInstance.get('statistics/latest')
};

const getImage = () => {
   return axoisInstance.get('terms/ua')
};



export {getLastStatistic, getImage}


//https://russianwarship.rip/api/v1/terms/ua