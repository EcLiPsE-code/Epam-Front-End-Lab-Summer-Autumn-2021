'use strict'

import {
    generateBox,
    generateIntegerNumber,
    generateStuff,
    generateUser
} from './helpers.js'

class Entity {
    constructor(name) {
        this._name = name
    }

    get name(){ return this._name }

    set name(value){ this._name = value}
}

class Stuff extends Entity {
    constructor({name, cost}) {
        super(name)
        this._cost = cost
    }

    get cost(){ return this._cost }

    set cost(value){ this._cost = value }

    [Symbol.toPrimitive](hint){
        return hint === 'string'? `name stuff: ${this._name}` : this._cost
    }
}

class Box extends Entity{
    constructor(name, stuffs = []) {
        super(name)
        this._stuffs = stuffs
    }

    get stuffs(){ return this._stuffs }
    set stuffs(value){ this._stuffs = value }

    [Symbol.toPrimitive](hint){
        return hint === 'string'? this.name : null
    }
}

class User extends Entity{
    constructor({name, age}) {
        super(name)
        this._age = age
        this._box = null
    }

    get age(){ return this._age }

    set age(value){ this._age = value }

    get box(){ return this._box }
    set box(value){ this._box = value }
}

const stuffs = new Array(generateIntegerNumber(1, 6)).fill(0).map(() => {
    return new Stuff(generateStuff())
})

const boxes = new Array(generateIntegerNumber(1, 3)).fill(0).map(() => {
    const box = new Box(generateBox())
    for (let i = 0; i < generateIntegerNumber(1, stuffs.length); i++){
        box.stuffs.push(String(stuffs[Math.floor(Math.random() * stuffs.length)]))
    }

    return box
})

const users = new Array(generateIntegerNumber(2, boxes.length + 1)).fill(0).map(() => {
    let user = new User(generateUser())
    user.box = boxes[Math.floor(Math.random() * boxes.length)]
    return user
})

console.log('---------STUFFS----------')
stuffs.forEach(stuff => {
    console.log(`stuff name: ${stuff.name}`)
})
console.log('--------BOXES--------------')
boxes.forEach(box => {
    console.log(`box name: ${box}`)
})
console.log('--------USERS---------------')
users.forEach(user => {
    console.log(`user name: ${user.name}`)
})

console.log('==============================')
console.log('==============================')

console.log('---------BOXES HAS-------------')
boxes.forEach(box => {
    console.log(`the box "${box.name}" has following stuffs:`)
    box.stuffs.forEach((stuff, index) => {
        console.log(`${index + 1}) ${stuff}`)
    })
})
console.log('--------USERS HAS---------------')
users.forEach(user => {
    console.log(`user "${user.name}" owns the next box: ${user.box}`)
})