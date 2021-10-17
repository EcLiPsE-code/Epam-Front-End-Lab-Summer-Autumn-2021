'use strict'

import './index.scss'
import {clickSelectHandler, loadingCategories} from './helpers'
import {categoriesRoot} from './constants/constants'

categoriesRoot.addEventListener('change', clickSelectHandler)

loadingCategories()
