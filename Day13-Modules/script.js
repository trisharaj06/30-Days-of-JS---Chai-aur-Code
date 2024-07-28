// Activity 1 - creating and exporting modules
//Task 1
// const { sum, person } = require("./script1.js");
// const result = sum(3, 4);
// console.log(result);

// Task 2
// console.log(person);
// console.log(person.message());

// Activity 2 - Named and Default Exports
// Task 3
// use {type:module} in package.json file to use import statement

// import { mutiply, subtract } from "./default.js";

// const result1 = mutiply(5, 3);
// const result2 = subtract(8, 2);

// console.log(result1);
// console.log(result2);

// Task 4
// import hello from "./single_default.js";
// hello();

// Activity 3 - Importing Entire Modules
// Task 5
const utils = require("./task5.js");

console.log(utils.PI);
console.log(utils.GRAVITY);
console.log(utils.add(3, 4));
console.log(utils.subtract(7, 2));

// Activity 4 - Using third-party modules
// Task 6
const _ = require("lodash");

const numbers = [1, 2, 3, 4, 5];

// Use the _.sum function from Lodash
const sum = _.sum(numbers);

console.log(sum); // Output: 15

// Task 7
const axios = require("axios");
axios
  .get("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) => console.log(err));
