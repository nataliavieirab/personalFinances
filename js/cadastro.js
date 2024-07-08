import { addItemToLocalStorage } from './localstorage-utils.js'

function verifyFirstName() {
    const inputElement = document.getElementById('firstname')
    const value = inputElement.value
    inputElement.classList.remove('validated')
    inputElement.classList.remove('not-validated')
    if (value.length < 0) {
        return
    } else if (value.length < 3) {
        inputElement.classList.add('not-validated')
    } else {
        inputElement.classList.add('validated')
    }
}

function verifyLastName() {
    const inputElement = document.getElementById('lastname')
    const value = inputElement.value
    inputElement.classList.remove('validated')
    inputElement.classList.remove('not-validated')
    if (value.length < 0) {
        return
    } else if (value.length < 3) {
        inputElement.classList.add('not-validated')
    } else {
        inputElement.classList.add('validated')
    }
}

function verifyEmail() {
    const inputElement = document.getElementById('email')
    const value = inputElement.value
    inputElement.classList.remove('validated')
    inputElement.classList.remove('not-validated')
    
    if (value.length < 0) {
        return
    } else if (!value.includes('@') || !value.includes('.')) {
        inputElement.classList.add('not-validated')
    } else {
        inputElement.classList.add('validated')
    }
}

function verifyUserName() {
    const inputElement = document.getElementById('username')
    const value = inputElement.value
    inputElement.classList.remove('validated')
    inputElement.classList.remove('not-validated')
    if (value.length < 0) {
        return
    } else if (value.length < 3) {
        inputElement.classList.add('not-validated')
    } else {
        inputElement.classList.add('validated')
    }
}

function verifyPassword() {
    const inputElement = document.getElementById('password')
    const value = inputElement.value
    const minLength = 6
    const hasUpperCase = /[A-Z]/.test(value)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>-]/.test(value)
    const hasNumber = /\d/.test(value)

    inputElement.classList.remove('validated')
    inputElement.classList.remove('not-validated')

    if (inputElement.value < 0){
        return
    } else if (value.length < minLength || !hasUpperCase || !hasSpecialChar || !hasNumber) {
        inputElement.classList.add('not-validated')
    } else {
        inputElement.classList.add('validated')
    }
}

function verifyPasswordConfirmation() {
    const inputElement = document.getElementById('password');
    const confirmationElement = document.getElementById('confirmPassword');
    const value = inputElement.value;
    const confirmationValue = confirmationElement.value;

    confirmationElement.classList.remove('validated');
    confirmationElement.classList.remove('not-validated');

    if (confirmationValue.length < 0) {
        return;
    } else if (value !== confirmationValue) {
        confirmationElement.classList.add('not-validated');
    } else {
        confirmationElement.classList.add('validated');
    }

}

function addUserDataToLocalStorage() {
    const firstName = document.getElementById('firstname').value
    const lastName = document.getElementById('lastname').value
    const email = document.getElementById('email').value
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    const firstNameIsValid = document.getElementById('firstname').classList.contains('validated')
    const lastNameIsValid = document.getElementById('lastname').classList.contains('validated')
    const emailIsValid = document.getElementById('email').classList.contains('validated')
    const usernameIsValid = document.getElementById('username').classList.contains('validated')
    const passwordIsValid = document.getElementById('password').classList.contains('validated')
    const confirmPasswordIsValid = document.getElementById('confirmPassword').classList.contains('validated')

    if (!firstNameIsValid || !lastNameIsValid || !emailIsValid || !usernameIsValid || !passwordIsValid || !confirmPasswordIsValid) {
        alert('Preencha todos os campos corretamente')
        return
    }

    const user = { firstName, lastName, email, username, password }
    addItemToLocalStorage('users', user)

    localStorage.setItem('current-user', JSON.stringify(user))

    window.location.href = '../telainicial.html'
    
}

document.getElementById('firstname').addEventListener('input', verifyFirstName)
document.getElementById('lastname').addEventListener('input', verifyLastName)
document.getElementById('email').addEventListener('input', verifyEmail)
document.getElementById('username').addEventListener('input', verifyUserName)
document.getElementById('password').addEventListener('input', verifyPassword)
document.getElementById('confirmPassword').addEventListener('input', verifyPasswordConfirmation)
document.getElementById('registerButton').addEventListener('click', addUserDataToLocalStorage)