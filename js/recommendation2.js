const imagesArray2 = [
  "../images/antelope_canyon.jpg",
  "../images/antelope_canyon2.jpg",
  "../images/antelope_canyon3.jpg",
];
let currentSlide2 = 0;
const imageElement2 = document.querySelector(".second_image");

function showNextSlide() {
  currentSlide2 = (currentSlide2 + 1) % imagesArray2.length;
  imageElement2.src = imagesArray2[currentSlide2];
}

setInterval(showNextSlide, 10000);
