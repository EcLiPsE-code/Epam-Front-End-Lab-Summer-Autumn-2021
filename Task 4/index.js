function rand_bm(){
    let u = 0, v = 0

    while(u === 0 && v === 0){
        u = Math.random()
    }

    while(v === 0){
        v = Math.random()
    }

    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v) * 2 | 0
}

function createEl(name, value = null){
    const el = document.createElement(name)
    value? el.innerHTML = value : el.innerHTML = ''
    return el
}

const arr = new Array(10).fill(0).map(() => (rand_bm()))

const resObj = arr.reduce((prevValue, item) => {
    if (!prevValue.hasOwnProperty(item)){
        prevValue[item] = arr.filter(key => key === item).length
    }
    return prevValue
}, {})

const root = document.getElementById('tbl')

for (let item in resObj){
    let tr = createEl('tr')
    let key = createEl('td', item)
    let value = createEl('td', resObj[item])

    tr.appendChild(key)
    tr.appendChild(value)
    root.appendChild(tr)
}

document.getElementById('arr').innerHTML = `Resulting array: ${arr}`