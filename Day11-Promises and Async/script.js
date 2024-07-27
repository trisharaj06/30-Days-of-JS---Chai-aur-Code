// Activity 1 - Understanding Promises
//Task 1

// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is a message after 2 seconds!");
//   }, 2000);
// });
// myPromise.then((msg) => {
//   console.log(msg);
// });

// Task 2
// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Error: An error message after 2 seconds");
//   }, 2000);
// });

// promise2.catch((msg) => {
//   console.log(msg);
// });

// Activity 2 - Chaining Promises
// Task 3
// function fetchData(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Fetching data", data);
//     }, 1500);
//   });
// }
// fetchData("First")
//   .then((res) => {
//     return fetchData("second");
//   })
//   .then((res) => {
//     return fetchData("Third");
//   })
//   .catch((err) => {
//     console.log("Error msg");
//   });

// Activity 3 - Using Async/Await
//Task 4
// async function waitpromise(promise) {
//   try {
//     const result = await promise;
//     console.log(result);
//   } catch (err) {
//     console.log("Error: ", err);
//   }
// }
// const prm = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise resolved");
//   }, 2500);
// });
// waitpromise(prm);

// Task 5
// const prm2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Something went wrong");
//   }, 3000);
// });
// waitpromise(prm2);

// Activity 4 - Fetching data from an API
// Task 6

//Task 7

// Activity 5 - Concurrent Promises
//Task 8
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data 1");
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data 2");
  }, 3000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data 3");
  }, 4000);
});
const allprm = Promise.all([p1, p2, p2]);
allprm.then((val) => {
  console.log("All promises completed", val);
});

// Task 9
Promise.race([p1, p2, p3]).then((val) => {
  console.log("First won", val);
});
