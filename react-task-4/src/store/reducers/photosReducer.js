import {Photos} from '../actionTypes/actionTypes'

const initialState = {
    photos: [],
    localePhotos: []
}

const handlers = {
    [Photos.LOADING_PHOTOS]: (state, {payload}) => ({
        ...state,
        photos: payload
    }),
    [Photos.SET_PHOTOS]: (state) => ({
        ...state,
        photos: []
    }),
    [Photos.ADD_LOCALE_PHOTO]: (state, {payload}) => ({
        ...state,
        localePhotos: state.localePhotos.concat(payload)
    }),
    'DEFAULT': state => state
}

export default function photosReducer(state=initialState, action){
    const handle = handlers[action.type] || handlers['DEFAULT']
    return handle(state, action)
}