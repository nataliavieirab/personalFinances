function addItemToLocalStorage(key, item) {
    let items = localStorage.getItem(key)
    if (!items) {
        items = []
    } else {
        items = JSON.parse(items)
    }

    items.push(item);
    localStorage.setItem(key, JSON.stringify(items))
}

function removeItemFromLocalStorage(key, id) {
    let items = localStorage.getItem(key)
    if (!items) return

    items = JSON.parse(items)
    items = items.filter(item => item.id !== id)
    localStorage.setItem(key, JSON.stringify(items))

}

function getItemsFromLocalStorage(key) {
    let items = localStorage.getItem(key)

    return items ? JSON.parse(items) : []

}

function renderTable(key, tableBodyId, attributesToInsert) {
    let tableBody = document.getElementById(tableBodyId)
    tableBody.innerHTML = ''

    let items = getItemsFromLocalStorage(key)
    items.forEach(item => {
        let row = tableBody.insertRow()
        attributesToInsert.forEach(attribute => {
            let cell = row.insertCell()
            cell.innerHTML = item[attribute]
        })

        let deleteCell = row.insertCell()
        deleteCell.innerHTML = `<button class="delete-button" data-id="${item.id}">
                                    <img src="img/icon-trash.png" alt="Excluir" width="20">
                                </button>`
        
        let deleteButton = deleteCell.querySelector('.delete-button')
        deleteButton.style.backgroundColor = 'rgb(255, 64, 64)'
        deleteButton.style.borderRadius = '5px'
        deleteButton.style.border = 'none'
        deleteButton.style.padding = '5px 10px'
        deleteButton.style.cursor = 'pointer'

        deleteButton.addEventListener('click', function() {
            let id = this.getAttribute('data-id')
            removeItemFromLocalStorage(key, id)
            renderTable(key, tableBodyId, attributesToInsert)
        })
    })
}

function verifyCurrentUser() {
    let currentUser = localStorage.getItem('current-user')


    if (!currentUser) {
        window.location.href = '../login.html'
        alert('É necessário realizar o login para acessar esta página.')
    } 
}

function removeCurrentUserFromLocalStorage() {
    localStorage.removeItem('current-user')
}


export { addItemToLocalStorage, removeItemFromLocalStorage, getItemsFromLocalStorage, renderTable, verifyCurrentUser, removeCurrentUserFromLocalStorage}