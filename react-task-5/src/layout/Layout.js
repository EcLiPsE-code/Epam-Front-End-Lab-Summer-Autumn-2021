import React from 'react'
import './layout.scss'
import ErrorBoundary from "../errors/ErrorBoundary";

const Layout = props => {
    return (
        <ErrorBoundary>
            <div className={'layout-wrapper'}>
                <div className={'layout-wrapper__content'}>
                    {props.children}
                </div>
                <div id={'modal'} className={'layout-wrapper__modal'}>

                </div>
            </div>
        </ErrorBoundary>
    )
}

export default Layout