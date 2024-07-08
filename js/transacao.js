import { addItemToLocalStorage, getItemsFromLocalStorage, renderTable, verifyCurrentUser, removeCurrentUserFromLocalStorage} from './localstorage-utils.js'

function renderTransactionTable() {
    const attributesToInsert = ['id', 'descricao', 'selectId', 'valor' ]
    renderTable('transacoes', 'transactions-table-id', attributesToInsert)
}

function addTransactionToLocalStorage() {
    const id = Math.random().toString(36).substring(2, 10);
    const descricao = document.getElementById('descricao').value
    const valor = document.getElementById('valor').value
    const selectId = document.getElementById('select-id').value

    const descricaoFilled = descricao.length > 0
    const valorFilled = valor.length > 0

    if (!descricaoFilled || !valorFilled) {
        alert('Preencha todos os campos')
        return
    }

    const newTransaction = {id, descricao, selectId, valor}
    addItemToLocalStorage('transacoes', newTransaction)
    renderTransactionTable()

    document.getElementById('descricao').value = '';
    document.getElementById('valor').value = ''; 
}

function renderCategorySelect() {
    const select = document.getElementById('select-id')
    select.innerHTML = ''

    let categories = getItemsFromLocalStorage('categorias')
    categories.forEach(category => {
        let option = document.createElement('option')
        option.value = category.nomeCategoria
        option.textContent = category.nomeCategoria
        select.appendChild(option)
    })
}

document.getElementById('add-transacation').addEventListener('click', addTransactionToLocalStorage)
document.getElementById('logout').addEventListener('click', removeCurrentUserFromLocalStorage)

window.onload = function() {
    verifyCurrentUser()
    renderTransactionTable()
    renderCategorySelect()
}