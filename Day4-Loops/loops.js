//Activity 1 - For Loop
//Task 1
for (let i = 1; i <= 10; i++) console.log(i);

//Task 2
const num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(num, " * ", i, " = ", num * i);
}

//Activity 2 - While Loop
// Task 3
let sum = 0,
  k = 1;
while (k <= 10) {
  sum += k;
  k++;
}
console.log(sum);

// Task 4
let number = 10;
while (number != 0) {
  console.log(number);
  number--;
}

//Activity 3 - Do.. While Loop
//Task 5
let val = 1;
do {
  console.log(val);
  val++;
} while (val != 6);

//Task 6
let fact = 1,
  n = 5;
do {
  fact *= n;
  n--;
} while (n != 1);
console.log("Factorial =  ", fact);

//Activity 4 - Nested Loops
//Task 7 (pattern printing)
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log();
}

//Activity 5 - Loop control statements
//Task 8
for (let i = 1; i <= 10; i++) {
  if (i == 5) continue;
  console.log(i);
}

//Task 9
for (let i = 1; i <= 10; i++) {
  if (i == 7) break;
  console.log(i);
}
