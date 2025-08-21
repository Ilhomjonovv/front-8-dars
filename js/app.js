const menuBtn = document.querySelector(".navbar__menu");
const closeBtn = document.querySelector(".navbar__close");
const navCollection = document.querySelector(".navbar__collection");

menuBtn.addEventListener("click", () => {
  navCollection.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navCollection.classList.remove("active");
});
