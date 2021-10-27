import {
    loginBtn,
    logoutBtn,
    userInput,
    unauthorizedUser,
    authorizedUser
} from '../constants/constants'

export function login(){
    loginBtn.addEventListener('click', () => {
        localStorage.setItem('user', userInput.value.toString())
        loginBtn.classList.toggle('inactive')
        logoutBtn.classList.toggle('inactive')
        authorizedUser.classList.toggle('inactive')
        unauthorizedUser.classList.toggle('inactive')
    })
}

export function logout(){
    logoutBtn.addEventListener('click', () => {
        localStorage.clear()
        loginBtn.classList.toggle('inactive')
        logoutBtn.classList.toggle('inactive')
    })
}