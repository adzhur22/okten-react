import {axiosInstance} from "./axios.service";

import {urls} from "../configs";

const postService = {
    getAll:()=> axiosInstance(urls.posts)
}

export {postService};