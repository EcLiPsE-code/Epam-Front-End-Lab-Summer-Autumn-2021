import {createURL} from '../../helpers'
import {URL} from '../../constants'
import {Photos} from '../actionTypes/actionTypes'

export function loadingPhotosById(id){
    return async dispatch => {
        try {
            const response = await fetch(createURL(URL)(`/photos?albumId=${id}`), {
                method: 'GET'
            })
            if (!response.ok){
                throw new Error(`Error loading photos`)
            }
            const photosJSON = await response.json()
            dispatch({
                type: Photos.LOADING_PHOTOS,
                payload: photosJSON
            })
        } catch ({message}) {
            console.log(`Error: ${message}`)
        }
    }
}

export function addLocalePhoto(photo){
    return {
        type: Photos.ADD_LOCALE_PHOTO,
        payload: photo
    }
}

export function setPhotos(){
    return {
        type: Photos.SET_PHOTOS
    }
}