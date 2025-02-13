// import * as timer from '../../scripts/countdown.js'

/// OPTIMIZE: and refactor plan
//
// keep product list, display menu, stock, and ticket holder
//
// new flow map
// 1. click take order button
// >>> function to generate random order in an object with an array of product names and the time to make them
// >>> function to format "order" copy, order accept button, and display modal
//
// 2. click order accept button
// >>> function to update till
// >>> function to update stock
// >>> function to generate ticket that will print to screen
//
// 3. Inside the generate ticket function
// >>> function to format order for Ticket
// >>> function to format initial timer display
// >>> function to create start button
// >>> function to listen for timers ending
// >>> function to create done button
//
// 3.1. Format order function
// >>> get info from random order object
//
// 3.2. format timer function
// >>> get info from random order object
//
// 3.3. start button function
// >>> starts function to loop through timers and initialize their countdown and update their display

// 3.4. listen for timer end function

// 3.5. done button function
// >>> The done button starts disabled, and is enabled when all timers reach zero
// >>> clicking the done button runs destroy ticket function


// -- JAVASCRIPT CAFE! -- //

// -- PRODUCTS -- //
let products = {
  whiteCoffee: {
    productName: 'White Coffee',
    price: 5,
    stock: 8,
    minutes: 2,
    seconds: 59,
  },

  blackCoffee: {
    productName: 'Black Coffee',
    price: 3.5,
    stock: 13,
    minutes: 1,
    seconds: 37,
  },

  muffin: {
    productName: 'Muffin',
    price: 4,
    stock: 4,
    minutes: 0,
    seconds: 59,
  },

  avocadoToast: {
    productName: 'Avocado Toast',
    price: 11,
    stock: 7,
    minutes: 4,
    seconds: 59,
  },

  cheeseScone: {
    productName: 'Cheese Scone',
    price: 6,
    stock: 8,
    minutes: 0,
    seconds: 59,
  },

  dogBiscuit: {
    productName: 'Dog Biscuit',
    price: 1,
    stock: 20,
    minutes: 0,
    seconds: 11,
  },
}

// -- BUILD PRODUCT MENU -- //

function addProductToMenu(productDescription) {
  let container = document.getElementById('menu')
  let newProduct = document.createElement('p')
  newProduct.textContent = productDescription
  container.appendChild(newProduct)
  // console.log(newProduct)
}

function displayProducts() {
  for (let getProducts in products) {
    let product = products[getProducts]
    let productInfo = product.productName + ': $' + product.price

    addProductToMenu(productInfo)
  }
}
displayProducts()

// -- BUILD STOCK TRACKER SCREEN -- //

function addProductToStock(stockDescription) {
  let container = document.getElementById('stock')
  let currentStock = document.createElement('p')
  currentStock.textContent = stockDescription
  container.appendChild(currentStock)
}

function displayStockLevels() {
  let container = document.getElementById('stock')

  while (container.firstChild) {
    container.removeChild(container.firstChild)
  }

  for (let getProducts in products) {
    let product = products[getProducts]
    let productStock = product.productName + ': ' + product.stock
    addProductToStock(productStock)
  }
}
displayStockLevels()

// -- GENERATE CUSTOMER ORDER -- //

let customer = {
  order: [],
  timer: [],
}

let printToTicket = {
  order: [],
  timer: [],
}
let customerOrderModal = {
  order: [],
}

let timerDisplay

let minOrderSize = 1
let maxOrderSize = 5

function generateCustomerOrder() {
  let orderSize = getRandomInt(minOrderSize, maxOrderSize)

  let formatForCustomerOrder = []

  let newOrder = []
  let timers = []

  let formatForTicket = []
  let formatForTimers = []

  let startBtn = document.createElement('button')
  startBtn.id = 'startBtn'

  let productNames = Object.keys(products)

  for (let i = 0; i < orderSize; i++) {
    let productIndex = getRandomInt(0, productNames.length - 1)
    let productName = productNames[productIndex]
    let minutes = products[productName].minutes
    let seconds = products[productName].seconds

    // TODO: see if possible to make this a function that is called inside of timers.push()

    newOrder.push(productName)
    timers.push([minutes, seconds])

    orderFormat(productName, minutes, seconds, i)

    // OPTIMIZE: remove on refactor
    // timers.minutes = minutes
    // timers.seconds = seconds
    // allTimers[i] = timers
    // console.log(minutes + ":" + seconds)
    // let timer = minutes + ":" + seconds
    // timers.push(minutes, seconds)

  }

  // seperate out order formatting
  function orderFormat(productName, minutes, seconds, i) {
    if (i === 0) {
      formatForCustomerOrder.push('<p>a ' + productName)
      formatForTicket.push('<p>' + productName)
      formatForTimers.push('<p class="item-' + i + '">' + minutes + ':' + seconds)
    }
    else if (i === orderSize - 1) {
      formatForCustomerOrder.push('</p><p>and a ' + productName + '</p>')
      formatForTicket.push('</p><p>' + productName + '</p>')
      formatForTimers.push('</p><p class="item-' + i + '">' + minutes + ':' + seconds + '</p>')
    }
    else {
      formatForCustomerOrder.push('</p><p>' + productName)
      formatForTicket.push('</p><p>' + productName)
      formatForTimers.push('</p><p class="item-' + i + '">' + minutes + ':' + seconds)
    }

  }
  customerOrderModal = formatForCustomerOrder

  printToTicket.order = formatForTicket
  printToTicket.timer = formatForTimers
  customer.timer = timers
  customer.order = newOrder
  customerOrderAlert()
  console.log(customer.order)
  console.log(customer.timer)
}

// -- PRINT TICKET -- //
// ticketNumber parameter passes in the current ticket no. from ticketCounter
function tickets(ticketNumber) {
  let ticketHolder = document.getElementById('tickets')
  let newContainer = document.createElement('div')
  newContainer.id = ticketNumber
  newContainer.className = 'ticket'

  let ticketGrid = document.createElement('div')
  ticketGrid.className = 'grid ticket-info'

  let products = document.createElement('div')
  products.innerHTML =
    '<p>Order:</p><p>- - - -</p>' + printToTicket.order

  // let createTimer = document.createElement('p')
  // createTimer.id = 'time'
  // createTimer.innerHTML = 'time'
  let ticketTimers = document.createElement('div')
  ticketTimers.innerHTML = '<p>' + ticketCounter + '</p><p>-</p>' + printToTicket.timer
  // ticketTimers.appendChild(createTimer)

  // OPTIMIZE: Delete on next refactor
  // let newTicket = document.createElement('div')
  // newTicket.id = ticketNumber
  // newTicket.className = 'ticket'
  // newContainer.appendChild(newTicket)
  // newContainer.appendChild(orderList, makeTimer)

  // OPTIMIZE: Delete on next refactor
  // let ticketInfoHolder = document.getElementById(ticketNumber)
  // let ticketInfo = document.createElement('p')

  let startBtn = document.createElement('button')
  startBtn.id = 'startBtn'
  startBtn.className = 'button'
  startBtn.textContent = 'Start'
  // HACK: Countdown timer just using values in countDown function as test
  // TODO: get function to pull numbers in for the correct product
  // TODO: and print each timer next the product
  startBtn.addEventListener('click', function() {
    startTimers()
    startBtn.setAttribute('disabled', '')
  })

  let doneButton = document.createElement('button')
  doneButton.id = 'ticket-' + ticketCounter
  doneButton.className = 'button'
  doneButton.textContent = 'Done'
  doneButton.addEventListener('click', destroyTicket)
  doneButton.setAttribute('disabled', '')

  // OPTIMIZE: remove on refactor
  // orderButton.setAttribute('onclick', 'destroyTicket(this)')
  // let test = '2:00'
  // products.appendChild(ticketInfo)
  // ticketTimers.appendChild(test)

  ticketGrid.appendChild(products)
  ticketGrid.appendChild(ticketTimers)

  newContainer.appendChild(ticketGrid)
  newContainer.appendChild(doneButton)
  newContainer.appendChild(startBtn)

  ticketHolder.appendChild(newContainer)
  timerDisplay = customer.timer
}

// -- Ticket Timers -- //
// TODO: create timer start buttons for each food item
// TODO: create onclick event that
// TODO: and also removes button
// TODO: and also creates the timer display
// TODO: and calls countdown function
//
//OPTIMIZE: next refactor

// -- DESTROY TICKET -- //
function destroyTicket() {
  // let buttonId = buttonClick.id
  let parentElement = this.parentNode
  parentElement.parentNode.removeChild(parentElement)
  // console.log(this.parentNode)
}

// -- TRANSACTIONS -- //
let cash = 0

function displayCash() {
  document.getElementById('cash').innerHTML = 'Cash In Till: ' + cash
}
displayCash()

// -- New Customer Order Alert -- //
let openDialog = document.getElementById('customerOrder')
let scrollStatus = document.documentElement
function customerOrderAlert() {
  //TODO: If statement for orders with eggs
  // - Create How would you like your eggs button with an ID
  // - figure out how to make it render before the acceptOrder button

  let customerOrder = document.getElementById('displayCustomerOrder')
  customerOrder.innerHTML = "<strong>Can I please order:</strong>" + customerOrderModal
  openDialog.setAttribute('open', '')
  scrollStatus.className = 'modal-is-open modal-is-opening'
}

openDialog.addEventListener('click', acceptOrder)
function acceptOrder() {
  scrollStatus.className = ''
  openDialog.removeAttribute('open')
  processOrder()
  tickets(ticketCounter)
}

// -- Process Order -- //
function processOrder() {

  let saleTotal = 0

  for (let i = 0; i < customer.order.length; i++) {
    let productName = customer.order[i]
    // console.log(customer.order[i])
    if (products[productName].stock > 0) {
      products[productName].stock--
      saleTotal += products[productName].price
    } else {
      alert('Sorry we are out of ' + productName)
    }
  }
  cash += saleTotal
  displayCash()
  displayStockLevels()
}

// -- Process Order -- //
function makeTimers() {

  let saleTotal = 0

  for (let i = 0; i < customer.order.length; i++) {
    let productName = customer.order[i]
    // console.log(customer.order[i])
    if (products[productName].stock > 0) {
      products[productName].stock--
      saleTotal += products[productName].price
    } else {
      alert('Sorry we are out of ' + productName)
    }
  }
  cash += saleTotal
  displayCash()
  displayStockLevels()
}

// -- TICKET NUMBERING -- //

let ticketCounter = 0
let takeOrder = document.getElementById('customerButton')
takeOrder.addEventListener('click', () => {
  ticketCounter++
  generateCustomerOrder()
})
// -- UTIL -- //

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}



// Added timer here //
/////////////////////
/////////////////////
function startTimers() {
  for (let i = 0; i < customer.timer.length; i++) {
    timerDisplay = document.getElementById('item-' + [i])

    let isRunning = false
    let interval

    let minutes = 0
    let seconds = 11
    // window.onload = countDown()

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
    function countDown(doneButton) {
      if (!isRunning) {
        isRunning = true
        timerDisplay.innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
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
            doneButton.removeAttribute('disabled')
          }
        }, 1000)
      } else {
        clearInterval(interval)
        isRunning = false
        // doneButton.removeAttribute('disabled')
      }
    }
    countDown()
  }
}
