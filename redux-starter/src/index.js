import { compose, pipe } from "lodash/fp";
// //function variable

// function welcome() {
//     console.log('salom')
// }

// let func = welcome;
// func()

// //passing as an agrument function

// function welcome(fn) {
//   console.log(fn());
// }

// let func = welcome(() => "salom function");

// // returning a function

// function welcome() {
//   return function () {
//     return "Hello world!";
//   };
// }

// let func = welcome();

// func();

let input = "    JavaScript     ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();

const wrapInSpan = (str) => `<span>${str}</span>`;
const wrapInDiv = (str) => `<div>${str}</div>`;
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

const toLowerCase = (str) => str.toLowerCase();

// console.log(wrapInDiv(toLowerCase(trim(input))));

// const result = compose(wrapInDiv, toLowerCase, trim);
const result = pipe(trim, toLowerCase, wrap("span"), wrap("div"));

const res = result(input);
const ad = (a, b) => a + b;

const addA = (a) => (b) => a + b;

console.log(ad(4, 5), "standart");
console.log(addA(4)(5), "with curriying");

console.log(res, "111");
