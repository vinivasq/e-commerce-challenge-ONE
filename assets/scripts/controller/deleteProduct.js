import { productService } from "../service/productService.js"

const managerButton = document.querySelector('[data-type="buttonManager"]')

managerButton.addEventListener('click', () => {
    const deleteButtons = document.querySelectorAll('.item__button-delete')
    deleteButtons.forEach(button => {
        button.addEventListener('click', async() => {
            const productId = button.parentElement.id
            
            if(productId == ''){
                alert('Este produto não pode ser excluido pois é um produto modelo.')
                return
            }

            try {
                await productService.deleteProduct(productId)
                location.reload()
            } catch (error) {
                console.log(error);
                alert('Não foi possível deletar o produto.')
            }
        })
    })
})