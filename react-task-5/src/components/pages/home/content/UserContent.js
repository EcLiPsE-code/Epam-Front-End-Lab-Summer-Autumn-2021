import React, {useEffect, useRef, useState} from 'react'
import './userContent.scss'
import Item from '../content/item/Item'
import bottom from '../../../../assets/imgs/bottom.svg'

const UserContent = (props) => {

    const [scroll, setScroll] = useState(0)
    const rootEl = useRef(null)

    useEffect(() => {
        rootEl.current.addEventListener('scroll', scrollHandler)

    }, [])

    const scrollHandler = ({target}) => {
        setScroll(target.scrollTop)
    }

    const scrollBottomHandler = () => {
        rootEl.current.scrollTo(rootEl.current.scrollHeight, rootEl.current.scrollHeight)
    }

    return (
        <>
            <div className={'userContent-wrapper'} ref={rootEl} onScroll={event => scrollHandler(event)}>
                {
                    props.data.map(info => (
                        <Item key={info.id} item={info} clickHandler={props.clickHandler} />
                    ))
                }
            </div>
            <div className={'btn-scroll'}>
                {
                    scroll !== 0 && <img src={bottom} onClick={scrollBottomHandler} alt={'Bottom'}/>
                }
            </div>
        </>
    )
}

export default UserContent