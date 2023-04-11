// выбираем все нужные элементы
const container = document.querySelector(".aboveTheSea__container");
const image = document.querySelector(".aboveTheSea__image");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const sliderNumber = document.querySelector(".slider-number");

// создаем массив из путей к картинкам
const images = [
  "../images/above_the_sea.jpg",
  "../images/above_the_sea2.jpg",
  "../images/above_the_sea3.jpg",
];
let currentImage = 0;

// функция для обновления картинки и номера слайда
function updateImage() {
  image.src = images[currentImage];
  sliderNumber.textContent = `${currentImage + 1}/${images.length}`;
}

// функция для перехода к предыдущей картинке
function prevImage() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  updateImage();
}

// функция для перехода к следующей картинке
function nextImage() {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  updateImage();
}

// добавляем слушатели событий на кнопки
prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);

// отображаем номер первого слайда при загрузке страницы
updateImage();
