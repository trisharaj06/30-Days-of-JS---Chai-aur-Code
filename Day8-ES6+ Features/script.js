//Activity 1 - Template Literals
// Template Strings use back-ticks (``) rather than the quotes ("") to define a string

//Task 1
let name = "Trisha",
  age = 22;
console.log(`Person's name is: ${name} and age is: ${age}`);

//Task 2
let text = `The quick
brown fox
jumps over
the lazy dog`;
console.log(text);

//Activity 2 - Destructing

//We may have an array or object that we are working with, but we only need some of the items contained in these.
//Destructuring makes it easy to extract only what is needed.

// Task 3
let numbers = [3, 4, 1, 2, 7];
const [first, second] = numbers;
console.log(first, second);

//Task 4
const book = {
  title: "The giver",
  author: "Lois lowry",
  year: 1993,
};
const { title, author } = book;
console.log(`Title: ${title}, Author: ${author}`);

//Activity 3 - Spread and Rest operator
const ar1 = [1, 2, 3, 4];
const updatedArr = [...ar1, 7, 8, 9];
console.log(updatedArr);

//Task 6
function sum(...args) {
  let s = 0;
  for (let arg of args) s += arg;
  return s;
}
console.log(sum(7, 8, 9, 6, 4));

// Activity 4 - Default parameters
//Task 7
function func(a, b = 1) {
  return a * b;
}
console.log(`Product = ${func(5, 4)}`);
console.log(`Product = ${func(5)}`);

//Activity 5 - Enhanced Object Literals
//Task 8
const driver = {
  name: "Jane",
  speed: 60,
  car: "McLaren",
  speedUp(speedup) {
    this.speed = this.speed + speedup;
    console.log("new speed = " + this.speed);
  },
};
console.log(driver);
console.log(driver.speedUp(40));

//Task 9
let prop1 = "fname",
  prop2 = "lname";
const person = {
  [prop1]: "Lovely",
  [prop2]: "Chaudhari",
  city: "Delhi",
};
console.log(person);
