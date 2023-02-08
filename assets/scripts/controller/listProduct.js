import { productService } from "../service/productService.js";

const createProduct = (image, name, price) => {
  return `
    <img src="${image}" class="item__image">
    <h3 class="item__title">${name}</h3>
    <p class="item__price">${price}</p>
    <a href="" class="item__link">Ver produto</a>
  `;
};

const createCategory = (id, name, product) => {
  return `
    <h2 class="menu__title menu__title-products">${name}</h2>
    <div class="categorie__products">
      <ul class="products__list">
        <li id="${id}" class="list__item">
          ${product}
        </li>
      </ul>
    </div>
  `;
};

const render = async () => {
  try {
    const products = await productService.listProducts();
    const categoriesNames = [];

    products.forEach((product) => {
      const categories = document.querySelectorAll(".categorie");

      categories.forEach((category) => {
        const categoryName = category.firstElementChild.innerHTML;

        if (!categoriesNames.some((category) => category == categoryName)) {
          categoriesNames.push(categoryName);
        }

        if (categoryName.toLowerCase() == product.category.toLowerCase()) {
          const list = category.querySelector(".products__list");
          const newProduct = document.createElement("li");
          newProduct.classList.add("list__item");
          newProduct.setAttribute("id", product.id);
          newProduct.innerHTML = createProduct(
            product.image,
            product.name,
            product.price
          );
          list.appendChild(newProduct);
        }

        if (
          !categoriesNames.some(
            (category) =>
              category.toLowerCase() == product.category.toLowerCase()
          )
        ) {
          const newCategory = document.createElement("section");
          newCategory.classList.add("categorie");
          newCategory.innerHTML = createCategory(
            product.id,
            product.category,
            createProduct(product.image, product.name, product.price)
          );
          categoriesNames.push(newCategory.firstElementChild.innerHTML);
          categories[categories.length - 1].parentElement.appendChild(
            newCategory
          );
        }
      });
    });
  } catch (error) {
    console.log(error);

    alert(`
            Não foi possível listar os produtos presentes no banco de dados.
            Tente iniciar o json-server.
        `);
  }
};

render();
