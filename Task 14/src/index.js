'use strict'

import './index.scss'
import {clickSelectHandler, loadingCategories} from './helpers'

let response = (async () => {
    return  await import('./constants/constants')
})()

response
    .then(modules => {
        modules.categoriesRoot.addEventListener('change', clickSelectHandler)
    })

loadingCategories()
