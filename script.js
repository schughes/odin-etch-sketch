function createGrid() {
  let n = 4;
  for (let i = 1; i <= n; i++) {
    let row = document.createElement("div");
    row.id = `r${i}`;
    row.classList.add("row");
    for (let j = 1; j <= n; j++) {
      let div = document.createElement("div");
      div.classList.add("square");
      row.appendChild(div);
    }
    document.getElementById("grid").appendChild(row);
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  createGrid();
});
