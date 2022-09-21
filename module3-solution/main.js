const toTop = document.querySelector(".btt");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 215) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})