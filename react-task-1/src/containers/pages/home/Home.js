import React from 'react'
import UserDetails from '../../../components/pages/home/user/UserDetails'
import './home.scss'
import UserContent from "../../../components/pages/home/content/UserContent";
import {test} from '../../../constants/index'

const Home = props => {
    return (
        <div className={'home-wrapper'}>
            <UserDetails user={test} />
            <UserContent />
        </div>
    )
}

export default Home
