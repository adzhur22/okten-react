import {placeholderAxios} from "./placeholder.axios.services";
import {urls} from "../urls/urls";

const getPlaceholder = {
    getTodos: ()=> placeholderAxios(urls.todos),
    getComments: ()=> placeholderAxios(urls.comments),
    getAlbums: ()=> placeholderAxios(urls.albums)
}

export{getPlaceholder}