<!-- TOC -->

- [Redux Course](#redux-course)
    - [Functional Programming](#functional-programming)
        - [Functions as First-class Citizens](#functions-as-first-class-citizens)
        - [Higher-Order Functions - takes functions as an argument](#higher-order-functions---takes-functions-as-an-argument)
        - [Functional Composition](#functional-composition)
        - [Composing and Piping](#composing-and-piping)

<!-- /TOC -->

# Redux Course

The Ultimate Redux Course

https://codewithmosh.com/p/ultimate-redux

6 hours, 120 lessons

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

### Functional Composition

```js
let input = "    JavaScript   ";
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`
const toLowerCase = str => str.toLowerCase();
const result = wrapInDiv(toLowerCase(trim(input)));
console.log(result);
```

problems
  - we have to read from right to left
  - so many parentheses )))))));

### Composing and Piping

Use lodash to simplify the code from the last sample

https://lodash.com/

```
npm install lodash
```

#### compose

```js
import { compose, pipe } from 'lodash/fp'
// compose - Higher Order Function

let input = "    JavaScript   ";
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`
const toLowerCase = str => str.toLowerCase();

const transform = compose(wrapInDiv, toLowerCase, trim);

const result = transform(input);
console.log(result);
```

problem
  - we still have to read from right to left

#### pipe

```js
//const transform = compose(wrapInDiv, toLowerCase, trim);
const transform = pipe(trim, toLowerCase, wrapInDiv);

const result = transform(input);
console.log(result);
```

### Currying

Haskell Curry

https://en.wikipedia.org/wiki/Haskell_Curry

```js
//What is the profit?

//const wrap0 = (type, str) => `<${type}>${str}</${type}>`
//const transform0 = pipe(trim, toLowerCase, wrap0("div")); // we CANNOT pass "div" (it'll return the value. nut the function)

// but when we curry, wrap("div") will return a function

const wrap1 = type => str => `<${type}>${str}</${type}>` // curried function
const transform1 = pipe(trim, toLowerCase, wrap1("div")); // we CAN pass "div"
const result1 = transform1(input);
console.log(result1);
```

### Pure Functions

#### Pure Functions

- No random values
- No current date/time
- No global state (DOM, files, DB, etc.)
- No param mutation
- No side effects
- Immutability

In Redux - Reducers can be impure

#### Benefits

- Self documenting
- Easy to test
- Cacheable
- Concurrency

### Immutability

Change the copy, Original param is not changed

const just prevents reassignment

#### Pros

- More predictable
- Faster Change Detection
  - 2 obj comparison by ref is quick
  - comparing mutable objects is harder
```
if(obj1 === obj2) {...}
```
- Concurrency

#### Cons

- Performance Cost (copy objects)
- Memory Overhead
  - Library for structural sharing

### Updating objects