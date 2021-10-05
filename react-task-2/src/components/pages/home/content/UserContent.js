import React, {Component} from 'react'
import './userContent.scss'
import Item from '../content/item/Item'

class UserContent extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.albums)
        return (
            <div className={'userContent-wrapper'}>
                {
                    this.props.albums.map(album => {
                        return <Item key={album.id} data={album} />
                    })
                }
            </div>
        )
    }
}

export default UserContent