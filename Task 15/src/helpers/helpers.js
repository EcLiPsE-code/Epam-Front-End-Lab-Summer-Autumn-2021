import {
    loginBtn,
    logoutBtn,
    userInput,
    unauthorizedUser,
    authorizedUser, mainContent
} from '../constants/constants'

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
    localStorage.getItem('theme')? localStorage.removeItem('theme') : localStorage.setItem('theme', 'dark')
    mainContent[0].classList.toggle('darkTheme')
    console.log(localStorage)
}

export function update(){
    loginBtn.classList.toggle('inactive')
    logoutBtn.classList.toggle('inactive')
    authorizedUser.classList.toggle('inactive')
    unauthorizedUser.classList.toggle('inactive')
}