import { getItemsFromLocalStorage, verifyCurrentUser, removeCurrentUserFromLocalStorage } from './localstorage-utils.js'

function renderSpendingTable() {
    const transactions = getItemsFromLocalStorage('transacoes')
    const spendingTableBody = document.getElementById('spending-table-body')
    spendingTableBody.innerHTML = ''

    const totalGastosPorCategoria = {}

    transactions.forEach(transaction => {
        const { selectId: categoryName, valor } = transaction;
        if (!totalGastosPorCategoria[categoryName]) {
            totalGastosPorCategoria[categoryName] = 0
        }
        totalGastosPorCategoria[categoryName] += parseFloat(valor)
    })

    Object.keys(totalGastosPorCategoria).forEach(categoryName => {
        const totalGasto = totalGastosPorCategoria[categoryName]
        const row = spendingTableBody.insertRow()
        const cellCategoria = row.insertCell()
        const cellTotalGasto = row.insertCell()

        cellCategoria.textContent = categoryName
        cellTotalGasto.textContent = `R$ ${totalGasto.toFixed(2)}`
    })
}

document.getElementById('logout').addEventListener('click', removeCurrentUserFromLocalStorage)
window.onload = function() {
    verifyCurrentUser()
    renderSpendingTable()
} 
