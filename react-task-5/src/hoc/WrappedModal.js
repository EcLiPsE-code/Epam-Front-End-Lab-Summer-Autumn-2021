import React from 'react'

const WrappedModal = (Component, data) => {
    return props => {
        return <Component
            {...props}
            data={data}
        />
    }
}