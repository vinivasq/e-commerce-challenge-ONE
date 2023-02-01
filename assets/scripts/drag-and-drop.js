const dropzoneContainer = document.querySelector(".dropzone__container")
const dropZone = document.querySelector('[data-dropzone]')
const inputFile = document.querySelector('#input__file')
const errorMessage = document.querySelector('[data-imageSelector-error]')
const filesToUpload = []

const fileHandler = (file, name, type) => {
    if(type.split('/')[0] !== 'image'){
        errorMessage.innerHTML = `<i class="fa-solid fa-circle-info"></i> Tipo de arquivo inválido. Por favor, selecione uma imagem.`
        
        return false
    }
    
    errorMessage.innerHTML = ''

    filesToUpload.push(file)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
        dropZone.innerHTML = ''
        const img = document.createElement("img");
        const imgDescription = document.createElement("p")
        imgDescription.classList.add('dropzone__description')
        imgDescription.innerHTML = name
        img.src = reader.result
        dropZone.appendChild(img)
        dropzoneContainer.appendChild(imgDescription )
    }
} 

inputFile.addEventListener('change', (e) => {
    e.preventDefault()
    Array.from(inputFile.files).forEach(file => {
        fileHandler(file, file.name, file.type)
    })
    console.log(filesToUpload);
})

dropZone.addEventListener('drop', (e) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    console.log(files);
    Array.from(files).forEach(file => {
        fileHandler(file, file.name, file.type)
    })
    console.log(filesToUpload);
})

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault()
})