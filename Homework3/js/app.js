// Homework 1.1

const tabItems = document.querySelectorAll(".tabheader__item");
const tabContent = document.querySelectorAll(".tabcontent");

const changeTabContent = (index) => {

  tabContent.forEach((img) => {
    img.style.display = "none";
  });

  tabContent[index].style.display = "block";
};

tabItems.forEach((item, index) => {
  let currentIndex = 0;

  item.addEventListener("mousemove", () => {
    currentIndex = index % tabContent.length;
    changeTabContent(currentIndex);
  });
});

// Homework 1.2

const prevButton = document.querySelector(".offer__slider-prev");
const nextButton = document.querySelector(".offer__slider-next");
const totalSlides = document.querySelector("#total");
const slides = document.querySelectorAll(".offer__slide");

let slideIndex = 0;

const showSlide = (index) => {
  
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
  current.textContent = "0" + (slideIndex + 1);
};

const prevSlide = () => {
  slideIndex--;
  showSlide(slideIndex);
};

const nextSlide = () => {
  slideIndex++;
  showSlide(slideIndex);
};

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

totalSlides.textContent = "0" + slides.length;
showSlide(slideIndex);
