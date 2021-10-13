import {URL} from '../constants'

export const arr = []

function createURL(address){
    return address => {
        return URL + address
    }
}

export function parseObj(obj){
    for (let [key, value] of Object.entries(obj)){
        typeof value !== 'object'? arr.push([key, value]) : parseObj(value)
    }
}

export async function getPhotosByAlbum(id){
    try{
        let response = await fetch(createURL(URL)(`/photos?albumId=${id}`), {
            method: 'GET'
        })
        if (!response.ok){
            throw new Error(`Error loading photos`)
        }
        return await response.json()
    } catch ({message}) {
        console.log(`Error: ${message}`)
    }
}

export async function getAlbums(){
    try{
        let response = await fetch(createURL(URL)('/albums'), {
            method: 'GET'
        })
        if (!response.ok){
            throw new Error('Error loading albums')
        }

        let albumsJSON = await response.json()
        return albumsJSON.map(album => ({
            id: album.id,
            title: album.title
        }))
    } catch ({message}) {
        console.log(`Exceprion: ${message}`)
    }
}