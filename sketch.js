let rows = 20;
let cols = rows*2;

const grid = document.querySelector("#grid");

function clearGrid () {
  grid.innerHTML = '';
}

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

function draw () {
  let mouseDown = false;

  document.body.addEventListener("mousedown", () => {
    mouseDown = true;
  });

  document.body.addEventListener("mouseup", () => {
    mouseDown = false;
  });

  const cells = document.querySelectorAll(".cols");

  cells.forEach(cell => {
    // Change color when clicking directly
    cell.addEventListener("mousedown", () => {
      cell.style.backgroundColor = 'rgb(49,49,49)';
    });

    // Change color when hovering while mouse is down
    cell.addEventListener("mouseover", () => {
      if (mouseDown) {
        cell.style.backgroundColor = 'rgb(49,49,49)';
      }
    });
  });
}

clearGrid();
createGrid(rows, cols);
draw();

const reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
  cells.forEach(cell => {
    cell.style.backgroundColor = 'rgb(218,218,218)';
  });
});

const numberInput = document.querySelector(".number");

numberInput.addEventListener("change", () => {
  rows = parseInt(numberInput.value);
  cols = rows*2;
  clearGrid();
  createGrid(rows, cols);
  draw();
});