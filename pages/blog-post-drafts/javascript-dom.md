---
title: "JavaScript and the DOM"
author: "Joel Anderson"
date: "2025-01-23"
description: "Core concepts of JavaScript and the DOM learned in Sprint 3"
---

## How the Sausage is Made
Understanding how websites work can be overwhelming, so let's use a simple analogy.

HTML is like the structure of a house—static and rule-bound. CSS is the paint and furniture, allowing for customization. Together, HTML and CSS form the foundation of any website.

JavaScript adds interactivity, like flipping a light switch or turning on a faucet. It manipulates HTML and CSS, enabling dynamic changes, such as rearranging furniture or changing wall colors with a button press.

## How JavaScript Works
JavaScript has various concepts that affect webpage behavior, including control flow and loops.

### Control Flow
Control flow determines actions based on conditions, similar to a traffic light. For example:

```javascript
let kidsAge = 16;

if (kidsAge < 18) {
  console.log("No entry to the bar");
} else {
  console.log("Let them into the bar");
}
```
Here, the condition `kidsAge < 18` controls who can enter the bar.

### Loops
Loops perform repeated tasks, like a teacher grading exams. For example:

```javascript
let numberOfTests = 5;
let testResults = [90, 50, 76, 88, 100];

for (let i = 0; i < numberOfTests; i++) {
  if (testResults[i] >= 60) {
    console.log("Passed");
  } else {
    console.log("Not yet");
  }
}
```
This loop checks each test score against a passing mark of 60, logging the result accordingly.

## What is the DOM?
The DOM (Document Object Model) is how JavaScript interacts with HTML and CSS. It’s like typing in a word processor—each keystroke triggers a change on the screen. The DOM detects actions that modify HTML or CSS.

## Difference Between Arrays and Objects
An **Array** is a list of values, like `["string value", 127, true]`. An **Object** is similar but contains `key: value` pairs, such as `itemOne: {size: "large", cost: "$20"}`.

## What are Functions and Why are They Useful?
**Functions** are reusable code blocks designed for specific tasks. They take inputs, process them, and return outputs. For example:

```javascript
let costPerSqMeter = 10000;

function builder(moneyForHouse) {
  let houseSize = moneyForHouse / costPerSqMeter;
  return houseSize;
}

builder(200000);
```
Here, the function calculates the house size based on the budget provided.

Writing this blog post has solidified my understanding of these concepts. Thanks for reading!
