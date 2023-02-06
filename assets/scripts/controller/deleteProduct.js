import { productService } from "../service/productService.js"

const managerButton = document.querySelector('[data-type="buttonManager"]')

managerButton.addEventListener('click', () => {
    const deleteButtons = document.querySelectorAll('.item__button-delete')
    deleteButtons.forEach(button => {
        button.addEventListener('click', async() => {
            try {
                const productId = button.parentElement.getAttribute('id')
                await productService.deleteProduct(productId)
                location.reload()
            } catch (error) {
                console.log(error);
                alert(`
                Não foi possível deletar o produto.
                Verifique se não está tentando deletar um produto modelo "Produto XYZ".
                `)
            }
        })
    })
})