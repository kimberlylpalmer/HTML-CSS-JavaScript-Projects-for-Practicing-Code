const sliderContainer = document.querySelector(".slider-container");
const sideRight = document.querySelector(".right-side");
const sideLeft = document.querySelector(".left-side");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = sideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

sideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  sideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  sideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};
