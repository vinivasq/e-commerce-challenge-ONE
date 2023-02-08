const deleteButton = () => {
  const button = document.createElement("button");
  button.classList.add(
    "item__button",
    "item__button-delete",
    "fa-regular",
    "fa-trash-can"
  );
  return button;
};
const editButton = () => {
  const button = document.createElement("button");
  button.classList.add(
    "item__button",
    "item__button-edit",
    "fa-regular",
    "fa-pen-to-square"
  );
  return button;
};

const managerButton = document.querySelector('[data-type="buttonManager"]');
const isLogged = JSON.parse(sessionStorage.getItem("isLogged"));
let managerMode = false;

managerButton.addEventListener("click", () => {
  managerMode = !managerMode;
  const products = document.querySelectorAll(".list__item");

  if (isLogged == "false") {
    location.href = "./login.html";
    return;
  }

  if (managerMode) {
    products.forEach((product) => {
      product.appendChild(deleteButton());
      product.appendChild(editButton());

      const buttonEdit = product.querySelector(".item__button-edit");

      buttonEdit.addEventListener("click", (e) => {
        const productId = e.target.parentElement.id;

        if (productId == "") {
          alert("Este produto não pode ser editado pois é um produto modelo.");
          return;
        }

        sessionStorage.setItem("id", productId);
        location.href = "./edit-product.html";
      });
    });
  } else {
    products.forEach((product) => {
      const buttons = product.querySelectorAll(".item__button");
      buttons.forEach((button) => button.remove());
    });
  }
});
