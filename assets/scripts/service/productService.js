const postProduct = (id, image, category, name, price, description) => {
    return fetch(`http://localhost:3000/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            image: image,
            category: category,
            name: name,
            price: price,
            description: description
        })
    })
    .then(response => {
        if(response.ok) {
            return response.body
        }
        throw new Error('Não foi possível criar o produto')
    }) 
}

export const productService = {
    postProduct,
}