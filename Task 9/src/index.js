import './index.scss'
import {
    generatePlayingField,
    rootElement
} from './helpers/helpers'

let rootFlag = true

generatePlayingField()

rootElement.addEventListener('click', event => {
    if (!event.target.classList.contains('active-div')){
        event.target.innerText = rootFlag? 'X' : '0'
        event.target.classList.add('active-div')
        rootFlag = !rootFlag
    }
})