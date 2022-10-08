const tail = document.querySelector(`.xvost`);
const body = document.querySelector("body");

window.addEventListener("mousemove", (e) => {
  const directionX = e.clientX;
  const directionY = e.clientY;

  tail.style.transform = `translate3d(${directionX}px, ${directionY}px, 0)`;
});
