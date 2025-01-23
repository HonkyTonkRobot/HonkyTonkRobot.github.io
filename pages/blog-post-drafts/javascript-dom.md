---
title: "JavaScript and the DOM"
author: "Joel Anderson"
date: "2025-01-23"
description: "A few core concepts of JavaScript and the DOM, that we learned in Sprint 3"
---

## How the sausage is made
Understanding how websites work can feel overwhelming so I'm going to use a simple analogy that does a pretty good job of explaining the different elements like HTML, CSS and how JavaScript interacts with them.

First you have HTML which is like the structure of a house. It's a static structure that has to be built in a certain way. You can customize it sure, but there are rules you have to follow like the "building code". Then you have CSS which is like the paint you choose for the walls, and the furniture in the rooms, and the pictures you have on the wall. You can pick the paint color and you can arrange the furniture how you like. HTML and CSS are pretty much the foundation of any website you visit. 

Then comes JavaScript. Continuing with the House analogy, JavaScript is all of the interactivity in your home. When a light switch is flipped, the lights come on, when the faucet is opened water comes out, and when someone rings your doorbell a sound is made. JavaScript is the ability to manipulate the HTML and CSS. If you can imagine with me for a moment, if you just command your furniture to switch to a particular layout when you push a button, and have the walls change color at the same time, oh and have the radio turn on to your favorite playlist.That's what JavaScript is able to do with HTML and CSS. It can completely transform them in an instance. 

## How JavaScript works
In JavaScript there are all kinds of concepts that make different things happen to a webpage. A couple of examples of these are control flow and loops.

### Control flow
- control flow is like putting a condition on what action to perform. You can think of this kind of like a traffic light. If the light is red stop, if yellow prepare to stop, otherwise keep driving. Here's an example of what it looks like in JavaScript.

```
let kidsAge = 16

if(kidsAge < 18) {
  console.log("No entry to the bar")
else
  console.log("let them into the bar")
```
In this example the condition of `kidsAge < 18` controls the flow of who gets into the bar, and who does not get into the bar.

### Loops
- Loops are another example of a JavaScript concept, we can use to perform a task. Loops are used to perform repeated tasks. Imagine a loop like a teacher grading a stack of exams. There are set number of exams based on the number of students. The teacher needs to grade each test, then they need to assign a grade, and then they need to repeat the process with the next test. Here's an example of what it might look like in JavaScript.

```
let numberOfTests = 5
let testResults = [90, 50, 76, 88, 100]

for (let i = 0; i < numberOfTests; i++) {
  if (testResults[i] >= 60)
    console.log("Passed")
  else 
    console.log("Not yet")
}
```
In this example we have five tests and we label that quantity of tests `numberOfTests`, Then we have a list of test results and we label that exact list of results `testResults` Now we want to auto-magically determine if they are passing scores or not passing scores, and to do the we used what is called a `for loop`. In a for loop there are three things needed, 
- an iterator `i = 0` which is essentially just a fancy way of saying the number of times the loop has repeated.
- Next is the condition `i < numberOfTests` that if no longer true the loop stops. When `i` is no longer less than `numberOfTests` stop looping.
- And finally after we test the condition and it's still true we want to increase the value of i by 1 or `i++` so the first time the loop runs i = 1, and the second time i = 2, and so on, until `i` is equal to `numberOfTests` and we stop looping.

Then next 4 lines of code are what we want to do each time we loop. I'll break it down in plain English and then I'll explain how it works. In the first loop, we are going to check if the first score in the `testResults` list is above 60, and if it is we are going mark it down as passed. However if the test is less than 60 we are going to mark it down as not yet passed or not yet.

Ok, so now I'll try to explain what those 4 lines are doing. The first line is asking if the test result in position i >= 60. Remember position i changes every time we loop because it is being increased by 1 with `i++`. So on the first loop I is going to pull the first item off the list and test if it is greater than or equal to 60. If that's true, it will log the test as passed. For the first loop `i` is 1 which means we are testing if the first item in the list named `testResults`. The first item is 90, so we are asking if 90 >= 60, and it is so we will log the test as passed.  

Now the loop has finished its first cycle and  will run again, and because we added 1 to the value of `i` we will check if the test result in the second spot of the list named `testResults` is greater than or equal to 60. The value in the second spot is 50, so we are asking is 50 >= 60, and no, it is not greater than 60, so we say "if" it's not >= 60 what "else" can it be, "Not Yet". So for the second loop the test result is logged as Not yet. Then it loops again, until `i` = 5 which is the number of tests (`numberOfTests`) we have to check, against the condition `i < numberOfTests` which as a reminder we keep running the loop until this condition is no longer true.

## What is the DOM?
The DOM is the interface for JavaScript to interact with HTML and CSS. It's like writing a Microsoft word document. We have to push keys on a keyboard to get words to appear in the word document on the screen. Every key press triggers the action of a letter displaying in the word document. The DOM is the same way, ther are all of these actions the DOM is able to see that triggers a change in the HTML or CSS documents. 

## What's the difference in Arrays and Objects
An **Array** is a list of values, each spot in the list is a single value. Here's some examples of single values: `["string value", 127, true]` These all represent a single piece of information stored in a list. **Objects** are like an Array because they are also lists, but in each spot of the list, can be multiple of what are called `key: value` pairs. For example the first item in the list is called `itemOne` and inside that item are details about that item like `size: large` or `cost: $20` these are the `key: value` pairs. 

## What are functions and why are they useful
**Functions** are reusable blocks of code design to do a specific thing. Well that right there is one reason they are useful, they can be reused. A function is basically a way of saying take these things I'm giving you, do this to them, and them give them back. It's kind of like any service you could hire. We'll use building a house as an example. You give your money to a builder, the builder turns your money into a house, and then gives you the house.
```
let costPerSqMeter = 10000

function builder(moneyForHouse) {
let houseSize = moneyForHouse / costPerSqMeter
  return houseSize
}

house(200000)
```
In this example we are trying to see how big of a house we can afford, so we are giving our `moneyforHouse` to the `builder` and asking them to determine the `houseSize` we can get with the `moneyForHouse` that we have, and the builder is returning to us with the `houseSize` we can afford.

I've joined writing this blog post, as it has helped my solidify my understanding of these concepts. Thanks for reading.
