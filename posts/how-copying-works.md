---
title: How Copying Works
excerpt: JavaScript basics you should definitely know! In JavaScript, when working with objects and arrays, it's important to understand how copying works.
image: how-copying-works.png
isFeatured: true
date: '2023-05-14'
---

In JavaScript, when working with objects and arrays, it's important to understand how copying works. By default, assigning an object or an array to a new variable creates a reference rather than a completely independent copy. This means that modifying the copied variable can also modify the original, leading to unintended side effects.

To create an independent copy that is not affected by changes to the original, you need to perform a deep copy. Deep copying creates a new object or array and recursively copies all nested objects and arrays within it.

The deepCopy function provided here is a utility function that performs a deep copy of an object or array. It checks the type of the given value and recursively copies its properties or elements, ensuring that the copied object is completely independent.

A common use case for deep copying is when you want to create a modified version of an object or array without modifying the original data. Deep copying allows you to make changes to the copied data without affecting the original, providing a reliable and isolated working copy.

```js
function deepCopy(obj) {
  if (Array.isArray(obj)) {
    // If the object is an array, create a new array and recursively copy its elements
    return obj.map(deepCopy);
  } else if (typeof obj === 'object' && obj !== null) {
    // If the object is an object, create a new object and recursively copy its properties
    const newObj = {};
    for (let key in obj) {
      newObj[key] = deepCopy(obj[key]);
    }
    return newObj;
  } else {
    // If the object is neither an object nor an array, return it as is
    return obj;
  }
}
```
