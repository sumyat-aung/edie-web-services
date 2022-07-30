// responsive btn

const resBtn = document.getElementById("res-btn");
const navLink = document.getElementById("nav-link");

resBtn.addEventListener("click", function () {
  navLink.classList.toggle("active");
});
