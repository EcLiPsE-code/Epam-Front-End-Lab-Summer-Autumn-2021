import {URL} from '../../constants'
import {createURL} from '../../helpers'
import {Albums} from '../actionTypes/actionTypes'

export function loadingAlbums(){
    return async dispatch => {
        try {
            const response = await fetch(createURL(URL)('/albums'), {
                method: 'GET'
            })
            if (!response.ok){
                throw new Error(`Error loading albums`)
            }
            const albumsJSON = await response.json()
            const albums =  albumsJSON.map(album => ({
                id: album.id,
                title: album.title
            }))
            dispatch({
                type: Albums.LOADING_ALBUMS,
                payload: albums
            })
        } catch ({message}) {
            console.log(`Error: ${message}`)
        }
    }
}

export function addLocaleAlbum(album){
    return {
        type: Albums.ADD_LOCALE_ALBUM,
        payload: album
    }
}

export function setActiveAlbum(id){
    return {
        type: Albums.SET_ACTIVE_ALBUM,
        payload: id
    }
}
