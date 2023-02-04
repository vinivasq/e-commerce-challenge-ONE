import { productService } from "../service/productService.js"

const categories = document.querySelectorAll('.categorie')

categories.forEach(categorie => {
    categorie.chi
})





const render = async() => {
    const products = await productService.listProducts()
    
    console.log(products);
}

render()