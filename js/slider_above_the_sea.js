const container = document.querySelector(".aboveTheSea__container");
const image = document.querySelector(".aboveTheSea__image");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const sliderNumber = document.querySelector(".slider-number");

const images = [
  "images/above_the_sea.jpg",
  "images/above_the_sea2.jpg",
  "images/above_the_sea3.jpg",
];
let currentImage = 0;

function updateImage() {
  image.src = images[currentImage];
  sliderNumber.textContent = `${currentImage + 1}/${images.length}`;
}

function prevImage() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  updateImage();
}

function nextImage() {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  updateImage();
}

prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);

updateImage();
