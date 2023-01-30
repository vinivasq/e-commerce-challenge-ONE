const validateFields = (input) => {
    let message = `
        <i class="fa-solid fa-circle-info"></i> ${errorMessages[input.dataset.type]['valueMissing']}
    `

    if(input.validity.valid){
        input.parentElement.nextElementSibling.innerHTML=''
    } else {
        input.parentElement.nextElementSibling.innerHTML=showErrorMessage(input)
    }
    
    if (input.value.trim() == '') {
        console.log('ta vazio');
        input.parentElement.nextElementSibling.innerHTML = message
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
    'valueMissing',
]

const errorMessages = {
    name: {
        valueMissing: 'O campo "Nome" não pode ficar vazio.'
    },
    message: {
        valueMissing: 'O campo "Menssagem" não pode ficar vazio.'
    }
}

const inputs = document.querySelectorAll('input')
const textareaMessage = document.querySelector("[data-type='message']")
const buttonSendMessage = document.querySelector("[data-button-sendMessage]")

inputs.forEach(input => {
    input.addEventListener('blur', () => {
        validateFields(input)
    })
})

textareaMessage.addEventListener('blur', () => {
    validateFields(textareaMessage)
})

buttonSendMessage.addEventListener('click', (e) => {
    e.preventDefault()

    inputs.forEach(input => input.value = '')
    textareaMessage.value = ''
})