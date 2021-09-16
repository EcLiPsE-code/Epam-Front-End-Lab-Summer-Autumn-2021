import {field} from './helpers'

export function checkRow(row){
    return field[row]
}

export function checkCol(col){
    return field.map(item => {
        return item[col]
    })
}

export function checkDiagonal(i){
    const flag = i
    return field.map(item => {
        return flag === 0? item[i++] : item[i--]
    })
}

export function checkWin(arr){
    return arr.filter(item => item === true).length === 3? 'X' :
        arr.filter(item => item === false).length === 3? '0' : null
}
