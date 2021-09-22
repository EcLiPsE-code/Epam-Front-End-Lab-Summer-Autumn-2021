import './index.scss'
import {tableEventHandler} from './helpers/events'
import {createElementTable, getSort, randomInteger} from "./helpers/helpers";

const body = document.getElementById('main-content__table-body')
export const root = document.getElementById('main-content__table')

root.addEventListener('click', tableEventHandler)

for (let i = 0; i < randomInteger(2, 8); i++){
    body.appendChild(createElementTable())
}