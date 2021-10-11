import React, {useCallback, useEffect, useMemo, useState} from 'react'
import UserDetails from '../../../components/pages/home/user/UserDetails'
import './home.scss'
import UserContent from "../../../components/pages/home/content/UserContent";
import {test} from '../../../constants/index'
import {getAlbums} from "../../../helpers";

const Home = props => {

    const [albums, setAlbums] = useState([])
    const [photos, setPhotos] = useState([])
    const [activeAlbum, setActiveAlbum] = useState(false)


    useEffect(() => {
        async function loadingAlbums(){
            let res = await getAlbums()
            setAlbums(res)
        }
        loadingAlbums()
    }, [])

    return (
        <div className={'home-wrapper'}>
            <UserDetails user={test} />
            <UserContent data={albums} />
        </div>
    )
}

export default Home
