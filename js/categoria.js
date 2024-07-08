import { addItemToLocalStorage, renderTable, verifyCurrentUser, removeCurrentUserFromLocalStorage} from './localstorage-utils.js'

function renderCategoryTable() {
    const attributesToInsert = ['id', 'nomeCategoria', 'descricaoCategoria']
    renderTable('categorias', 'category-table-body', attributesToInsert)
}

function addCategoryToLocalStorage() {
    const id = Math.random().toString(36).substring(2, );
    const nomeCategoria = document.getElementById('nomeCategoria').value
    const descricaoCategoria = document.getElementById('descricaoCategoria').value

    const categoryNameFilled = nomeCategoria.length > 0
    const categoryDescriptionFilled = descricaoCategoria.length > 0

    if (!categoryNameFilled || !categoryDescriptionFilled) {
        alert('Preencha todos os campos')
        return
    }

    const newCategory = {id, nomeCategoria, descricaoCategoria}
    addItemToLocalStorage('categorias', newCategory)
    renderCategoryTable()

    document.getElementById('nomeCategoria').value = ''
    document.getElementById('descricaoCategoria').value = ''
}

document.getElementById('adicionarCategoria').addEventListener('click', addCategoryToLocalStorage)
document.getElementById('logout').addEventListener('click', removeCurrentUserFromLocalStorage)

window.onload = function(){
    verifyCurrentUser()
    renderCategoryTable()
}