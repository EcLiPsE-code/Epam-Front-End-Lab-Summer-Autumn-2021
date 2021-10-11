import React from 'react'
import './item.scss'

const Item = ({item}) => {
    return (
        <div className={'item-wrapper'}>
            <b>{item.id}</b>: <i>{item.title}</i>
        </div>
    )
}

export default Item

