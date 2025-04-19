let rows = 20;
let cols = rows*2;

const grid = document.querySelector("#grid");

function createGrid (rows, cols) {
  for (let i = 0; i < rows; i++) {
    let tempRow = document.createElement("div");
    tempRow.setAttribute("class", "rows");
    for(let j = 0; j < cols; j++) {
      let tempCol = document.createElement("div");
      tempCol.setAttribute("class", "cols");
      tempRow.appendChild(tempCol);
    }
    grid.appendChild(tempRow);
  }
}

createGrid(rows, cols);