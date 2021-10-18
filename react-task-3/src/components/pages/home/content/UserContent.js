import React from 'react'
import './userContent.scss'
import Item from '../content/item/Item'

const UserContent = (props) => {

    return (
        <div className={'userContent-wrapper'}>
            {
               props.data.map(info => (
                   <Item key={info.id} item={info} clickHandler={props.clickHandler} />
               ))
            }
        </div>
    )
}

export default UserContent