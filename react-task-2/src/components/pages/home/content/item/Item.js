import React from 'react'
import './item.scss'

const Item = ({data}) => {

    return (
        <div className={'item-wrapper'}>
            <b>{data.id}</b>: <i>{data.title}</i>
        </div>
    )
}

export default Item

