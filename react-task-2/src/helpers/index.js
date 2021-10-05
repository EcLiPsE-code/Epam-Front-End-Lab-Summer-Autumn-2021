export const arr = []

export function parseObj(obj){
    for (let [key, value] of Object.entries(obj)){
        typeof value !== 'object'? arr.push([key, value]) : parseObj(value)
    }
}

export function getAlbums(){
    let albums = []
    fetch('https://jsonplaceholder.typicode.com/albums', {
        method: 'GET'
    })
        .then(res => res.json())
        .then(result => {
            result.forEach(album => {
                albums.push({
                    id: album.id,
                    title: album.title
                })
            })
        })
    return albums
}