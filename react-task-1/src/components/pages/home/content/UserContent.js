import React from 'react'
import './userContent.scss'
import {
    parseObj,
    arr
} from '../../../../helpers/index'
import Item from '../content/item/Item'

const UserContent = props => {

    parseObj(props.user)

    return (
        <div className={'userContent-wrapper'}>
            {
                arr.map(([key, value], index) => {
                    const data = {key, value}
                    return <Item key={index} data={data}/>
                })
            }
        </div>
    )
}

export default UserContent