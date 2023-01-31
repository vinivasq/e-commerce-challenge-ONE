const validateFields = (input) => {

    if (input.value.trim() == '') {
        input.setCustomValidity('O campo não pode estar em branco')
    } else if(input.value != 0) {
        input.setCustomValidity('')
    }

    if(input.validity.valid){
        input.parentElement.nextElementSibling.innerHTML=''
    } else {
        input.parentElement.nextElementSibling.innerHTML=showErrorMessage(input)
    }
    
}

const validatePrice = (input) => {
    const inputValue = parseInt(input.value)

    console.log(inputValue);
    
    if(inputValue <= 0) {
        input.setCustomValidity('O preço deve ser maior que R$ 0,00.')
    } else {
        input.setCustomValidity('')
    }
}

const showErrorMessage = (input) => {
    const inputType = input.dataset.type
    let message = ''
    errorTypes.forEach(error => {
        if(input.validity[error]){
            message = `<i class="fa-solid fa-circle-info"></i> ${errorMessages[inputType][error]}`
        }
    })
    return message
}

const errorTypes = [
    'customError'
]

const errorMessages = {
    name: {
        customError: 'O campo "Nome" não pode ficar em branco.'
    },
    message: {
        customError: 'O campo "Menssagem" não pode ficar em branco.'
    },
    imageURL: {
        customError: 'O campo "Imagem" não pode ficar em branco.'
    },
    category: {
        customError: 'O campo "Categoria" não pode ficar em branco.'
    },
    productName: {
        customError: 'O campo "Nome do produto" não pode ficar em branco.'
    },
    price: {
        customError: 'O preço do produto deve ser maior do que R$ 0,00.'
    },
    productDescription: {
        customError: 'O campo "Descrição do produto" não pode ficar em branco.'
    }
}

const forms = document.querySelectorAll('.form__container')
const inputs = document.querySelectorAll('input')
const textareas = document.querySelectorAll("textarea")

inputs.forEach(input => {
    input.addEventListener('blur', () => {
        if(input.dataset.type == "price"){
            validatePrice(input)
        }
        validateFields(input)
    })
})

textareas.forEach(textarea => {
    textarea.addEventListener('blur', () => {
        validateFields(textarea)
    })
})

forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    
        inputs.forEach(input => input.value = '')
        textareas.forEach(textarea => textarea.value = '')
    })
})