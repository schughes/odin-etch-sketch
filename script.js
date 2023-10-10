function createGrid() {
  let n = 8;
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
});
