import React from 'react'
import userAvatar from '../../../../../assets/imgs/person-circle-outline.svg'
import './avatar.scss'

const Avatar = props => {
    return (
        <div className={'avatar-wrapper'}>
            <img src={userAvatar} alt={'User icon'} />
        </div>
    )
}

export default Avatar