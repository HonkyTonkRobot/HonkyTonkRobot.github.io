// In this practice I am going to write out what I want to do with the JavaScript Cafe project.

// The goal is to create a pretty involved game of running a Cafe. The high level would be a cafe with a visual of the front of house, and the back of house.
// elements of the game
//  - Random orders based on menu that pop up at random times
//  - a way to turn the order into a ticket
//  - a way to collect money
//  - display the money in the till
//  - track stock including dishes
// Back of house elements
//  - Display tickets
//  - individual timer on tickets
//  - an alert when certain amount of time passes that is a customer asking about their order
//  - A way to start making the things on a ticket, and a count down for how long those things take to make.
//  - A limit on how many drinks can be made at a time. Based on portafilter and milk steaming constrains
//  - An alert when a ticket is complete, with randomized customer responese like "dude, sick latte art"
// - restock buttons, that are limited by money in the till.
// - a list of level up items to add to the menu, these items have different prices which can generate money faster, but have training costs, and initial stock costs that are limited by what you currently have to the till.
// Future add-ons
//  - when a complaint is received the cafe start rating goes down, when a randomly generate really happy customer the star rating goes up
//  - a request for refund button with the option to deny or choose to refund order.
//  - increase speed of customers coming in as the star rating gets higher
//  - option to buy a products price increase if star rating goes up
//  - option to reduce price to increase speed in which star rating goes up if your star rating is low.
//  - randomized complaints when products are out of stock, updates cafe star rating.

// Building blocks plan

// [x] build an object to hold  all of the items that will be displayed on the menu

// [x]build menu - Create a function to grab keys and values from products object, and build HTML elements to visualize the menu

// [x] Build Random number function to generate a min/max order size, create random order fulment responses.

// [x] Build a function to create a random order size using random number generator

// [x] Build a function to random pick products from the products object based on the order size

// [x] Build a button onclick event Asking the customer what they would like, and then generates an alert with the order.

// **Removed from requirements** As the alert "ok" button achieves this. -- build a "checkout button' onclick event for processing the order into money in the till, and a ticket at the espresso machine, and a stock update.

// [x] function for grabbing order information and building a ticket with HTML elements. including a time from order, start making button, with countdown timers on each item.

// [x] build time counting utility

// build function for generating time from order counters, that when a certain time is reached if order is not complete an alert is printed with a customer complaint.

// build a function to generate product countdowns from time of product start making onclick event.

// build function with if statement to only allow a certain number of drinks to be made at a time, only one white coffee at a time, no food can be made while a white coffee is being made, and only a total number of items can be made at any given time. Every time the limit is tested an alert will pop up saying why the start making timer cant be started yet.

//Build a function to display a randomized customer message alert when order is complete using the random number util.

//Restock buttons, that are dependent on money in the till.

//Build a modal for adding items to the menu, that when purchased adds the product to the products object, and updates the till.

//Build a function to product an alert when a product is out of stock.

//Build a function to produce an alert when stock is attempted to be purchased or new items are being added to menu but there isn't enough money in the till.

