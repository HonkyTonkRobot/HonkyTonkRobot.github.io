// import * as timer from '../../scripts/countdown.js'

/// OPTIMIZE: and refactor plan
//
// keep product list, display menu, stock, and ticket holder
//
// new flow map
// 1. click take order button
// [x] function to generate random order in an object with an array of product names and the time to make them
// [x] function to format "order" copy, order accept button, and display modal
//
// 2. click order accept button
// [x] function to update till
// [x] function to update stock
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

/////////////////////
// -- PRODUCTS -- //
///////////////////

import { products } from './products.js'

/////////////////////////
// -- DISPLAY MENU -- //
///////////////////////

function addProductToMenu(productDescription) {
  let container = document.getElementById('menu')
  let newProduct = document.createElement('p')
  newProduct.textContent = productDescription
  container.appendChild(newProduct)
}

function displayProducts() {
  for (let getProducts in products) {
    let product = products[getProducts]
    let productInfo = product.name + ': $' + product.price

    addProductToMenu(productInfo)
  }
}
displayProducts()

//////////////////////////
// -- DISPLAY STOCK -- //
////////////////////////

function updateStock() {
  let stockDisplay = document.getElementById('stockDisplay')

  while (stockDisplay.firstChild) {
    stockDisplay.removeChild(stockDisplay.firstChild)
  }

  for (let currentStock in products) {
    let stockToUpdate = document.createElement('p')
    let product = products[currentStock]
    if (product.stock === 0) {
      stockToUpdate.innerHTML = '<s>' + product.name + ': ' + product.stock + '</s>'
      stockToUpdate.style.color = 'var(--pico-del-color)'
    } else {
      stockToUpdate.innerHTML = product.name + ': ' + product.stock
    }
    stockDisplay.appendChild(stockToUpdate)
  }
}
updateStock()

///////////////////////
// -- Take Order -- //
/////////////////////
let ticketNumber = 0

let takeOrder = document.getElementById('customerButton')
takeOrder.addEventListener('click', () => { ticketNumber++, generateCustomerOrder() })

///////////////////////////////////////////
// -- GENERATE RANDOM CUSTOMER ORDER -- //
/////////////////////////////////////////

let minOrderSize = 1
let maxOrderSize = 5

let currentCustomer = {}

function generateCustomerOrder() {
  let orderSize = getRandomInt(minOrderSize, maxOrderSize)
  let productNames = Object.keys(products)

  let order = []
  let productKeys = []
  let timers = []

  for (let i = 0; i < orderSize; i++) {
    let productIndex = getRandomInt(0, productNames.length - 1)

    let productKey = productNames[productIndex]
    let name = products[productKey].name
    let minutes = products[productKey].minutes
    let seconds = products[productKey].seconds


    order.push(name)
    productKeys.push(productKey)
    timers.push([minutes, seconds])
  }

  currentCustomer.timer = timers
  currentCustomer.order = order
  currentCustomer.productKeys = productKeys
  customerOrderAlert(order)
  console.log(currentCustomer)
}

/////////////////////////////////
// -- DISPLAY ORDER MODAL -- ///
///////////////////////////////
let openDialog = document.getElementById('customerOrder')
let scrollStatus = document.documentElement

function customerOrderAlert(currentOrder) {

  let customerOrderAlert = document.getElementById('displayCustomerOrder')
  customerOrderAlert.innerHTML = "<strong>Can I please order:</strong>" + currentOrder
  openDialog.setAttribute('open', '')
  openDialog.addEventListener('click', acceptOrder)
  scrollStatus.className = 'modal-is-open modal-is-opening'
}

////////////////////////// NOTES: acceptOrder function is
// -- ACCEPT ORDER -- ///         triggered by click event in
////////////////////////          customerOrderAlert function

function acceptOrder() {
  scrollStatus.className = ''
  openDialog.removeAttribute('open')

  processOrder()
  tickets(ticketNumber)
}

//////////////////////////
// -- Process Order -- //
////////////////////////

function processOrder() {

  let saleTotal = 0

  for (let i = 0; i < currentCustomer.order.length; i++) {
    let productName = currentCustomer.productKeys[i]

    if (products[productName].stock > 0) {
      products[productName].stock--
      saleTotal += products[productName].price
    } else {
      alert('Sorry we are out of ' + productName)
    }
  }
  cash += saleTotal
  updateTill()
  updateStock()
}

/////////////////////////
// -- CASH IN TILL -- //
///////////////////////
let cash = 0

function updateTill() {
  document.getElementById('cash').innerHTML = 'Cash In Till: ' + cash
}





// // FIXME: not sure what to do with this code yet
// let customerOrderModal = {}
// let formatForCustomerOrder = []
//
// // DEBUG: orderFormat(name, minutes, seconds, i)
// // FIXME: move to generate ticket function
// // NOTE: I Changed productName to productKeys in the generate customer order function
// function orderFormat(productName, minutes, seconds, i) {
//   if (i === 0) {
//     formatForCustomerOrder.push('<p>a ' + productName)
//     formatForTicket.push('<p>' + productName)
//     formatForTimers.push('<p class="item-' + i + '">' + minutes + ':' + seconds)
//   }
//   else if (i === orderSize - 1) {
//     formatForCustomerOrder.push('</p><p>and a ' + productName + '</p>')
//     formatForTicket.push('</p><p>' + productName + '</p>')
//     formatForTimers.push('</p><p class="item-' + i + '">' + minutes + ':' + seconds + '</p>')
//   }
//   else {
//     formatForCustomerOrder.push('</p><p>' + productName)
//     formatForTicket.push('</p><p>' + productName)
//     formatForTimers.push('</p><p class="item-' + i + '">' + minutes + ':' + seconds)
//   }
//
// }
// customerOrderModal = formatForCustomerOrder






//NOTE: revisit when you get to generate ticket

// let printToTicket = {}
// let timerDisplay
//
// let formatForTicket = []
// let formatForTimers = []
//
// FIXME: THIS should be moved to generate ticket function
// let startBtn = document.createElement('button')
// startBtn.id = 'startBtn'


// printToTicket.order = formatForTicket
// printToTicket.timer = formatForTimers


////////////////////////////
// -- GENERATE TICKET -- //
//////////////////////////
function tickets(ticketNumber) {
  let ticketHolder = document.getElementById('tickets')
  let newTicket = document.createElement('div')
  newTicket.id = ticketNumber
  newTicket.className = 'ticket'

  let ticketGrid = document.createElement('div')
  ticketGrid.className = 'grid ticket-info'

  let products = document.createElement('div')
  products.id = 'products-' + ticketNumber

  for (let getProductName in currentCustomer) {
    let printProductName = document.createElement('p')
    let product = currentCustomer[getProductName]
    if (product.stock > 1) {
      console.log('yay')
      printProductName.innerHTML = '<s>' + product.name + ': ' + product.stock + '</s>'
      // printProductName.style.color = 'var(--pico-del-color)'
    } else {
      console.log('nay')
      printProductName.innerHTML = product.name + ': ' + product.stock
    }
    products.appendChild(printProductName)
  }
  ticketGrid.appendChild(products)

  newTicket.appendChild(ticketGrid)

  ticketHolder.appendChild(newTicket)
}




// -- PRINT TICKET -- //
// function tickets(ticketNumber) {
//   let ticketHolder = document.getElementById('tickets')
//   let newTicket = document.createElement('div')
//   newTicket.id = ticketNumber
//   newTicket.className = 'ticket'
//
//   let ticketGrid = document.createElement('div')
//   ticketGrid.className = 'grid ticket-info'
//
// let products = document.createElement('div')
// products.innerHTML =
//   '<p>Order:</p><p>- - - -</p>' + currentCustomer.order
//
// let createTimer = document.createElement('p')
// createTimer.id = 'time'
// createTimer.innerHTML = 'time'
// let ticketTimers = document.createElement('div')
// ticketTimers.innerHTML = '<p>' + ticketNumber + '</p><p>-</p>' + currentCustomer.timer
// ticketTimers.appendChild(createTimer)
//
//   let startBtn = document.createElement('button')
//   startBtn.id = 'startBtn'
//   startBtn.className = 'button'
//   startBtn.textContent = 'Start'
//   // HACK: Countdown timer just using values in countDown function as test
//   // TODO: get function to pull numbers in for the correct product
//   // TODO: and print each timer next the product
//   startBtn.addEventListener('click', function() {
//     startTimers()
//     startBtn.setAttribute('disabled', '')
//   })
//
//   let doneButton = document.createElement('button')
//   doneButton.id = 'ticket-' + ticketNumber
//   doneButton.className = 'button'
//   doneButton.textContent = 'Done'
//   doneButton.addEventListener('click', destroyTicket)
//   doneButton.setAttribute('disabled', '')
//
// ticketGrid.appendChild(products)
// ticketGrid.appendChild(ticketTimers)
//
// newTicket.appendChild(ticketGrid)
// newTicket.appendChild(doneButton)
// newTicket.appendChild(startBtn)
//
// ticketHolder.appendChild(newTicket)
// timerDisplay = currentCustomer.timer
// }

// -- DESTROY TICKET -- //
// function destroyTicket() {
//   let parentElement = this.parentNode
//   parentElement.parentNode.removeChild(parentElement)
// }


// -- UTIL -- //

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}



// Added timer here //
/////////////////////
/////////////////////
// function startTimers() {
//   for (let i = 0; i < currentCustomer.timer.length; i++) {
//     timerDisplay = document.getElementById('item-' + [i])
//
//     let isRunning = false
//     let interval
//
//     let minutes = 0
//     let seconds = 11
//     // window.onload = countDown()
//
//     //function to update screen every second
//     function updateTimer() {
//       if (seconds > 0 || minutes > 0) {
//         timerDisplay.innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
//       } else {
//         timerDisplay.innerHTML = '<small>COMPLETE</small>'
//         timerDisplay.style.color = 'var(--pico-ins-color)'
//       }
//     }
//
//     //make the start and stop buttons start and stop timer
//     function countDown(doneButton) {
//       if (!isRunning) {
//         isRunning = true
//         timerDisplay.innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
//         timerDisplay.style.color = 'var(--pico-del-color)'
//
//         interval = setInterval(() => {
//           if (seconds > 0 || minutes > 0) {
//             seconds--
//             if (seconds === 0 && minutes > 0) {
//               seconds = 59
//               minutes--
//             }
//             updateTimer()
//           } else {
//             clearInterval(interval)
//             isRunning = false
//             doneButton.removeAttribute('disabled')
//           }
//         }, 1000)
//       } else {
//         clearInterval(interval)
//         isRunning = false
//         // doneButton.removeAttribute('disabled')
//       }
//     }
//     countDown()
//   }
// }
