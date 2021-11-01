import {combineReducers} from 'redux'
import photosReducer from './reducers/photosReducer'
import albumsReducer from './reducers/albumsReducer'

export default combineReducers({
    photosReducer,
    albumsReducer
})