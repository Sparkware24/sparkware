/*Menu setup*/

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("active");
    nav.classList.toggle("active");
  });

  // Close the menu when a link is clicked
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menuToggle.classList.remove("active");
      nav.classList.remove("active");
    });
  });
});
