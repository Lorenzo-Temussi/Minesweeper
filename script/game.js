let grid = document.getElementById("grid");
let minesCounter = document.getElementById("mines");
let resetButton = document.getElementById("resetBtn");

resetButton.addEventListener("click", reset, false);

let running = true;
let flagsAmount = 0;
let rows = 8;
let columns = 12;
let minesAmount = 0;
let minesDisplay = 0;
let cells = [];
let unknownCells = [];
let minesCoords = [];
let flagCoords = [];

function initGrid(columns, rows) {
  grid.style.width = 30 * columns + "px";
  grid.style.height = 30 * rows + "px";
  console.log(grid.style.width);
  console.log(grid.style.height);
}

function createCells(columns, rows) {
  for (let i = 0; i < columns * rows; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.style.coords = i;
    //cell.textContent = i;
    cells[i] = cell;
    grid.appendChild(cell);
    cell.addEventListener("click", cellClicked, false);
    unknownCells[i] = cell;
  }
}

function generatemines(columns, rows) {
  minesAmount = Math.floor((columns * rows) / 6);
  for (let i = 0; i < minesAmount - 1; i++) {
    let randomCoord = Math.floor(Math.random() * (columns * rows));
    if (minesCoords.includes(randomCoord)) {
      i--;
    } else {
      minesCoords[i] = randomCoord;
    }
  }
  minesDisplay = minesCounter;
  minesCounter.textContent = minesAmount;

}

function placeFlag(event) {
  if (running == false) {return;}

  if (event.target.textContent == "F") {
    event.target.textContent = "";
    
    flagsAmount--;
    minesCounter.textContent = minesAmount - flagsAmount;
    event.target.style.backgroundColor = "rgb(180, 180, 180)";

    return;
  } else if (event.target.textContent == "") {
    event.target.textContent = "F";
    event.target.style.backgroundColor = "yellow";
    flagsAmount++;
    minesCounter.textContent = minesAmount - flagsAmount;
    return;
  } 
  
}

function cellClicked(event) {
  if (window.event.ctrlKey) {
    placeFlag(event);
  } else {
    checkCell(event);
  }
}

function checkCell(event) {
  if (running == false) {return;}

  if (event.target.textContent == "F") {
    return;
  }

  if (unknownCells.includes(event.target)) {
    unknownCells.splice(unknownCells.indexOf(event.target), 1);
    console.log(unknownCells.length);

  console.log(cells.indexOf(event.target));
  if (minesCoords.includes(cells.indexOf(event.target))) {
    event.target.style.backgroundColor = "red";
    event.target.textContent = "X";
    running = false;
    alert("You lost!");
    return;
  } else {
    let temp = numberOfNeighboringMines(event.target);
    event.target.style.backgroundColor = "gray";
    
    event.target.textContent = numberOfNeighboringMines(event.target);
  }
  
  
  }
  
  checkWin();

  function numberOfNeighboringMines(cell) {
    let temp = 0;

    if (minesCoords.includes(cells.indexOf(cell) - columns - 1)
      && (cells.indexOf(cell) % columns != 0)
      && (cells.indexOf(cell) > 11)) {
      temp++;
    }

    if (minesCoords.includes(cells.indexOf(cell) - columns)
      && (cells.indexOf(cell) > 11)) {
      temp++;
    }

    if (minesCoords.includes(cells.indexOf(cell) - columns + 1)
      && (cells.indexOf(cell) % columns != columns - 1)
      && (cells.indexOf(cell) > 11)) {
      temp++;
    }

    if (minesCoords.includes(cells.indexOf(cell) - 1)
      && (cells.indexOf(cell) % columns != 0)) {
      temp++;
    }

    if (minesCoords.includes(cells.indexOf(cell) + 1)
      && (cells.indexOf(cell) % columns != columns - 1)) {
      temp++;
    }

    if (minesCoords.includes(cells.indexOf(cell) + columns - 1)
      && (cells.indexOf(cell) % columns != 0)
      && (cells.indexOf(cell) + columns <= columns * rows)) {
      temp++;
    }

    if (minesCoords.includes(cells.indexOf(cell) + columns)
      && (cells.indexOf(cell) + columns <= columns * rows)) {
      temp++;
    }

    if (minesCoords.includes(cells.indexOf(cell) + columns + 1)
      && (cells.indexOf(cell) % columns != columns - 1)
      && (cells.indexOf(cell) + columns <= columns * rows)) {
      temp++;
    }
    return temp;
  }
}

function checkWin() {
  if (unknownCells.length == minesAmount) {
    alert("You won!");
    running = false;
  }
}

function reset() {
  running = true;
  rows = 8;
  columns = 12;
  minesAmount = 0;
  minesDisplay = 0;
  cells = [];
  unknownCells = [];
  minesCoords = [];
  flagCoords = [];

  //A function that deletes all cells
  
  
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }


  initGrid(columns, rows);
  createCells(columns, rows);
  generatemines(columns, rows);
  console.log(minesCoords);

}


initGrid(columns, rows);
createCells(columns, rows);
generatemines(columns, rows);
console.log(minesCoords);

