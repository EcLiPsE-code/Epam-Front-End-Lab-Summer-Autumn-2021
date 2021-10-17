import React from 'react'
import './info.scss'

const Info = props => {
    return (
        <div className={'userInfo-wrapper'}>
            <div className={'userInfo-wrapper__title'}>
                User Info
            </div>
            <div className={'userInfo-wrapper__content'}>
                <p>Email: {props.user.email}</p>
                <p>Name: {props.user.name}</p>
                <p>Username: {props.user.username}</p>
            </div>
        </div>
    )
}

export default Info
