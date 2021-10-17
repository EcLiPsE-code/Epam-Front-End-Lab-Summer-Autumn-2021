'use strict'

let stack = []

const operators = {
    '+': '+',
    '-': '-',
    '*': '*',
    '/': '/'
}

const handler = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a ,b) => a / b
}

function performingOperation(operation, a, b){
    return new Promise(resolve => {
        setTimeout(() => {
            let res = handler[operation](+a, +b)
            resolve(res)
        }, 1500)
    })
}


async function calc(){
    for (let [index, item] of Object.entries(stack)){
        if (operators[item]){
            let indexCurrent = stack.indexOf(item)
            let res = await performingOperation(operators[item], stack[indexCurrent - 1], stack[indexCurrent - 2])
            stack.splice(indexCurrent - 2, 3, res)
        }
    }
    return stack
}

export async function getData(){
    stack = [...document.getElementById('expression').value]
        .filter(item => item !== ' ')
    let res = await calc()
    document.getElementById('result').innerText = Math.round(res).toString()
}
