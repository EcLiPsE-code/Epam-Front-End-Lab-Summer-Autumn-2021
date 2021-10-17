import React from 'react'
import './item.scss'

const Item = ({data}) => {
    return (
        <div className={'item-wrapper'}>
            <b>{data.key}</b>: <i>{data.value}</i>
        </div>
    )
}

export default Item

