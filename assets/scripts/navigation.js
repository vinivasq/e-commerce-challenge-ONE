const buttonLogin = document.querySelector("[data-button-login]")
const buttonConsole = document.querySelector("[data-button-console]")
const buttonNewProduct = document.querySelector("[data-button-newProduct]")
const buttonSignIn = document.querySelector('.button-primary-login')

buttonConsole != null ?buttonConsole.addEventListener('click', () => location.href = "#console") : 0
buttonLogin != null ? buttonLogin.addEventListener('click', () => location.href ="./login.html") : 0
buttonSignIn != null ? buttonSignIn.addEventListener('click', () => location.href ="./products.html") : 0

if (buttonNewProduct != null) { 
    buttonNewProduct.addEventListener('click', () => {
        const isLogged = JSON.parse(localStorage.getItem('isLogged'))

        isLogged ? location.href = "./add-new-product.html" : location.href = "./login.html"
    })
}

