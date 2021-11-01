import {Albums} from '../actionTypes/actionTypes'

const initialState = {
    albums: [],
    localeAlbums: [],
    activeAlbum: null
}

const handlers = {
    [Albums.LOADING_ALBUMS]: (state, {payload}) => ({
        ...state,
        albums: payload
    }),
    [Albums.SET_ACTIVE_ALBUM]: (state, {payload}) => ({
        ...state,
        activeAlbum: payload
    }),
    [Albums.ADD_LOCALE_ALBUM]: (state, {payload}) => ({
        ...state,
        albums: state.albums.concat(payload)
    }),
    'DEFAULT': state => state
}

export default function albumsReducer(state=initialState, action){
    const handle = handlers[action.type] || handlers['DEFAULT']
    return handle(state, action)
}