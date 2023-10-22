import { compose, pipe } from 'lodash/fp'
import { Map } from 'immutable'
// compose - Higher Order Function

let input = "    JavaScript   ";
const trim = str => str.trim();

//Duplication:
//const wrapInDiv = str => `<div>${str}</div>`;
//const wrapInSpan = str => `<span>${str}</span>`;

//const wrap = (type, str) => `<${type}>${str}</${type}>`

const wrap = type => str => `<${type}>${str}</${type}>`; // curried function

const toLowerCase = str => str.toLowerCase();

//const transform = compose(wrapInDiv, toLowerCase, trim);
const transform = pipe(trim, toLowerCase, wrap);

const result = transform(input);
console.log(result);

//------------------------------------------------------------------------------
//What is the profit?

//const wrap0 = (type, str) => `<${type}>${str}</${type}>`
//const transform0 = pipe(trim, toLowerCase, wrap0("div")); // we CANNOT pass "div" (it'll return the value. nut the function)

// but when we curry, wrap("div") will return a function

const wrap1 = type => str => `<${type}>${str}</${type}>` // curried function
const transform1 = pipe(trim, toLowerCase, wrap1("div")); // we CAN pass "div"
const result1 = transform1(input);
console.log(result1);

//------------------------------------------------------------------------------

const person = { name: "John" };
const updated = Object.assign({}, person, { name: "Bob", age: 35 });
console.log(updated);

// Better way
// Spread operator + override

const updated2 = { ...person, name: "Bob", age: 35 };

// Spread - Shallow copy

const detailedPerson = {
    name: "John",
    address: {
        country: "United States",
        city: "San Francisco",
    }
}
const updateDetailedPerson = { ...detailedPerson };
updateDetailedPerson.address.city = "New York";

// Updates both object - the copy is shallow
// Both objects have the same address in memory

//Deep copy:

const updatedDeep = {
    ...person,
    address: {
        ...person.address,
        city: "Washington"
    },
    name: "Peter"
}

// Updating arrays

const numbers = [1, 2, 3];

// Adding
const arr1 = [...numbers, 4];
const arr2 = [4, ...numbers];

const index = numbers.indexOf(2);
const arr3 = [
    ...numbers.slice(0, index),
    4,
    ...numbers.slice(index)
];

// Removing
const rem1 = numbers.filter(n => n !== 2);

// Updating
const upd1 = numbers.map(n => n === 2 ? 20 : n);


// Enforcing Immutability

// This is mutable object
let book = { title: "Harry Potter" };

function publish(book) {
    book.isPublished = true;
}

publish(book);

console.log(book);

//import { Map } from 'immutable'
let book2 = Map({ title: "Harry Potter" });
console.log(book2);
console.log(book2.get("title")); // PROBLEM

// PROBLEM: hard to integrate with libraries which expect POJO
console.log(book2.toJS()); //POJO =(

function publishImmutable(bookParam) {
    return bookParam.set("isPublished", true);
}

let publishedBook = publishImmutable(book2).toJS();
console.log("published immutable:");
console.log(publishedBook);

// And once you started you have to use these getters and setters everywhere in code.
// FFFF

//That is why Mosh prefer Immer

// function publish(book) {
//     return
// }