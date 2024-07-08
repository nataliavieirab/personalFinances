import { removeCurrentUserFromLocalStorage, verifyCurrentUser } from "./localstorage-utils.js"

function userGreetings() {
    let user = JSON.parse(localStorage.getItem('current-user'))

    const { firstName } = user

    let greetings = document.getElementById('saudacoes')
    greetings.innerHTML = `Olá, ${firstName}` 
}

document.getElementById('logout').addEventListener('click', removeCurrentUserFromLocalStorage)
window.onload = function() {
    verifyCurrentUser()
    userGreetings()
}

