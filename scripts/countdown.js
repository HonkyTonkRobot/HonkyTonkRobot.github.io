// -- Building a timer practice -- //

// -- GLOBAL VARIABLES -- //
const timerDisplay = document.getElementById('time')
// const startButton = document.getElementById('startBtn')
// const resetButton = document.getElementById('resetBtn')
// const timerContainer = document.getElementById('timerDisplay')

let isRunning = false
let interval
let minutes = 0
let seconds = 20
window.onload = countDown()
//function to update screen every second
function updateTimer() {
  if (seconds > 0 || minutes > 0) {
    timerDisplay.innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
  } else {
    timerDisplay.innerHTML = '<small>COMPLETE</small>'
    timerDisplay.style.color = 'var(--pico-ins-color)'
  }
}

//make the start and stop buttons start and stop timer
function countDown() {
  if (!isRunning) {
    isRunning = true
    timerDisplay.style.color = 'var(--pico-del-color)'

    interval = setInterval(() => {
      if (seconds > 0 || minutes > 0) {
        seconds--
        if (seconds === 0 && minutes > 0) {
          seconds = 59
          minutes--
        }
        updateTimer()
      } else {
        clearInterval(interval)
        isRunning = false
      }
    }, 1000)
  } else {
    clearInterval(interval)
    isRunning = false
  }
}

// //function to reset timer
// resetButton.addEventListener('click', function() {
//   clearInterval(interval)
//   isRunning = false
//   minutes = 1
//   seconds = 59
//   updateTimer()
//   startButton.textContent = 'start'
// })

//Initialize display of timer
updateTimer()
