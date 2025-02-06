window.onload = generateGameBoard
//--  REFACTOR CODE --//
// Concise, but readable

//-- GLOBAL VARIABLES --//
let tableContainer = document.getElementById('gameboard')
let boardSize = []
let cells = []
let whichPlayersTurn = (Math.random() >= 0.5)
let turnCount = 0
let gameIsOver = false
let scores = { "X": 0, "0": 0, "S": 0, }

//-- BOARD SIZE FORM --//
form = document.getElementById('boardSize')
function submitSize(update) {
  updateGameBoard()
  //prevent page reload
  update.preventDefault()
}
form.addEventListener('submit', submitSize)

//-- CONFIRM GAME BOARD UPDATE --//
function updateGameBoard() {

  let updateConfirm = confirm('game board is being updated!\n\nCurrent game progress will be lost.')
  if (updateConfirm === true) {
    tableContainer.removeChild(tableContainer.lastChild)
    generateGameBoard()
  }
}

//-- GENERATE NEW GAME BOARD --//
function generateGameBoard() {

  boardSize = document.getElementById('board-size').value
  let table = document.createElement('table')
  table.id = 'game-board'
  let tbody = document.createElement('tbody')

  // Loop to build gameboard squares or "cells"
  for (let i = 0; i < boardSize; i++) {
    let row = document.createElement('tr')

    for (let j = 0; j < boardSize; j++) {
      let cell = document.createElement('td')
      row.appendChild(cell)
      cells.push(cell)
    }

    tbody.appendChild(row)
  }

  //-- ADD EVENT LISTENER TO CELLS --//
  for (i = 0; i < cells.length; i++) {
    cells[i].onclick = playerPlays
  }
  table.appendChild(tbody)
  tableContainer.appendChild(table)
  table.setAttribute('border', '3')
}

//-- PLAYER PLAYS --//
function playerPlays(e) {

  // assign event target to clickedCell
  let clickedCell = e.target
  // set player turn
  let symbol = (whichPlayersTurn == true) ? "0" : "X"
  // Check cell is empty, then mark current players move
  clickedCell.innerHTML == ""
    ? clickedCell.innerHTML = symbol
    : (alert('Square already played, choose another cell'), whichPlayersTurn = !whichPlayersTurn)

  // Check if move created a winning combination
  checkForWin(symbol)

  // Check if game is over
  if (gameIsOver === true) {
    // Inform players who won, update scoreboard and reset game board
    document.getElementById('game-status').innerHTML = symbol + " is the winner"
    // setTimeout so on page game-status updates, before alert, and board reset.
    setTimeout(() => {
      alert(symbol + " is the winner \n\n Do you want to start a new game?")
      document.getElementsByTagName("TD").innerHTML = resetBoard()
      document.getElementById('game-status').innerHTML = whosTurn + " Starts"
    }, 1000)
    scores[symbol] += 1
    document.getElementById(symbol).innerHTML = scores[symbol]
    gameIsOver = false
    turnCount = 0

  } else {

    // Check for Stalemate
    if (turnCount > (cells.length - 1)) {
      setTimeout(() => {
        alert('Stalemate')
        document.getElementsByTagName("TD").innerHTML = resetBoard()
      }, 1000)

      // if Stalemate, update scoreboard, and reset game board
      scores["S"] += 1
      document.getElementById('S').innerHTML = scores["S"]
      gameIsOver = false
      turnCount = 0
    }

    // No winner, No stalemate, switch players
    whichPlayersTurn = !whichPlayersTurn
    whosTurn = (whichPlayersTurn == true) ? "0" : "X"
    document.getElementById('game-status').innerHTML = whosTurn + "'s turn"
    turnCount += 1
  }
}

//-- CHECK FOR WINNING COMBINATION --//
function checkForWin() {

  // determines if there all "X"s or "0"s horizontally, vertically, or diagonally
  let table = document.getElementById('game-board')

  // save possible winning arrays
  let diagonalLeft = []
  let diagonalRight = []
  let vertical = []
  let horizontal = []
  // Combine all possible winners into array of arrays
  let possibleWinners = []

  // loop to build arrays for rows and diagonals
  for (let i = 0; i < table.rows.length; i++) {
    let currentRow = table.rows[i]
    let horizontalRows = []

    for (let j = 0; j < currentRow.cells.length; j++) {
      let cell = currentRow.cells[j]
      horizontalRows.push(cell.innerHTML)
    }

    //each loop adds horizontal row
    horizontal.push(horizontalRows)
    //each loop builds diagonal arrays
    diagonalLeft.push(horizontalRows[(table.rows.length - 1) - i])
    diagonalRight.push(horizontalRows[i])

  }
  // loop to build arrays for columns or "vertical"
  for (let i = 0; i < table.rows.length; i++) {
    vertical[i] = horizontal.map(innerArray => innerArray[i])
  }

  // Add all of the arrays to possibleWinners
  possibleWinners = [...horizontal, ...vertical, diagonalLeft, diagonalRight]

  // Check if there's a winner. All it does is determine if each array is full of the same value (excluding empty values) and returns true or false to end the game.
  for (const list of possibleWinners) {
    if (list.every(item => item === list[0]) && list.every(item => item !== "")) {
      gameIsOver = true;
    }
  }
}

// -- RESET GAME BOARD --//
function resetBoard() {
  for (i = 0; i < cells.length; i++) {
    cells[i].innerHTML = ""
  }
}
