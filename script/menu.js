const startButton = document.getElementById("startButton");
const rowsLabel = document.getElementById("rowsAmount");
const columnLabel = document.getElementById("columnAmount");

const increaseRows = document.getElementById("+rows");
const decreaseRows = document.getElementById("-rows");
const increaseColumns = document.getElementById("+columns");
const decreaseColumns = document.getElementById("-columns");

increaseRows.addEventListener("click", addRow);
decreaseRows.addEventListener("click", subtractRow);
increaseColumns.addEventListener("click", addColumn);
decreaseColumns.addEventListener("click", subtractColumn);

function addRow () {
  if (rows < 20) {
    rows += 1;
  }
  rowsLabel.textContent = rows;
  
} 

let rows = 10;
let columns = 10;





startButton.addEventListener("click", moveToGame);


