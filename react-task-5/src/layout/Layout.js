import React from 'react'
import './layout.scss'

const Layout = props => {
    return (
        <div className={'layout-wrapper'}>
            <div className={'layout-wrapper__content'}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout