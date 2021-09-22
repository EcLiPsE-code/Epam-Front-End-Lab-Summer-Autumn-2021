import {getSort} from "./helpers";

export const tableEventHandler = event => {
    if (event.target.classList.contains('sort')){
        getSort(event)
    }
}
