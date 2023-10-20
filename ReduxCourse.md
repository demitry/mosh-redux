<!-- TOC -->

- [Redux Course](#redux-course)
    - [Functional Programming](#functional-programming)
        - [Functions as First-class Citizens](#functions-as-first-class-citizens)
        - [Higher-Order Functions](#higher-order-functions)

<!-- /TOC -->

# Redux Course

## Functional Programming

Paradigms
- Procedural
- OOP
- Functional
- Event-Driven

Functional
- input -> box -> output
- no data change
- More Concise
- Easier to Debug and Test
- More Scalable
- Cores of the CPU

### Functions as First-class Citizens
- Assign to a variable
- Pass as an argument
- Return from other functions

```js
console.log("Hello World!");

function sayHello() {
    return "Hello World!";
}

let fn = sayHello();

fn();

function greet(fnMessage) {
    console.log(fnMessage);
}

greet(sayHello);

greet(fn);

function sayHello2() {
    return function () {
        return "Hello World!";
    }
}

let fn2 = sayHello2();
let message = fn2();

```

### Higher-Order Functions - takes functions as an argument

```js
let numbers = [1, 3, 4, 5, 6];
numbers.map(number => number * 2);

setTimeout(() => console.log("Hello after 3 s"), 3000);
```