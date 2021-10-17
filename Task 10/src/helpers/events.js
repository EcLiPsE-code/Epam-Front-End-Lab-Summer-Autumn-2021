import {editData, getSort, selectorInput, selectorText} from "./helpers";

export const tableEventHandler = event => {
    if (event.target.classList.contains('sort')){
        getSort(event)
    } else {
        let inputRoot = document.getElementById(`i${event.target.parentNode.id}`)
        let textRoot = document.getElementById(`v${event.target.parentNode.id}`)

        let prevInput = selectorInput()
        let [prevText] = selectorText()

        prevText? prevText.innerText = prevInput : null

        editData(inputRoot, textRoot)
    }
}
