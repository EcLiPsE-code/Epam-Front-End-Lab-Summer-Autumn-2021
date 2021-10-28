import './index.scss'
import {changeTheme, login, logout, update} from './helpers/helpers'
import {authorizedUser, loginBtn, logoutBtn, mainContent, themeBtn} from './constants/constants'

(() => {
    if (localStorage.getItem('user')) {
        update()
        authorizedUser.innerText = `Hi, ${localStorage.getItem('user')}`
    }
    if (localStorage.getItem('theme')){
        mainContent[0].classList.add('darkTheme')
    } else {
        mainContent[0].classList.remove('darkTheme')
    }
})()

window.addEventListener('storage', event => {
    console.log(localStorage)
    if (localStorage.getItem('user')){
        authorizedUser.innerText = `Hi, ${localStorage.getItem('user')}`
    } else {
        update()
    }
    if (localStorage.getItem('theme')){
        mainContent[0].classList.add('darkTheme')
    } else {
        mainContent[0].classList.remove('darkTheme')
    }
})

themeBtn.addEventListener('click', changeTheme)
loginBtn.addEventListener('click', login)
logoutBtn.addEventListener('click', logout)

