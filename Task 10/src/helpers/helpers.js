import {root} from "../index";

let startIndex = 0

function renderElement(item = null){
    let rootEl = document.createElement('tr')
    for (let i = 0; i < 2; i++){
        let tdEl = document.createElement('td')
        tdEl.id = startIndex++
        tdEl.innerHTML = Math.floor(Math.random() * 100).toString()
        rootEl.appendChild(tdEl)
    }
    return rootEl
}

export function getSort({target}){
    const order = target.dataset.order = target.dataset.order? -target.dataset.order : 1
    const index = [...target.parentNode.cells].indexOf(target)
    const collator = new Intl.Collator()
    const comparator = (index, order) => (a, b) => {
        return order * collator.compare(
            // a.children[index].innerText,
            // b.children[index].innerText
            a.innerText,
            b.innerText
        )
    }

    for (const tBody of target.closest('table').tBodies){
        let res = [...tBody.rows].map(item => {
            return item.children[index]
        })
        let newRes = res.sort(comparator(index, order));
        [...tBody.rows].forEach((item, index, arr) => {
            item.append(newRes[index])
        })
    }
}

export function createElementTable(){
    return renderElement()
}

export function randomInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}