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

form.addEventListener('submit', () => {

})