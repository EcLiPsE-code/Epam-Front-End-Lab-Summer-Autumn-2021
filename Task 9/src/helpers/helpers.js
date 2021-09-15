export const rootElement = document.getElementById('main-table')

const player1 = [] //x
const player2 = [] //y

export function generatePlayingField(){
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            let el = document.createElement('div')
            el.dataset.row = i + 1
            el.dataset.col = j + 1
            rootElement.appendChild(el)
        }
    }
}

export function checkFinish(){

}