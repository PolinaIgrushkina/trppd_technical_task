const imagesArray3 = [
  "images/lake_louise.jpg",
  "images/lake_louise2.jpg",
  "images/lake_louise3.jpg",
];
let currentSlide3 = 0;
const imageElement3 = document.querySelector(".third_image");

function showNextSlide() {
  currentSlide3 = (currentSlide3 + 1) % imagesArray3.length;
  imageElement3.src = imagesArray3[currentSlide3];
}

setInterval(showNextSlide, 10000);
