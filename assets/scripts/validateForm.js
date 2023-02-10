const validateFields = (input) => {
  if (input.value.trim() == "") {
    input.setCustomValidity("O campo não pode estar em branco");
  } else if (input.dataset.type == "productPrice" && input.value == "R$0,00") {
    input.setCustomValidity("O preço deve ser maior que R$ 0,00.");
  } else {
    input.setCustomValidity("");
  }

  if (input.validity.valid) {
    input.parentElement.nextElementSibling.innerHTML = "";
  } else {
    input.parentElement.nextElementSibling.innerHTML = showErrorMessage(input);
  }
};

const showErrorMessage = (input) => {
  const inputType = input.dataset.type;
  let message = "";
  errorTypes.forEach((error) => {
    if (input.validity[error]) {
      message = `<i class="fa-solid fa-circle-info"></i> ${errorMessages[inputType][error]}`;
    }
  });
  return message;
};

const setMaskMoney = (input) => {
  SimpleMaskMoney.setMask(input, {
    prefix: "R$",
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ",",
    thousandsSeparator: ".",
    cursor: "end",
  });
};

const errorTypes = ["customError", "patternMismatch", "typeMismatch"];

const errorMessages = {
  name: {
    customError: 'O campo "Nome" não pode ficar em branco.',
  },
  message: {
    customError: 'O campo "Menssagem" não pode ficar em branco.',
  },
  email: {
    customError: 'O campo "Email" não pode ficar em branco.',
    patternMismatch: "O e-mail deve ser válido! ex: seunome@provedor.com",
    typeMismatch: "O e-mail deve ser válido! ex: seunome@provedor.com",
  },
  password: {
    customError: 'O campo "Senha" não pode ficar em branco',
    patternMismatch: `A senha deve conter no mínimo: </br>
                - Entre 6 a 12 caracteres.</br>
                - Uma letra maiúscula.</br>
                - Uma letra minúscula.</br>
                - Um número.</br>
                (não pode conter espaços)
            `,
  },
  productCategory: {
    customError: 'O campo "Categoria" não pode ficar em branco.',
  },
  productName: {
    customError: 'O campo "Nome do produto" não pode ficar em branco.',
  },
  productPrice: {
    customError: "O preço do produto deve ser maior do que R$ 0,00.",
  },
  productDescription: {
    customError: 'O campo "Descrição do produto" não pode ficar em branco.',
  },
};

const forms = document.querySelectorAll(".form__container");
const inputs = document.querySelectorAll(".form__input");
const textareas = document.querySelectorAll("textarea");

inputs.forEach((input) => {
  if (input.dataset.type == "productPrice") setMaskMoney(input);

  input.addEventListener("blur", () => {
    validateFields(input);
  });
});

textareas.forEach((textarea) => {
  textarea.addEventListener("blur", () => {
    validateFields(textarea);
  });
});

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (form.dataset.type == "form-editProduct") {
      return;
    }

    if (form.dataset.type = "form-newProduct"){
      try {
        document.querySelector(".productImage").src;
      } catch (error) {
        alert('Selecione uma imagem')
        throw Error('Selecione uma imagem')
      }
      return
    }

    if (form.dataset.type == "form-login") {
      sessionStorage.setItem("isLogged", "true");
      location.href = "./products.html";
    }

    inputs.forEach((input) => {
      input.value = "";
      if (input.dataset.type == "productPrice") setMaskMoney(input);
    });
    textareas.forEach((textarea) => (textarea.value = ""));
  });
});
