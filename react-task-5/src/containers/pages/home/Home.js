import React, {useEffect} from 'react'
import UserDetails from '../../../components/pages/home/user/UserDetails'
import './home.scss'
import UserContent from '../../../components/pages/home/content/UserContent'
import {test} from '../../../constants/index'
import logo from '../../../assets/imgs/backup.svg'
import album from '../../../assets/imgs/album.svg'
import photo from '../../../assets/imgs/photo.svg'
import {useDispatch, useSelector} from 'react-redux'
import {addLocaleAlbum, loadingAlbums, setActiveAlbum} from '../../../store/actionCreators/albumsAction'
import {addLocalePhoto, loadingPhotosById, setPhotos} from '../../../store/actionCreators/photosAction'

const Home = () => {

    const albums = useSelector(state => state.albumsReducer.albums)
    const photos = useSelector(state => state.photosReducer.photos)
    const localePhotos = useSelector(state => state.photosReducer.localePhotos)
    const activeAlbum = useSelector(state => state.albumsReducer.activeAlbum)
    const dispatch = useDispatch()

    const classNameList = ['btn-back']

    const loadingPhotosHandler = id => {
        dispatch(setActiveAlbum(id))
    }

    useEffect(() => {
        dispatch(loadingAlbums())
    }, [])

    useEffect(() => {
        dispatch(loadingPhotosById(activeAlbum))
    }, [activeAlbum])

    const btnBackClickHandler = () => {
        dispatch(setActiveAlbum(null))
        dispatch(setPhotos())
    }

    const addPhotoHandler = () => {
        dispatch(addLocalePhoto({
            id: localePhotos.length? `photo${localePhotos.length + 1}` : `photo1`,
            title: `photo ${localePhotos.length? localePhotos.length + 1 : 1}`
        }))
    }

    const addAlbumHandler = () => {
        dispatch(addLocaleAlbum({
            id: albums.length + 1,
            title: `Album ${albums.length + 1}`
        }))
    }

    activeAlbum? classNameList.splice(classNameList.length - 1, -1) : classNameList.push('btn-back-inactive')

    return (
        <>
            <div className={'home-wrapper'}>
                <UserDetails user={test} />
                {
                    photos.length > 0?
                        <UserContent data = {photos.concat(localePhotos)} />
                        :
                        <UserContent data = {albums} clickHandler={loadingPhotosHandler}/>
                }
            </div>
            <div className={classNameList.join(' ')}>
                <img src={logo} onClick={btnBackClickHandler} alt={'Photo back'}/>
            </div>
            <div className={'btn-add'}>
                <img src={album} onClick={addAlbumHandler} alt={'album'}/>
                <img src={photo} onClick={addPhotoHandler} alt={'photo'}/>
            </div>
        </>
    )
}

export default Home
