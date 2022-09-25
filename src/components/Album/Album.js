import css from './Album.module.css';

export default function Album({album}){

        return(
    <div className={css.Album}>
        <h4>id: {album.id} - user id: {album.userId}</h4>
        <h4>{album.title}</h4>

    </div>

        );
}