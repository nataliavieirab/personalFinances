import { addItemToLocalStorage, getItemsFromLocalStorage } from "./localstorage-utils.js"

function verifyLoginData() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    let usersList = getItemsFromLocalStorage('users')
    let user = usersList.find(user => user.username === username)
    console.log(user)

    if (user) {
        if (user.password === password){
            localStorage.setItem('current-user', JSON.stringify(user))
            window.location.href = '../telainicial.html'
            alert('Dados Validados = Login Efetuado! Clique em OK para continuar para a tela inicial.')
            
        } else {
            alert('Senha incorreta')
        }
    } else {
        alert('Nome de usuário incorreto')

    }

}

document.getElementById('loginButton').addEventListener('click', verifyLoginData)
