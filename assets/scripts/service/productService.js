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

const deleteProduct = (id) => {
    return fetch(`http://localhost:3000/products/${id}`, {
        method:'DELETE',
    }) .then(response => {
        if (!response.ok) {
            alert('Não foi possível excluir o produto')
        }
    })
}

const listProducts = () => {
    return fetch(`http://localhost:3000/products`)
        .then(response => {
            if(response.ok){
                return response.json()
            }
            throw Error('Não foi possível listar os produtos.')
        })
}

export const productService = {
    postProduct,
    deleteProduct,
    listProducts
}