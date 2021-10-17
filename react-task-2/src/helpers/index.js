export const arr = []

export function parseObj(obj){
    for (let [key, value] of Object.entries(obj)){
        typeof value !== 'object'? arr.push([key, value]) : parseObj(value)
    }
}

export async function getAlbums(){
    let response = await fetch('https://jsonplaceholder.typicode.com/albums', {
        method: 'GET'
    })
    let responseJSON = await response.json()
    return responseJSON.map(album => {
        return {
            id: album.id,
            title: album.title
        }
    })
}