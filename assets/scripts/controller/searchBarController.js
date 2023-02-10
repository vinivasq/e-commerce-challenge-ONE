import { productService } from "../service/productService.js";

const filterByName = async (searchParams) => {
  await productService.listProducts();
  const products = document.querySelectorAll(".list__item");
  const categories = document.querySelectorAll(".categorie");

  products.forEach((product) => {
    const productName = product
      .querySelector(".item__title")
      .innerHTML.toLowerCase();

    if (!productName.includes(searchParams.toLowerCase())) {
      categories.forEach(categories => categories.style.display = 'none')
      product.style.display = "none";
    } else {
      const categories = document.querySelector(".categories");
      const listTitle = document.createElement("h3");
      const resultList = document.createElement("ul");

      resultList.classList.add("products__list");
      listTitle.classList.add("menu__title", "menu__title-products");
      listTitle.innerHTML = "Resultado da pesquisa";
      resultList.appendChild(product)
      categories.appendChild(listTitle)
      categories.appendChild(resultList);
    }
  });
};

const inputSearchbar = document.querySelector(".searchbar__input");
const buttonSearchbar = document.querySelector('[data-type="buttonSearchbar"]');
const searchParams = JSON.parse(sessionStorage.getItem("searchParams"));

if(searchParams != '') filterByName(searchParams);

inputSearchbar.value = searchParams;

inputSearchbar.addEventListener("blur", () => {
  sessionStorage.setItem("searchParams", JSON.stringify(inputSearchbar.value));
});

buttonSearchbar.addEventListener("click", () => {
  const updatedSearchParams = JSON.parse(
    sessionStorage.getItem("searchParams")
  );
  updatedSearchParams != ""
    ? filterByName(updatedSearchParams)
    : location.reload();
});
