import React from 'react'
import './item.scss'

const Item = (props) => {

    const style = {
        backgroundImage: `url(${props.item.url})`
    }
    const classNameList = ['item-wrapper']
    const checkActiveHandler = props.clickHandler? () => props.clickHandler(props.item.id) : null
    props.clickHandler? classNameList.push('active') : classNameList.splice(classNameList.length - 1, -1)

    return (
        <div className={
            classNameList.join(' ')}
            onClick={checkActiveHandler}
            style={style}
        >
            <i>{props.item.title}</i>
        </div>
    )
}

export default Item

