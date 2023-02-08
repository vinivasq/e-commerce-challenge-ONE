import { productService } from "../service/productService.js";

const form = document.querySelector('[data-type="form-newProduct"]');

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const productImage = document.querySelector(".productImage").src;
  const productCategory = document.querySelector(
    '[data-type="productCategory"]'
  ).value;
  const productName = document.querySelector('[data-type="productName"]').value;
  const productPrice = document.querySelector(
    '[data-type="productPrice"]'
  ).value;
  const productDescription = document.querySelector(
    '[data-type="productDescription"]'
  ).value;

  try {
    await productService.postProduct(
      productImage,
      productCategory,
      productName,
      productPrice,
      productDescription
    );

    alert("produto cadastrado com sucesso!");
  } catch (error) {
    console.log(error);

    alert("Infelizmente, não foi possível adicionar o produto");
  }
});
