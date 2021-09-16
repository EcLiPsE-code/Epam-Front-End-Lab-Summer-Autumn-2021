import {
    checkRow, checkCol,
    checkDiagonal, checkWin,
} from './algorithmPlay'

const rootElement = document.getElementById('main-table')
const resultPlay = document.getElementById('footer-result')
export let field = []
let countMoves = 0
let rootFlag = true

const restartGame = function (event){
    while(rootElement.firstChild){
        rootElement.removeChild(rootElement.firstChild)
    }
    field = []
    countMoves = 0
    rootFlag = true
    resultPlay.innerText = '0_o'
    addEventclickQuare()
    generatePlayingField()
}

const clickQuare = function (event){
    if (!event.target.classList.contains('active-div')){
        event.target.innerText = rootFlag? 'X' : '0'
        event.target.classList.add('active-div')
        field[event.target.dataset.row - 1][event.target.dataset.col - 1] = rootFlag? true : false
        countMoves++
        checkFinish()
        rootFlag = !rootFlag
    }
}
export function generatePlayingField(){
    for (let i = 0; i < 3; i++){
        let row = []
        for (let j = 0; j < 3; j++){
            let el = document.createElement('div')
            el.dataset.row = i + 1
            el.dataset.col = j + 1
            rootElement.appendChild(el)
            row.push(0)
        }
        field.push(row)
    }
}

export function addEventRestartGame(){
    document.getElementById('btn-again').addEventListener('click', restartGame)
}

export function addEventclickQuare(){
    rootElement.addEventListener('click', clickQuare)
}

function checkFinish(){
    if (countMoves === 9){
        resultPlay.innerText = 'Draw'
        rootElement.removeEventListener('click', clickQuare)
        return
    }
    else if ((checkWin(checkDiagonal(0)) === 'X') || (checkWin(checkDiagonal(field.length - 1)) === 'X')){
        resultPlay.innerText = 'Win X'
        rootElement.removeEventListener('click', clickQuare)
        return
    } else if ((checkWin(checkDiagonal(0)) === '0') || (checkWin(checkDiagonal(field.length - 1)) === '0')){
        resultPlay.innerText = 'Win 0'
        rootElement.removeEventListener('click', clickQuare)
        return
    }
    for (let i = 0; i < field.length; i++){
        if (checkWin(checkRow(i)) === 'X' || checkWin(checkCol(i)) === 'X') {
            resultPlay.innerText = 'Win X'
            rootElement.removeEventListener('click', clickQuare)
            return
        } else if (checkWin(checkRow(i)) === '0' || checkWin(checkCol(i)) === '0'){
            resultPlay.innerText = 'Win 0'
            rootElement.removeEventListener('click', clickQuare)
            return
        }
    }
}

