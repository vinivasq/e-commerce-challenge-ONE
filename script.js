let buttonLogin = document.querySelector("[data-button-login]")
let buttonConsole = document.querySelector("[data-button-console]")
let buttonNewProduct = document.querySelector("[data-button-newProduct]")

buttonConsole != null ?buttonConsole.addEventListener('click', () => location.href = "#console") : 0
buttonLogin != null ? buttonLogin.addEventListener('click', () => location.href ="./login.html") : 0
buttonNewProduct != null ? buttonNewProduct.addEventListener('click', () => location.href ="./add-new-product.html") : 0