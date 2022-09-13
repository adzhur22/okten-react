const getUser = (id) =>{
    return (fetch('https://rickandmortyapi.com/api/character/'+ id)
        .then(value => value.json()))
}
export {getUser}