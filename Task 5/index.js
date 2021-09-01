const rightAnswers = {
    1: 'Ответ посчитан',
    2: 'Ответ взят из кэша',
}

const incorrectAnswers = {
    1: 'Некорректный формат min или max',
    2: 'Переполнение интервала целых чисел',
    3: 'min должно быть меньше max'
}

const cache = new Map()

function sum(...values){
    try{
        if (!checkForNumber(values)){
            printMessage(incorrectAnswers['1'], 0)
            return
        }

        const min = Math.min(...values)
        const max = Math.max(...values)

        if (min === max){
            printMessage(incorrectAnswers['3'], 0)
            return;
        }

        caching(`${min}${max}`, min, max)
    } catch (ex) {
        console.log(ex.message)
    }
}

function caching(key, min, max){
    if (!cache.has(key)){

        const result = (min + max) * (max - min + 1) / 2
        result > Number.MAX_SAFE_INTEGER?
            printMessage(incorrectAnswers['2'], 0)
            :
            printMessage(rightAnswers['1'], 1)

        document.getElementById('result').innerHTML = result
        cache.set(key, result)
        return
    }

    printMessage(rightAnswers['2'], 1)
    document.getElementById('result').innerHTML = cache.get(key)
}

function checkForNumber(values){
    const [min, max] = values
    return Number.isInteger(min) && Number.isInteger(max)
}

function printMessage(message, typeAnswer){
    const root = document.createElement('p')
    root.innerHTML = message
    root.classList.add(typeAnswer === 1? 'successful' : 'unsuccessful')
    document.getElementById('messages').appendChild(root)
}

document.getElementById('btn-1').addEventListener('click', () => {
    const val1 = +document.getElementById('first-number').value
    const val2 = +document.getElementById('second-number').value

    sum(val1, val2)
})


