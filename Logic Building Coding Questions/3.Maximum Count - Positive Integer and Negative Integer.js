let maxCount = function (nums) {
  let posCount = 0; // Count of positive integers
  let negCount = 0; // Count of negative integers

  for (let num of nums) {
    if (num > 0) {
      posCount++;
    } else if (num < 0) {
      negCount++;
    }
  }

  return Math.max(posCount, negCount);
};

// Example usage:
const example1 = maxCount([-2, -1, -1, 1, 2, 3]);
console.log(example1); // Output: 3

const example2 = maxCount([-3, -2, -1, 0, 0, 1, 2]);
console.log(example2); // Output: 3

const example3 = maxCount([5, 20, 66, 1314]);
console.log(example3); // Output: 4
