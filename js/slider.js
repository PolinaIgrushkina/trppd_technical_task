// получаем элементы слайдера
const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll(".slide");
const slideNumber = document.querySelector(".slide-number");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

// функция, которая переключает класс .active между слайдами
function showSlide(index) {
  // удаляем класс .active у всех слайдов
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  // добавляем класс .active к текущему слайду
  slides[index].classList.add("active");
  slideNumber.textContent = currentIndex + 1 + "/8";
}

// обработчик события для кнопки "назад"
prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
});

// обработчик события для кнопки "вперед"
nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
});
