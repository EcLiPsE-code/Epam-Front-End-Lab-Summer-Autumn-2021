import {
    loginBtn,
    logoutBtn,
    userInput,
    unauthorizedUser,
    authorizedUser, mainContent
} from '../constants/constants'

let theme = true

export function login(){
    localStorage.setItem('user', userInput.value.toString())
    update()
    authorizedUser.innerText = `Hi, ${localStorage.getItem('user')}`
}

export function logout(){
    localStorage.removeItem('user')
    update()
}

export function changeTheme(){
    theme = !theme
    theme? localStorage.removeItem('theme') : localStorage.setItem('theme', 'dark')
    mainContent[0].classList.toggle('darkTheme')
}

export function update(){
    loginBtn.classList.toggle('inactive')
    logoutBtn.classList.toggle('inactive')
    authorizedUser.classList.toggle('inactive')
    unauthorizedUser.classList.toggle('inactive')
}