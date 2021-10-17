let startIndex = 1

function createElement(element) {
    const el = element.tag? document.createElement(element.tag) : document.createElement('div')
    element.id? el.id = element.id : null
    element.classList? element.classList.forEach(className => el.classList.add(className)) : null
    element.value? el.value = element.value : null
    element.innerText? el.innerText = element.innerText : null

    return el
}

export function renderElement(){
    let rootEl = createElement({tag: 'tr'})
    for (let i = 0; i < 2; i++){
        let id = startIndex++
        let val = Math.floor(Math.random() * 100).toString()
        let td = createElement({tag: 'td', id})
        let p = createElement({tag: 'p', innerText: val, id: `v${id}`})
        let input = createElement({tag: 'input', id: `i${id}`, value: val, classList: ['disable']})
        rootEl.appendChild(td)
        td.appendChild(input)
        td.appendChild(p)
    }
    return rootEl
}

export function getSort({target}){
    const order = target.dataset.order = target.dataset.order? -target.dataset.order : 1
    const index = [...target.parentNode.cells].indexOf(target)
    const collator = new Intl.Collator(['ru'], {numeric: true})
    const comparator = (index, order) => (a, b) => {
        return order * collator.compare(
            a.children[index].innerText,
            b.children[index].innerText
        )
    }

    for (const tBody of target.closest('table').tBodies){
        tBody.append(...[...tBody.rows].sort(comparator(index, order)))
    }
}

export function selectorInput(){
    let res = [...document.querySelectorAll('input')]
        .filter(item => !item.classList.contains('disable'))
    res.length > 0? res[0].classList.toggle('disable') : null
    return res.length > 0? res[0].value : res
}

export function selectorText(){
    let res = [...document.querySelectorAll('p')]
        .filter(item => item.classList.contains('disable'))
    res.length > 0? res[0].classList.toggle('disable') : null
    return res
}

export function editData(...data){
    data[0].classList.toggle('disable')
    data[1].classList.toggle('disable')
    data[0].focus()
}

export function randomInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}