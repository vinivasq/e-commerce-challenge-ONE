export const mobileSearchbar = () => {
  const navbar = document.querySelector(".navbar");
  const buttonHeader = navbar.querySelector(".button");
  const navbarSearchbar = document.querySelector(".navbar__searchbar");
  const inputSearchbar = document.querySelector(".searchbar__input");
  const buttonSearchbar = document.querySelector(".searchbar__button");

  buttonHeader.style.display = "none";
  navbarSearchbar.classList.add("navbar__searchbar-active");
  inputSearchbar.classList.add("searchbar__input-active");
  inputSearchbar.focus()

  inputSearchbar.addEventListener('blur', () => {
    if(inputSearchbar.value == ''){
      navbarSearchbar.classList.remove("navbar__searchbar-active");
      inputSearchbar.classList.remove("searchbar__input-active");
      buttonHeader.style.display = 'flex'
    }
  })

  buttonSearchbar.addEventListener('click', () => {
    location.reload();
  })
};