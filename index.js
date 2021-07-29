const initialValue = {
    'false' : {
        type: 'boolean',
        value: false
    },
    'true' : {
        type: 'boolean',
        value: true
    },
    'digit 0' : {
        type: 'number',
        value: 0
    },
    'digit 1' : {
        type: 'number',
        value: 1
    },
    '0' : {
        type: 'string',
        value: '0'
    }
}

const typesCoercions = {
    number: Number,
    string: String,
    boolean: Boolean
}

function parseResult(type, initialType, value){
    return type !== 'string'?
        `Преобразование ${initialType === 'string'? `"${value}"` : `${value}`} в ${type}: ${typesCoercions[type](value)}`
        :
        `Преобразование ${initialType === 'string'? `"${value}"` : `${value}`} в ${type}: "${typesCoercions[type](value)}"`
}

for (let i in initialValue){
    for (let type in typesCoercions){
        if (initialValue[i].type !== type){
            console.log(parseResult(type, initialValue[i].type, initialValue[i].value))
        }
    }
}