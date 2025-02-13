// import * as timer from '../../scripts/countdown.js'





// -- JAVASCRIPT CAFE! -- //
// TODO: import countdown function
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
}

let printToTicket = {
  order: [],
}
let customerOrderModal = {
  order: [],
}

let allTimers = {}
let timerDisplay

let minOrderSize = 1
let maxOrderSize = 5

function generateCustomerOrder() {
  let orderSize = getRandomInt(minOrderSize, maxOrderSize)

  let newOrder = []
  let formatForTicket = []
  let formatForCustomerOrder = []
  let startBtn = document.createElement('button')
  startBtn.id = 'startBtn'

  let productNames = Object.keys(products)

  for (let i = 0; i < orderSize; i++) {
    let productIndex = getRandomInt(0, productNames.length - 1)
    let productName = productNames[productIndex]
    let minutes = products[productName].minutes
    let seconds = products[productName].seconds
    let timers = {}
    newOrder.push(productName)
    orderFormat(productName, i)
    timers.minutes = minutes
    timers.seconds = seconds
    allTimers[productName] = timers
    // console.log(minutes + ":" + seconds)
    // let timer = minutes + ":" + seconds
    // timers.push(minutes, seconds)

  }

  // seperate out order formatting
  function orderFormat(productName, i) {
    if (i === 0) {
      formatForCustomerOrder.push('<p>a ' + productName)
      formatForTicket.push('<p>' + productName)
    }
    if (i === orderSize - 1) {
      formatForCustomerOrder.push('</p><p>and a ' + productName + '</p>')
      formatForTicket.push('</p><p>' + productName + '</p>')
    }
    else {
      formatForCustomerOrder.push('</p><p>' + productName)
      formatForTicket.push('</p><p>' + productName)
    }

  }

  printToTicket = formatForTicket
  customerOrderModal = formatForCustomerOrder
  customer.order = newOrder
  customerOrderAlert()
  // processOrder()
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
    '<p>Order:</p><p>- - - -</p>' + printToTicket

  let createTimer = document.createElement('p')
  createTimer.id = 'time'
  createTimer.innerHTML = 'time'
  let ticketTimers = document.createElement('div')
  ticketTimers.innerHTML = '<p>' + ticketCounter + '</p><p>-</p>'
  ticketTimers.appendChild(createTimer)

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
  startBtn.addEventListener('click', countDown)

  let orderButton = document.createElement('button')
  orderButton.id = 'ticket-' + ticketCounter
  orderButton.className = 'button'
  orderButton.textContent = 'Done'
  orderButton.addEventListener('click', destroyTicket)

  // OPTIMIZE: remove on refactor
  // orderButton.setAttribute('onclick', 'destroyTicket(this)')
  // let test = '2:00'
  // products.appendChild(ticketInfo)
  // ticketTimers.appendChild(test)

  ticketGrid.appendChild(products)
  ticketGrid.appendChild(ticketTimers)

  newContainer.appendChild(ticketGrid)
  newContainer.appendChild(orderButton)
  newContainer.appendChild(startBtn)

  ticketHolder.appendChild(newContainer)
  timerDisplay = createTimer
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
// const timerDisplay = document.getElementById('time')

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
function countDown() {
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
      }
    }, 1000)
  } else {
    clearInterval(interval)
    isRunning = false
  }
}
