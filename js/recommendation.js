const slideList = document.querySelectorAll(".recommendation__image");
const slidenumber = document.querySelector(".slidenumber");
let currentSlide = 0;

function showSlide(slideIndex) {
  slideList.forEach((slide) => {
    slide.style.display = "none";
  });
  slideList[slideIndex].style.display = "block";
  slidenumber.textContent = `${slideIndex + 1} / ${slideList.length}`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slideList.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000);
