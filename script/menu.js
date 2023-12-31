rows = 8;
columns = 12;

const startButton = document.getElementById("startButton");
const rowsLabel = document.getElementById("rowsAmount");
const columnsLabel = document.getElementById("columnsAmount");

const increaseRows = document.getElementById("+rows");
const decreaseRows = document.getElementById("-rows");
const increaseColumns = document.getElementById("+columns");
const decreaseColumns = document.getElementById("-columns");


increaseColumns.addEventListener("click", addColumn);
decreaseColumns.addEventListener("click", subtractColumn);
increaseRows.addEventListener("click", addRow);
decreaseRows.addEventListener("click", subtractRow);



function addRow () {
  if (rows < 20) {
    rows += 1;
  }
  rowsLabel.textContent = rows;
} 

function subtractRow () {
  if (rows > 2) {
    rows -= 1;
  }
  rowsLabel.textContent = rows;
} 

function addColumn () {
  if (columns < 20) {
    columns += 1;
  }
  columnsLabel.textContent = columns;
} 

function subtractColumn () {
  if (columns > 2) {
    columns -= 1;
  }
  columnsLabel.textContent = columns;
} 

startButton.addEventListener("click", moveToGame);

function moveToGame () {
  
  window.location.href ="game.html";
}

