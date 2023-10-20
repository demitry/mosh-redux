import { compose, pipe } from 'lodash/fp'
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