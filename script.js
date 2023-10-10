function updateOpacity(event) {
  let target = event.target.querySelector(".square");
  let opacity = window.getComputedStyle(target).getPropertyValue("opacity");
  target.style.opacity = opacity;
}

function clearOpacity(event) {
  let target = event.target;
  target.style.opacity = 0;
}

function createGrid() {
  let n = 4;
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

document.addEventListener("DOMContentLoaded", function (event) {
  createGrid();
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    // box.addEventListener("mouseleave", updateOpacity);
    // box.addEventListener("click", clearOpacity);
  });
});
