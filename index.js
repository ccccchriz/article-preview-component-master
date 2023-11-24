const button = document.getElementById("share_button");
const button_container = document.getElementById("button_container");
const share_menu = document.getElementById("share_menu");

const toggleMenu = () => {
  if (share_menu.getAttribute("aria-expanded") == "true") {
    hideMenu();
  } else {
    share_menu.setAttribute("aria-expanded", "true");
    share_menu.classList.remove("hidden");
    button_container.classList.add("card__button-con--open");
    button.classList.add("card__button--open");
    document.getElementById("facebook").focus();
  }
};

const hideMenu = () => {
  if (share_menu.getAttribute("aria-expanded") == "false") return;
  share_menu.setAttribute("aria-expanded", "false");
  share_menu.classList.add("hidden");
  button_container.classList.remove("card__button-con--open");
  button.classList.remove("card__button--open");
  button.focus();
};

if (button != null && button_container != null && share_menu != null) {
  button.addEventListener("click", toggleMenu);

  [share_menu, button_container].forEach((el) =>
    el.addEventListener("keydown", (event) => {
      if (event.key == "Escape") hideMenu();
    })
  );
}
