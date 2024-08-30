// Activity 1 - Understanding closures
// Task 1
function init() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}
const myFunc = init();
myFunc();

// Task 2

const makeCounter = function () {
  let privateCounter = 0;
  function increment() {
    privateCounter += 1;
  }
  function getValue() {
    return privateCounter;
  }
  return { increment, getValue };
};
const counter = makeCounter();
counter.increment();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());

// Activity 2 - Practical closures
// Task 3
function createId() {
  let lastId = 0;
  function generateId() {
    lastId++;
    return lastId;
  }
  return generateId;
}
const uniqueId = createId();
console.log(uniqueId());
console.log(uniqueId());

// Task 4

function userName(name) {
  return function greet() {
    console.log("Hello ", name);
  };
  // return greet;
}
const userName1 = userName("Rohan");
userName1();

// Activity 3 - closures in Loops
// Task 5
function createFunctionArray(length) {
  const functionArray = [];

  for (let i = 0; i < length; i++) {
    functionArray.push(function () {
      console.log(i);
    });
  }

  return functionArray;
}

const functionArray = createFunctionArray(5);

functionArray[0]();
functionArray[1]();
functionArray[2]();
functionArray[3]();
functionArray[4]();

// Activity 4 - Module pattern
// Task 6

function createItemManager() {
  const items = [];

  function addItem(item) {
    items.push(item);
  }

  function removeItem(item) {
    const index = items.indexOf(item);
    if (index !== -1) {
      items.splice(index, 1);
    }
  }

  function listItems() {
    console.log(items);
  }

  return {
    addItem,
    removeItem,
    listItems,
  };
}

const itemManager = createItemManager();
itemManager.addItem("item1");
itemManager.addItem("item2");
itemManager.listItems();
itemManager.removeItem("item1");
itemManager.listItems();

// Activity 5 - Memoization
// Task 7

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function expensiveFunction(x) {
  console.log("Expensive calculation for x:", x);
  return x * x;
}

const memoizedExpensiveFunction = memoize(expensiveFunction);

console.log(memoizedExpensiveFunction(5));
console.log(memoizedExpensiveFunction(5));
console.log(memoizedExpensiveFunction(10));
console.log(memoizedExpensiveFunction(10));

// Task 8
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // Output: 120 (memoized result)
console.log(memoizedFactorial(5)); // Output: 120 (cached result)
console.log(memoizedFactorial(10)); // Output: 3628800 (memoized result)
console.log(memoizedFactorial(10)); // Output: 3628800 (cached result)
