import {useEffect, useState} from "react"
    ;
import {placeholderAxios} from "../../services/placeholder.axios.services";
import {urls} from "../../urls/urls";
import Album from "../../components/Album/Album";
import css from './Albums.module.css';

export default function Albums(){

    let [albums, setAlbums] = useState([]);

    useEffect(()=>{
        placeholderAxios(urls.albums).then(value => setAlbums(value.data));

    },[])

        return(
    <div className={css.Albums}>
        <h1>Album:</h1>
        {albums.map(value => <Album key={value.id} album={value} />)}

    </div>

        );
}