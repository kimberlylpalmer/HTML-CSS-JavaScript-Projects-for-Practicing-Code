const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const buttonRect = button.getBoundingClientRect();
    const x = e.clientX - buttonRect.left;
    const y = e.clientY - buttonRect.top;

    createRipple(button, x, y);

    for (let i = 0; i < 1000000; i++) {
      const delay = i * 50;

      setTimeout(() => {
        const randX = Math.random() * button.offsetWidth;
        const randY = Math.random() * button.offsetHeight;

        createRipple(button, randX, randY);
      }, delay);
    }
  });
});

function createRipple(button, x, y) {
  const circle = document.createElement("span");
  circle.classList.add("circle");

  circle.style.top = y + "px";
  circle.style.left = x + "px";

  const hue = Math.floor(Math.random() * 360);
  circle.style.background = `radial-gradient(circle, hsla(${hue}, 100%, 75%, 0.9) 0%, hsla(${hue}, 100%, 75%, 0.3) 60%, transparent 100%)`;

  button.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 2000);
}

const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

function setTime() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  const hoursForClock = hours % 12;

  const timeEl = document.querySelector(".time");

  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds} ${ampm}`;
}

// StackOverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

setTime();

setInterval(setTime, 1000);
