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

let numbers = [1, 3, 4, 5, 6];
numbers.map(number => number * 2);

setTimeout(() => console.log("Hello after 3 s"), 3000);