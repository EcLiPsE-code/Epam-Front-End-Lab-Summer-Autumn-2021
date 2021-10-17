import React, {useEffect, useState} from 'react'
import UserDetails from '../../../components/pages/home/user/UserDetails'
import './home.scss'
import UserContent from '../../../components/pages/home/content/UserContent'
import {test} from '../../../constants/index'
import {getAlbums, getPhotosByAlbum} from '../../../helpers'
import logo from '../../../assets/imgs/backup.svg'

const Home = props => {

    const [albums, setAlbums] = useState([])
    const [photos, setPhotos] = useState([])
    const [activeAlbum, setActiveAlbum] = useState(null)

    const classNameList = ['btn-back']

    const loadingPhotosHandler = id => {
        setActiveAlbum(id)
    }

    useEffect(() => {
        async function loadingAlbums(){
            setAlbums(await getAlbums())
        }
        loadingAlbums()
    }, [])

    useEffect(() => {
        async function loadingPhotos(){
            setPhotos(await getPhotosByAlbum(activeAlbum))
        }
        loadingPhotos()
    }, [activeAlbum])

    const btnBackClickHandler = () => {
        setActiveAlbum(null)
        setPhotos([])
    }

    activeAlbum? classNameList.splice(classNameList.length - 1, -1) : classNameList.push('btn-back-inactive')

    return (
        <>
            <div className={'home-wrapper'}>
                <UserDetails user={test} />
                {
                    photos.length > 0?
                        <UserContent data = {photos} />
                        :
                        <UserContent data = {albums} clickHandler={loadingPhotosHandler}/>
                }
            </div>
            <div className={classNameList.join(' ')}>
                <img src={logo} onClick={btnBackClickHandler}/>
            </div>
        </>
    )
}

export default Home
