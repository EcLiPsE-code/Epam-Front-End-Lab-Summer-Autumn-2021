const alphabet = "abcdefghijklmnopqrstuvwxyz"

export function generateIntegerNumber(min = 0, max){
    return Math.floor(Math.random() * (max - min)) + min
}

export function generateUser(){
    let name = ''
    const age = generateIntegerNumber(18, 37)
    for (let i = 0; i < generateIntegerNumber(4, 11); i++){
        name += alphabet[Math.floor(Math.random() * alphabet.length)]
    }

    return {name, age}
}

export function generateBox(){
    let boxName = ''
    for (let i = 0; i < generateIntegerNumber(2, 7); i++){
        boxName += alphabet[Math.floor(Math.random() * alphabet.length)]
    }

    return boxName
}

export function generateStuff(){
    let stuffName = ''
    const stuffCost = generateIntegerNumber(2, 15)
    for (let i = 0; i < generateIntegerNumber(7, 16); i++){
        stuffName += alphabet[Math.floor(Math.random() * alphabet.length)]
    }

    return {name: stuffName, cost: stuffCost}
}