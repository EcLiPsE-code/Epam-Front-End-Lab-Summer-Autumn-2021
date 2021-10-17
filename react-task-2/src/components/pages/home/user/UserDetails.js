import React from 'react'
import Avatar from './avatar/Avatar'
import Info from './info/Info'
import './userDetails.scss'

const UserDetails = props => {
    return (
        <div className={'userDetails-wrapper'}>
            <Avatar />
            <Info user={props.user} />
        </div>
    )
}

export default UserDetails