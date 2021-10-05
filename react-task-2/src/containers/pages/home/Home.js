import React, {Component} from 'react'
import UserDetails from '../../../components/pages/home/user/UserDetails'
import './home.scss'
import UserContent from "../../../components/pages/home/content/UserContent"
import {test} from '../../../constants/index'
import {getAlbums} from '../../../helpers'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albums: []
        }
    }

    componentDidMount() {
        this.setState({
            albums: getAlbums()
        })
    }

    render() {
        return (
            <div className={'home-wrapper'}>
                <UserDetails user={test} />
                <UserContent albums={this.state.albums} />
            </div>
        )
    }
}

export default Home
