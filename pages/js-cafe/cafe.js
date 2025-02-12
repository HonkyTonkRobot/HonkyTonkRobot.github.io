// -- JAVASCRIPT CAFE! -- //

// -- PRODUCTS -- //
let products = {
  whiteCoffee: {
    productName: 'White Coffee',
    price: 5,
    stock: 8,
  },

  blackCoffee: {
    productName: 'Black Coffee',
    price: 3.5,
    stock: 13,
  },

  muffin: {
    productName: 'Muffin',
    price: 4,
    stock: 4,
  },

  avocadoToast: {
    productName: 'Avocado Toast',
    price: 11,
    stock: 7,
  },

  cheeseScone: {
    productName: 'Cheese Scone',
    price: 6,
    stock: 8,
  },

  dogBiscuit: {
    productName: 'Dog Biscuit',
    price: 1,
    stock: 20,
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

let minOrderSize = 1
let maxOrderSize = 5

function generateCustomerOrder() {
  let orderSize = getRandomInt(minOrderSize, maxOrderSize)

  let newOrder = []
  let formatForTicket = []

  let productNames = Object.keys(products)

  for (let i = 0; i < orderSize; i++) {
    let productIndex = getRandomInt(0, productNames.length - 1)
    let productName = productNames[productIndex]
    newOrder.push(productName)
    formatForTicket.push('</br>' + productName)
  }

  printToTicket = formatForTicket
  customer.order = newOrder
  tickets(ticketCounter)
  customerOrderAlert()
  // processOrder()
}

// -- PRINT TICKET -- //
// makeTicket parameter passes in the current ticket no. from ticketCounter
function tickets(makeTicket) {
  let ticketHolder = document.getElementById('tickets')
  let newContainer = document.createElement('div')
  newContainer.id = makeTicket
  newContainer.className = 'ticket'
  // OPTIMIZE: Delete on next refactor

  // let newTicket = document.createElement('div')
  // newTicket.id = makeTicket
  // newTicket.className = 'ticket'
  // newContainer.appendChild(newTicket)

  ticketHolder.appendChild(newContainer)

  let ticketInfoHolder = document.getElementById(makeTicket)
  let ticketInfo = document.createElement('p')
  ticketInfo.innerHTML =
    'Order:' + ticketCounter + '</br>- - - - - - - -' + printToTicket

  let orderButton = document.createElement('button')
  orderButton.id = 'ticket-' + ticketCounter
  orderButton.className = 'button'
  orderButton.textContent = 'Done'
  orderButton.setAttribute('onclick', 'destroyTicket(this)')

  ticketInfoHolder.appendChild(ticketInfo)
  ticketInfoHolder.appendChild(orderButton)

  orderButton.addEventListener('click', destroyTicket)
}

// -- DESTROY TICKET -- //
function destroyTicket(buttonClick) {
  let buttonId = buttonClick.id
  let parentElement = this.parentNode
  parentElement.parentNode.removeChild(parentElement)
  console.log(buttonId)
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
  customerOrder.innerHTML = "<strong>Can I please order:</strong>" + printToTicket
  openDialog.setAttribute('open', '')
  scrollStatus.className = 'modal-is-open modal-is-opening'
}

openDialog.addEventListener('click', acceptOrder)
function acceptOrder() {
  scrollStatus.className = ''
  openDialog.removeAttribute('open')
  processOrder()
}

// -- Process Order -- //
function processOrder() {

  let saleTotal = 0

  for (let i = 0; i < customer.order.length; i++) {
    let productName = customer.order[i]
    console.log(customer.order[i])
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
