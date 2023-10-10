function increaseOpacity(target) {
  let currentOpacity = parseFloat(
    window.getComputedStyle(target).getPropertyValue("opacity")
  );
  currentOpacity += 0.025;
  if (currentOpacity >= 1) {
    currentOpacity = 1;
  }
  target.style.opacity = currentOpacity;
}

function clearOpacity(event) {
  let target = event.target;
  target.style.opacity = 0;
}

function createGrid(n) {
  for (let i = 1; i <= n; i++) {
    let row = document.createElement("div");
    row.id = `r${i}`;
    row.classList.add("row");
    for (let j = 1; j <= n; j++) {
      let box = document.createElement("div");
      box.classList.add("box");
      let div = document.createElement("div");
      div.classList.add("square");
      box.appendChild(div);
      row.appendChild(box);
    }
    document.getElementById("grid").appendChild(row);
  }
}

let intervalId;
const n = 6;
document.addEventListener("DOMContentLoaded", function (event) {
  createGrid(n);
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("mouseenter", (event) => {
      let target = event.target.querySelector(".square");
      intervalId = setInterval(() => {
        increaseOpacity(target);
      }, 50);
    });
    box.addEventListener("mouseleave", () => {
      clearInterval(intervalId);
    });
    box.addEventListener("click", (event) => {
      event.target.style.opacity = 0;
    });
  });
});
