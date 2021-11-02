import React, {useCallback, useEffect, useState} from 'react'
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
import {Modal} from "../../../components/pages/home/modals/Modal";
import * as Selector from "../../../store/selectors/selectors";

const Home = () => {

    const [isOpen, setOpen] = useState({
        album: false,
        photo: false
    })
    const [data, setData] = useState('')

    const albums = useSelector(Selector.albums)
    const photos = useSelector(Selector.photos)
    const localePhotos = useSelector(Selector.localePhotos)
    const activeAlbum = useSelector(Selector.activeAlbum)
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
        setOpen(state => ({
            ...state,
            photo: !state.photo
        }))
        dispatch(addLocalePhoto({
            id: localePhotos.length? `photo${localePhotos.length + 1}` : `photo1`,
            title: data
        }))
    }

    const addAlbumHandler = () => {
        setOpen(state => ({
            ...state,
            album: !state.album
        }))
        dispatch(addLocaleAlbum({
            id: albums.length + 1,
            title: data
        }))
    }

    const handleChangeInput = useCallback(({target}) => {
        setData(target.value)
    }, [data])

    const handleClickInput = useCallback(event => {
        event.preventDefault()
        isOpen.photo? addPhotoHandler() : addAlbumHandler()
        setOpen(state => ({
            album: false,
            photo: false
        }))
        setData('')
    }, [data])

    const handleCloseModal = useCallback(event => {
        event.preventDefault()
        setOpen(state => ({
            album: false,
            photo: false
        }))
    }, [isOpen])

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
                <img src={album} onClick={() => setOpen(state => ({...state, album: !state.album}))} alt={'album'}/>
                <img src={photo} onClick={() => setOpen(state => ({...state, photo: !state.photo}))} alt={'photo'}/>
            </div>
            <Modal
                isOpen={isOpen}
                onChange={handleChangeInput}
                onClick={handleClickInput}
                dataInput={data}
                onClose={handleCloseModal}
            />
        </>
    )
}

export default Home
