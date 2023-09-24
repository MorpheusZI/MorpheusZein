const hamburg = document.querySelector(".burga");
const nav = document.querySelector(".sidebar");
const acc = document.querySelector(".acc");
hamburg.addEventListener("click", () => {
  const isOpened = hamburg.getAttribute("aria-expanded");
  if (isOpened === "false") {
    hamburg.setAttribute("aria-expanded", "true");
    nav.classList.toggle("open");
    acc.classList.toggle("acpen");
  } else {
    acc.classList.remove("acpen");
    nav.classList.remove("open");
    hamburg.setAttribute("aria-expanded", "false");
  }
});
