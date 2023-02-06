const deleteButton = () => {
    const button = document.createElement('button')
    button.classList.add('item__button')
    button.classList.add('item__button-delete')
    button.innerHTML = '<i class="fa-regular fa-trash-can"></i>'
    return button    
}
const editButton = () => {
    const button = document.createElement('button')
    button.classList.add('item__button')
    button.classList.add('item__button-edit')
    button.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>'
    return button    
}

const managerButton = document.querySelector('[data-type="buttonManager"]')
const isLogged = JSON.parse(localStorage.getItem('isLogged')) 


managerButton.addEventListener('click', () => {
    
    if (!isLogged) {
        location.href = './login.html'
    }

    const products = document.querySelectorAll('.list__item')

    products.forEach(product => {
        product.appendChild(deleteButton())
        product.appendChild(editButton())

    })
})