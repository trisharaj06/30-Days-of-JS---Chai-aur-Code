// Activity 1 - Basic Error Hnadling with Try-catch
// Task 1
function throwError() {
  throw new Error("This is an error");
}

try {
  throwError();
} catch (error) {
  console.error("An error occurred:", error.message);
}

// Task 2
function divide(a, b) {
  if (b == 0) {
    throw new Error("cannot be divided by zero");
  } else return a / b;
}
try {
  divide(5, 0);
  // console.log(divide(5, 2));
} catch (err) {
  console.log("Error: ", err.message);
}

// Activity 2 - Finally block
//Task 3
function ExecutionFlow() {
  try {
    console.log("Inside try block");
    // Simulate an error
    throw new Error("Simulated error");
  } catch (error) {
    console.error("Inside catch block:", error.message);
  } finally {
    console.log("Inside finally block");
  }
}

ExecutionFlow();

// Activity 3 - Custom Error objects
// Task 4
class MyCustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "MyCustomError";
  }
}

function throwCustomError() {
  throw new MyCustomError("This is a custom error");
}

try {
  throwCustomError();
} catch (error) {
  if (error instanceof MyCustomError) {
    console.error("Caught a custom error:", error.message);
  } else {
    console.error("Unexpected error:", error);
  }
}

// Task 5
class newCustom extends Error {
  constructor(msg) {
    super(msg);
  }
}
function validate(str) {
  if (str.length == 0) {
    throw new newCustom("string should not be empty");
  } else console.log("string is: ", str);
}
try {
  // validate("abc");
  validate("");
} catch (err) {
  console.log(err.message);
}

// Activity 4 - Error Hnadling in promises
// Task 6
function randomPromise() {
  return new Promise((resolve, reject) => {
    const randomValue = Math.random();
    if (randomValue < 0.5) {
      resolve("Promise resolved successfully");
    } else {
      reject("Error message");
    }
  });
}

randomPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error("Promise rejected:", error));

// Task 7
async function handleRandomPromise() {
  try {
    const result = await randomPromise();
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

handleRandomPromise();

// Activity 5 - Graceful Error Handling in Fetch
// Task 8

// Task 9
