---
title: "What are the differences between relative, absolute, and fixed positioning?"
author: "Joel Anderson"
description: "In an HTML document there are elements, think of elements like the building blocks of a web page. These elements get stacked on top of each other, and each element has a size or an amount of space they take up on the webpage."
---

Imagine with me for a minute these HTML elements are bricks for building a house, and you have a pile of bricks that you want to stack up. You place your first brick on the ground, then you place the second brick on top of the first brick. This brick is not touching the ground it is the height of the first brick away from the ground. Each brick you stack gets further from the ground as it is offset by the height of all the bricks below added together.

OK, so elements are just like the bricks When they get stacked, the first element takes it's space on the page, then when the next element gets stacked on, it takes its space, etc. 

##### So how do relative, absolute, and fixed positioning in CSS affect these stacked elements in HTML?

When an html element gets one of these CSS positioning properties associated with it, it makes it so the element is no longer bound by the fundamentals of the stack. They can now move around independent of the stack.

### Relative Position

The relative position property moves the element from it's stacked position freely in any direction, without affecting the position of the other elements in the stack. Essentially the normal space that element would be holding is still reserved, but the element has move from its normal space. Here's what the syntax of the relative position looks like.

```html
<style>
#1 {
    Position: Relative;
    left: 100px;
}
</style>
<html>
    <div id="1">
        <h1>Has Relative Position</h1>
    </div>
    <div id=2>
        <h1>Has no position property</h1>
    </div>
</html>
```
_In this example the div with an id=1 is moved 100px to the right with the left property, while the div with an id=2 has not moved._ 

### Absolute Position

The absolute position property moves the element a fixed distance relative to the position of the element it is inside (also know as the parent element) This means if the parent element moves when displayed on different sized screens, the element with the absolute position (also know as the child element) will still be the same exact set distance from the edge of it's parent element. Here's what the syntax of the absolute position looks like.

```html
<style>
#2 {
    Position: absolute;
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
_In this example the child div with an id=2 would be place 10px from the top and 50px from the left of the parent div with an id=1_

### Fixed Position

The fixed position property removes the element from the stack, so it actually takes up no space at all in the stack. It's position is now relative to the screen. and it's position will stay in the same place as the page is scrolled. Here's what the syntax of the fixed position looks like.

```html
<style>
#1 {
    Position: fixed;
    bottom: 10px;
    right: 10px;
}
</style>
<html>
    <div id="Back to top buttom">
        <h1>Has fixed Position</h1>
    </div>
    <div id=2>
        <h1>Has no position property</h1>
    </div>
</html>
```
_This example would place the element in the bottom right hand corner of the screen_

You may have noticed these position properties can allow elements to be visually on top of each other on the page. There is one more interesting property that can be manipulated to affect which elements are on top. That property is called z-index, which dictates which order the overlapping elements are in. This is done by giving the elements z-index property a number value. The highest number will be on top, then the next hightest down to the lowest number positioning the element on the bottom.

These positioning elements create a way to make interesting page designs that are not limited by the standard box sizes of the elements.

#### Resources
Here are the resources I used to learn about positioning properties. Have a read as their are some valuable nuggets of information, and some hands on testing of how these properties work.

- https://www.geeksforgeeks.org/difference-between-relative-and-absolute-position-in-css
- https://www.w3schools.com/Css/css_positioning.asp
- https://www.webdevbydoing.com/whats-the-difference-between-static-relative-absolute-and-fixed-positioning/
- https://developer.mozilla.org/en-US/docs/Web/CSS/position

