import { productService } from "../service/productService.js";
import { imageLoader } from "../service/imageService.js";

const listProduct = async( id) => {
    const products = await productService.listProducts()
    const product = products.find(product => product.id == id)
    const inputs = document.querySelectorAll('.form__input')
    const textArea = document.querySelector('[data-type="productDescription"]')
    
    imageLoader(product.image)
    
    inputs.forEach(input => {
        if(input.dataset.type == "productCategory") input.value = product.category
        if(input.dataset.type == "productName") input.value = product.name
        if(input.dataset.type == "productPrice") input.value = product.price
    })
    textArea.innerHTML = product.description
}

const productId = sessionStorage.getItem('id')
const form = document.querySelector('[data-type="form-editProduct"]')

listProduct(productId)

form.addEventListener('submit', async(e) => {
    e.preventDefault()

    const productImage = document.querySelector('.productImage').src
    const productCategory = document.querySelector('[data-type="productCategory"]').value
    const productName = document.querySelector('[data-type="productName"]').value
    const productPrice = document.querySelector('[data-type="productPrice"]').value
    const productDescription = document.querySelector('[data-type="productDescription"]').value

    try {
        await productService.editProduct(productId, productImage, productCategory, productName, productPrice, productDescription)

        alert("produto editado com sucesso!")
    } catch (error) {
        console.log(error);

        alert("Infelizmente, não foi possível editar o produto")
    }
})