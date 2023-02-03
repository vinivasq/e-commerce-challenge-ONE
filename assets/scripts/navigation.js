const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    if (button.dataset.type == 'buttonLogin') {
        button.addEventListener('click', () => {
            location.href = './login.html'
        }) 
    }
    
    if(button.dataset.type == 'buttonConsole') {
        button.addEventListener('click', () => {
            location.href = '#console'
        })
    }
    
    if(button.dataset.type == 'buttonManager'){
        button.addEventListener('click', () => {
            location.href = './products-manager.html'
        })
    }

    if(button.dataset.type == 'buttonNewProduct') {
        button.addEventListener('click', () => {
            const isLogged = JSON.parse(localStorage.getItem('isLogged'))
            isLogged ? location.href = "./add-new-product.html" : location.href = "./login.html"
        })
    }
})