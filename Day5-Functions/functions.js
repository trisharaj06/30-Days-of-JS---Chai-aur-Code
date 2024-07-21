//Activity 1 - Function Declaration
//Task 1
function EvenOrOdd(n) {
  if (n % 2 == 0) console.log("Number is Even");
  else console.log("Number is odd");
}
EvenOrOdd(5);

//Task 2
function square(n) {
  console.log("square of ", n, " = ", n * n);
}
square(7);

//Activity 2 - Function Expression
//Task 3
let a = 4,
  b = 5;
const maximum = function maxOfTwo(a, b) {
  if (a > b) return a;
  return b;
};
console.log(maximum(a, b));

//Task 4
let str1 = "Trisha",
  str2 = "Raj";
const concatenate = (str1, str2) => {
  return str1 + str2;
};
console.log(concatenate(str1, str2));

//Activity 3 - Arrow Functions
//Task 5
const sum = (a, b) => {
  return a + b;
};
console.log(sum(a, b));

//Task 6
const has_ch = (str1) => {
  return str1.includes("a");
};
console.log(has_ch(str1));

//Activity 4 - Function Parameters and Default values
//Task 7
function Add(a, b = 10) {
  console.log("sum with default value", a + b);
}
Add(a);

//Task 8
let name = "Trisha";
function greet(name, age = 21) {
  console.log("Hello ", name, ", your age is ", age);
}
greet(name);

//Activity 5 - Higher order Functions
//Task 9
function Ncalls(func, n) {
  for (let i = 0; i < n; i++) func();
}
function print() {
  console.log("welcome to 30 days of JS!");
}
Ncalls(print, 4);

//Task 10

function fun(func1, func2, n) {
  console.log(func2(func1(n)));
}
const sq = (n) => n * n;
const inc = (n) => n + 1;
fun(sq, inc, 5);
