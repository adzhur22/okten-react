import {useEffect, useState} from "react";
import {placeholderAxios} from "../../services/placeholder.axios.services";
import {urls} from "../../urls/urls";
import Album from "../../components/Album/Album";

export default function Albums(){

    let [albums, setAlbums] = useState([]);

    useEffect(()=>{
        placeholderAxios(urls.albums).then(value => setAlbums(value.data));

    },[])

        return(
    <div>
        {albums.map(value => <Album key={value.id} album={value} />)}

    </div>

        );
}