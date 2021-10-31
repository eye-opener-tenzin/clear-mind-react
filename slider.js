let btn = document.querySelector("button");
let start = null;
btn.addEventListener("mousedown", function (e) {
  start = e.clientY;
});
btn.addEventListener("mousemove", function (e) {
  if (start !== null) {
    let current = e.clientY;
    let difference = current - start;
    let currentTop = Number(
      e.target.style.top.slice(0, e.target.style.top.length - 2)
    );
    let newPosition = Math.max(currentTop + difference, 111.5 - 60);
    newPosition = Math.min(newPosition, 770 - 75);
    e.target.style.top = `${newPosition}px`;
    start = e.clientY;
  }
});
btn.addEventListener("mouseup", function (e) {
  start = null;
});
btn.addEventListener("mouseleave", function (e) {
  start = null;
});
