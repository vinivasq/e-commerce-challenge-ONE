import { productService } from "../service/productService.js"

const createProduct = (image, name, price) => {
    return `
        <img src="${image}" class="item__image">
        <h3 class="item__title">${name}</h3>
        <p class="item__price">${price}</p>
        <a href="" class="item__link">Ver produto</a>
    `
}

const createCategory = (name, product) => {
    return `
        <h2 class="menu__title menu__title-products">${name}</h3>
        <div class="categorie__products">
            <ul class="products__list">
                <li class="list__item">
                    ${product}
                </li>
            </ul>
        </div>
    `
}


const categories = document.querySelectorAll('.categorie')


const render = async() => {
    try {
        const products = await productService.listProducts()
        
        products.forEach(product => {
            const categoriesNames = []
            
            categories.forEach(category => {
                const categoryName = category.firstElementChild.innerHTML
                categoriesNames.push(categoryName)
    
                if(categoryName.toLowerCase() == product.category.toLowerCase()){
                    const list = category.querySelector(".products__list")
                    const newProduct = document.createElement("li")
                    newProduct.classList.add("list__item")
                    newProduct.innerHTML = createProduct(product.image, product.name, product.price)
                    list.appendChild(newProduct)
                }
            })
    
            if (!categoriesNames.some(category => category.toLowerCase() == product.category.toLowerCase())) {
                const newCategory = document.createElement("section")
                newCategory.classList.add("categorie")
                newCategory.innerHTML = createCategory(product.category, 
                    createProduct(product.image, product.name, product.price))
                categories[categories.length - 1].parentElement.appendChild(newCategory)
            }
        })
    } catch (error) {
        console.log(error);
        
        alert(`
            Não foi possível listar os produtos presentes no banco de dados.
            Tente iniciar o json-server.
        `)
    }

}

render()