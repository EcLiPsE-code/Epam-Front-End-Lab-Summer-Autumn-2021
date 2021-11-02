import React from 'react'
import './modal.scss'
import {ModalContent} from "./content/ModalContent";

export const Modal = props => {

    if (!props.isOpen.album && !props.isOpen.photo){
        return null
    }

    return (
        <div className={'modal-wrapper'}>
            <div className={'modal-wrapper__block'}>
                <div className={'modal-wrapper-block__title'}>
                    Addition {props.isOpen.album? 'album' : 'photo'}
                </div>
                <div className={'modal-wrapper-block__content'}>
                    <ModalContent
                        onChange={props.onChange}
                        onClick={props.onClick}
                        data={props.isOpen}
                        dataInput={props.dataInput}
                        onClose={props.onClose}
                    />
                </div>
            </div>
        </div>
    )
}