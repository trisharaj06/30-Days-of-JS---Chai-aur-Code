//  Activity 1 - Arrat creation and Access
//Task 1
let arr = [1, 2, 3, 4, 5];
console.log(arr);

//Task 2
const FirstEle = arr[0],
  LastEle = arr[4];
console.log(FirstEle, LastEle);

//Activity 2 - Array Methods (Basic)
//Task 3
arr.push(7);
console.log(arr);

//Task 4
arr.pop();
console.log(arr);

//Task 5
arr.shift();
console.log(arr);

//Task 6
arr.unshift(8);
console.log(arr);

//Activity 3 - Array Methods (Intermediate)
//Task 7
let newArr = [];
arr.map((ele) => {
  return newArr.push(ele * 2);
});
console.log(newArr);

//Task 8
const Even = arr.filter((ele) => {
  return ele % 2 == 0;
});
console.log(Even);

//Task 9
const sum = arr.reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(sum);

//Activity 4 - Array Iteration
//Task 10
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//Task 11
arr.forEach((element) => {
  console.log(element);
});

//Activity 5 - Multi-dimensional Arrays
//Task 12
let TwoD_arr = [
  [3, 4, 5],
  [6, 7, 8],
];
console.log(TwoD_arr);

//Task 13
console.log(TwoD_arr[1][2]);
