// Activity 1 - Basic Recursion
// Task 1
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));
console.log(factorial(12));

// Task 2
const fib = (n) => {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};
console.log(fib(10));
console.log(fib(2));

// Activity 2 - Recursion with Arrays
// Task 3
function sum(arr, n) {
  if (n === 0) return 0;
  return arr[n - 1] + sum(arr, n - 1);
}
console.log("sum of elements = ", sum([1, 2, 3, 4, 5], 5));

// Task 4
function mx(arr, n) {
  if (n == 0) return arr[0];
  const curmx = Math.max(arr[n - 1], mx(arr, n - 1));
  return curmx;
}
console.log(mx([3, 7, 5, 8], 4));

// Activity 3 - string manipulation and recursion
// Task 5
function rev(str) {
  if (str === "") {
    // Base case: empty string
    return "";
  } else {
    return rev(str.substring(1)) + str.charAt(0);
  }
}

console.log(rev("abcd"));

// Task 6
function palindrome(str, i, j) {
  if (i > j) return true;
  if (str[i] != str[j]) return false;
  return palindrome(str, i + 1, j - 1);
}
console.log(palindrome("abba", 0, 3));
console.log(palindrome("abda", 0, 3));

// Activity 4 - Recursive search
// Task 7
function binarySearch(arr, i, j, x) {
  if (i > j) return -1;
  const mid = Math.floor((i + j) / 2);
  if (arr[mid] == x) return mid;
  else if (x > arr[mid]) return binarySearch(arr, mid + 1, j, x);
  else return binarySearch(arr, i, mid - 1, x);
}
console.log(binarySearch([5, 8, 9, 3], 0, 3, 9));
console.log(binarySearch([5, 8, 6, 9, 3], 0, 3, 7));

// Task 8
function count(arr, x) {
  if (arr.length == 0) return 0;
  return (arr[0] == x) + count(arr.slice(1), x);
}
console.log(count([3, , 8, 9, 3, 9, 3], 3));

// Activity 5 - Tree Traversal (optional)
// Task 9
class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

function inorderTraversal(root, result = []) {
  if (root === null) return result;

  inorderTraversal(root.left, result);
  result.push(root.data);
  inorderTraversal(root.right, result);

  return result;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

const result = inorderTraversal(root);
console.log(result);

// Task 10
function maxDepth(root) {
  if (root === null) {
    return 0;
  } else {
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
  }
}

const depth = maxDepth(root);
console.log(depth);
