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

async function performingOperation(operation, a, b, index){
    return await new Promise(resolve => {
        setTimeout(() => {
            let res = handler[operation](+a, +b)
            stack.splice(index - 2, 3, res)
            resolve(res)
        }, 3000)
    })
}

function calc(){
    stack.forEach((item, index, array) => {
        if (operators[item]) {
            performingOperation(operators[item], array[index - 1], array[index - 2], index)
                .then(result => {
                    console.log(`index: ${index}`)
                    console.log(result)
                    console.log(stack)
                    calc()
                })
        }
    })
}

export function getData(){
    stack = [...document.getElementById('expression').value]
        .filter(item => item !== ' ')
    calc()
}
