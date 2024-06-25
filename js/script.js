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



/*service animation*/
document.addEventListener("DOMContentLoaded", function () {
  const serviceItems = document.querySelectorAll(".service-item");
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 500); // delay each item by 500ms multiplied by its index
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  serviceItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.5}s`;
    observer.observe(item);
  });
});
