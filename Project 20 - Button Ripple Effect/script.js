const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    for (let i = 0; i < 5; i++) {      
      const circle = document.createElement("span");
      circle.classList.add("circle");

      circle.style.top = yInside + "px";
      circle.style.left = xInside + "px";
      
      circle.style.width = circle.style.height = `${80 + i * 10}px`; // vary size
      circle.style.animationDelay = `${i * 300}ms`; // staggered start
      circle.style.opacity = `${1 - i * 0.15}`; // fade variation
      
      this.appendChild(circle);
      
      setTimeout(() => circle.remove(), 3000)
    }
  });
});
