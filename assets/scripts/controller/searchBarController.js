import { productService } from "../service/productService.js";

const listProducts = (products) => {
  const categories = document.querySelector(".categories");
  const productContainer = document.querySelector(".products");
  const searchTitle = productContainer.querySelector(".menu__title");
  const resultList = document.createElement("ul");

  categories.style.display = "none";
  searchTitle.innerHTML = "Resultado da pesquisa";
  resultList.classList.add("products__list");
  productContainer.appendChild(resultList);

  products.forEach((product) => {
    resultList.appendChild(product);
  });
};

const filterByName = async (searchParams) => {
  await productService.listProducts();
  const products = document.querySelectorAll(".list__item");
  let productsFound = [];

  products.forEach((product) => {
    const productName = product
      .querySelector(".item__title")
      .innerHTML.toLowerCase();

    if (productName.includes(searchParams.toLowerCase())) {
      productsFound.push(product);
    }
  });

  listProducts(productsFound);
};

const inputSearchbar = document.querySelector(".searchbar__input");
const buttonSearchbar = document.querySelector('[data-type="buttonSearchbar"]');
const searchParams = JSON.parse(sessionStorage.getItem("searchParams"));

if (searchParams != "") filterByName(searchParams);

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

  location.reload();
});
