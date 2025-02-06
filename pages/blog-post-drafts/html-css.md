---
title: "What are the differences between relative, absolute, and fixed positioning?"
author: "Joel Anderson"
description: "In an HTML document, elements act as the building blocks of a web page, stacking on top of each other and occupying space."
---

Think of HTML elements as bricks in a house. You stack the first brick on the ground, then place the second on top, creating a height offset. Each subsequent brick adds to the height, just like HTML elements stack and occupy space on a webpage.

##### How do relative, absolute, and fixed positioning in CSS affect these stacked elements?

When an HTML element is assigned one of these CSS positioning properties, it can move independently of the stack.

### Relative Position

The relative position property allows an element to move freely from its stacked position without affecting others. The space it would normally occupy is still reserved. Here's the syntax:

```html
<style>
#1 {
    position: relative;
    left: 100px;
}
</style>
<html>
    <div id="1">
        <h1>Has Relative Position</h1>
    </div>
    <div id="2">
        <h1>Has no position property</h1>
    </div>
</html>
```
_The div with id=1 moves 100px to the right, while div id=2 remains in place._

### Absolute Position

The absolute position property moves an element a fixed distance relative to its parent element. If the parent moves, the child remains the same distance from it. Here's the syntax:

```html
<style>
#2 {
    position: absolute;
    top: 10px;
    left: 50px;
}
</style>
<html>
    <div id="1">
        <h1>Has no position property</h1>
        <div id="2">
            <h1>Has absolute property</h1>
        </div>
    </div>
</html>
```
_The child div with id=2 is positioned 10px from the top and 50px from the left of its parent div._

### Fixed Position

The fixed position property removes an element from the stack, meaning it takes up no space and is positioned relative to the screen. It remains in place while scrolling. Here's the syntax:

```html
<style>
#1 {
    position: fixed;
    bottom: 10px;
    right: 10px;
}
</style>
<html>
    <div id="Back to top button">
        <h1>Has fixed Position</h1>
    </div>
    <div id="2">
        <h1>Has no position property</h1>
    </div>
</html>
```
_This example places the element in the bottom right corner of the screen._

These positioning properties allow elements to overlap, which can be controlled using the z-index property. The z-index determines the stacking order, with higher values appearing on top.

These positioning techniques enable creative page designs beyond standard element sizes.

#### Resources
Here are some valuable resources for learning about positioning properties:

- [Geeks for Geeks](https://www.geeksforgeeks.org/difference-between-relative-and-absolute-position-in-css)
- [w3schools](https://www.w3schools.com/Css/css_positioning.asp)
- [Web Dev By Doing](https://www.webdevbydoing.com/whats-the-difference-between-static-relative-absolute-and-fixed-positioning/)
- [Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
