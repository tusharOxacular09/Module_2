// Binary Search Approach
var transitionPointBinarySearch = function (arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === 1 && (mid === 0 || arr[mid - 1] === 0)) {
      return mid;
    } else if (arr[mid] === 1) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
};

// Linear Scan Approach
var transitionPointLinearScan = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      return i;
    }
  }

  return -1;
};

// Example usage with Binary Search Approach:
const example1BinarySearch = transitionPointBinarySearch([0, 0, 0, 1, 1]);
console.log(example1BinarySearch); // Output: 3

const example2BinarySearch = transitionPointBinarySearch([0, 0, 0, 0]);
console.log(example2BinarySearch); // Output: -1

// Example usage with Linear Scan Approach:
const example1LinearScan = transitionPointLinearScan([0, 0, 0, 1, 1]);
console.log(example1LinearScan); // Output: 3

const example2LinearScan = transitionPointLinearScan([0, 0, 0, 0]);
console.log(example2LinearScan); // Output: -1
