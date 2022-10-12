const chessboard = document.getElementById("chessboard")
const boardWidth = document.getElementById("boardWidth")
const boardHeight = document.getElementById("boardHeight")
const sizeInputs = [...document.querySelectorAll(".sizeInput")]

console.log(sizeInputs);

function setBoardSize(boardWidth, boardHeight) {
  chessboard.innerHTML = "";

  //Nested For-loop for rows and cells.
  for (let i = 0; i < boardWidth; i++) {
    //Add row
    const row = document.createElement("div")
    row.classList.add("row")
    for (let i = 0; i < boardHeight; i++) {
      //Add cell
      const cell = document.createElement("div")
      cell.classList.add("cell")
      row.appendChild(cell)
    }
    chessboard.appendChild(row)
  } 
}

sizeInputs.forEach(function (sizeInput) {
  //When input field changes
  sizeInput.addEventListener('change', function() {
    setBoardSize(boardWidth.value, boardHeight.value)
  })
})

//Initial size
setBoardSize(8, 8)