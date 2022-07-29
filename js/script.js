// scrolling to top btn -

const scroll = document.getElementById("scroll");

window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }
});

scroll.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

// responsive btn

const resBtn = document.getElementById("res-btn");
const navLink = document.getElementById("nav-link");

resBtn.addEventListener("click", function () {
  navLink.classList.toggle("active");
});
