let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  // const dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }

  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";

  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

// Burger menu toggle
document.querySelector(".burger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
  document.querySelector(".burger").classList.toggle("active");
});
