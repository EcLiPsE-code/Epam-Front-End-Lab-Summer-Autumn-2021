'use strict'

import {URL} from './constants/constants'
import {categoriesRoot} from './constants/constants'
import {titlesRoot} from './constants/constants'

function createURL(url){
    return function (parameters) {
        return url + parameters
    }
}

function createElement(props){
    let root = props.tag? document.createElement(props.tag) : document.createElement('div')
    props.attributes? props.attributes.forEach(([key, value]) => root.setAttribute(key, value)) : null
    root.text = props.text? props.text : ''

    return root
}

async function loadingTitlesByCategoryName(category){
    try {
        let response = await fetch(createURL(URL)(`/entries?category=${category}`))
        if (!response.ok){
            throw new Error(response.statusText)
        }

        let titles = await response.json()
        titles.entries.forEach(title => {
            titlesRoot.appendChild(createElement({
                tag: 'option',
                attributes: [['value', title.API]],
                text: title.API
            }))
        })
    } catch ({message}){
        console.log(`Error: ${message}`)
    }
}

export async function loadingCategories(){
    try {
        let response = await fetch(createURL(URL)('/categories'))
        if (!response.ok){
            throw new Error(response.statusText)
        }
        let categories =  await response.json()
        categories.forEach(category => {
            categoriesRoot.appendChild(createElement({
                tag: 'option',
                attributes: [['value', category]],
                text: category
            }))
        })
    } catch ({message}){
        console.log(`Error: ${message}`)
    }
}

export function clickSelectHandler(){
    loadingTitlesByCategoryName(categoriesRoot.value)
}
