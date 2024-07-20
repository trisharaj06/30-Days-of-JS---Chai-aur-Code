// Activity 1 - If-Else statements
//Task 1
let num = 5;
if (num > 0) {
  console.log("Number is positive");
} else if (num < 0) {
  console.log("Number is Negative");
} else {
  console.log("Number is zero");
}

// Task 2
let age = 22;
if (age >= 18) {
  console.log("Person is eligible to vote");
} else {
  console.log("Person is not eligible to vote");
}

// Activity 2 - Nested If-Else statement
//Task 3
let a = 3,
  b = 4,
  c = 5;
if (a > b) {
  if (a > c) {
    console.log("a is largest");
  } else {
    console.log("c is largest");
  }
} else {
  if (c > a) console.log("c is largest");
  else console.log("b is largest");
}

//Activity 3 - Switch case
//Task 4
let day = 4;
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}

//Task 5

let score = 40;
switch (true) {
  case score >= 75:
    console.log("Grade A");
    break;
  case score < 75 && score >= 60:
    console.log("Grade B");
    break;
  case score < 60 && score >= 45:
    console.log("Grade C");
    break;
  case score < 45 && score >= 30:
    console.log("Grade D");
    break;
  case score <= 30:
    console.log("Grade F {Fail}");
    break;
  default:
    console.log("Invalid score");
}

//Activity 4 - Conditional (Ternary) operator
//Task 6
let number = 7;
let res = number % 2 ? "odd" : "Even";
console.log("Number is ", res);

// Activity 5 - combining conditions
//Task 7
let year = 1997;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
  console.log(year, " is leap year");
else console.log(year, " is not leap year");
