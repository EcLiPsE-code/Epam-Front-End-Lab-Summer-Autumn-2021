import React from 'react'
import './userContent.scss'
import Item from '../content/item/Item'

const UserContent = ({data}) => {

    console.log(data)

    return (
        <div className={'userContent-wrapper'}>
            {
               data.map(({id, title}) => (
                   <Item key={id} item={{id, title}} />
               ))
            }
        </div>
    )
}

export default UserContent