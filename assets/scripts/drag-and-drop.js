const fileHandler = (file, name, type) => {
    if(type.split('/')[0] !== 'image'){
        errorMessage.innerHTML = `<i class="fa-solid fa-circle-info"></i> Tipo de arquivo inválido. Por favor, selecione uma imagem.`
        
        return false
    }
    errorMessage.innerHTML = ''
    
    const imgName = document.querySelector('.dropzone__description')
    if(imgName != null) imgName.remove()
    
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
        dropZone.innerHTML = ''
        dropZone.classList.add('filled')
        const img = document.createElement("img");
        const imgDescription = document.createElement("span")
        imgDescription.classList.add('dropzone__description')
        imgDescription.innerHTML = name
        img.src = reader.result
        dropZone.appendChild(img)
        dropZoneContainer.appendChild(imgDescription )
    }
} 

const dropZoneContainer = document.querySelector(".dropzone__container")
const dropZone = document.querySelector('[data-dropzone]')
const inputFile = document.querySelector('#input__file')
const errorMessage = document.querySelector('[data-imageSelector-error]')

inputFile.addEventListener('change', (e) => {
    e.preventDefault()
    const file = Array.from(inputFile.files)[0] //gets only the first file, so we allow just one image
    fileHandler(file, file.name, file.type)
})
    
dropZone.addEventListener('drop', (e) => {
    e.preventDefault()
    const file = Array.from(e.dataTransfer.files)[0]
    fileHandler(file, file.name, file.type)
})

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault()
})

dropZone.addEventListener('dragenter', (e) => {
    e.preventDefault()
    dropZone.classList.add('active')
})

dropZone.addEventListener('dragleave', (e) => {
    e.preventDefault()
    dropZone.classList.remove('active')
})