const imagesArray = [
  "../images/ollantaytambo.jpg",
  "../images/ollantaytambo2.jpg",
  "../images/ollantaytambo3.jpg",
];
let currentSlide = 0;
const imageElement = document.querySelector(".first_image");
const slideNumberElement = document.querySelector(".slidenumber");

function showNextSlide() {
  currentSlide = (currentSlide + 1) % imagesArray.length;
  imageElement.src = imagesArray[currentSlide];
  slideNumberElement.textContent = `${currentSlide + 1}/${imagesArray.length}`;
}

setInterval(showNextSlide, 10000);
