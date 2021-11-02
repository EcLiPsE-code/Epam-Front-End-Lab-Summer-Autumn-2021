import React from 'react'
import './modalContent.scss'

export const ModalContent = props => {

    return (
        <form action="">
            <div className={'modal-wrapper-block-content__input'}>
                <div>
                    Enter name {props.data.album? 'album' : 'photo'}:
                </div>
                <div>
                    <input
                        placeholder={`Enter name ${props.data.album? 'album' : 'photo'}`}
                        value={props.dataInput}
                        type="text"
                        onChange={props.onChange}
                    />
                </div>
            </div>
            <div className={'modal-wrapper-block-content__btns'}>
                <input
                    type="submit"
                    value={'Применить'}
                    name={'apply'}
                    onClick={props.onClick}
                />
                <input
                    type="submit"
                    value={'Закрыть'}
                    name={'close'}
                    onClick={props.onClose}
                />
            </div>
        </form>
    )
}