import React, {useState} from 'react'
import './item.scss'

const Item = (props) => {

    const style = {
        backgroundImage: `url(${props.item.url})`
    }

    return (
        <div className={'item-wrapper'} onClick={props.clickHandler?
            () => props.clickHandler(props.item.id) : null} style={style}
        >
            <b>{props.item.id}</b>: <i>{props.item.title}</i>
        </div>
    )
}

export default Item

