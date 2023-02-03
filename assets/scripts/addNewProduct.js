import { Product } from "./Product.js"

const form = document.querySelector('[data-type="form-newProduct"]')
const productCategory = document.querySelector('input[name="category"]')
const productName = document.querySelector('input[name="productName"]')
const productPrice = document.querySelector('input[name="price"]')
const productDescription = document.querySelector('textarea[name="productDescription"]')

form.addEventListener('submit', () => {
    const product = new Product(
        JSON.parse(localStorage.getItem('productImage')),
        productCategory.value,
        productName.value,
        productPrice.value,
        productDescription.value
    )

    localStorage.setItem(JSON.stringify(product.id), JSON.stringify(product))

    console.log(product);
})