export class Product {
    static id = 0
    
    constructor(image, category, name, price, description) {
        Product.id++
        this.id = Product.id
        this.image = image
        this.category = category
        this.name = name
        this.price = price
        this.description = description
    }
}