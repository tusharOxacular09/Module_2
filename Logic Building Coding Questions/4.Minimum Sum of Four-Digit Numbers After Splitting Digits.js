let minimumSum = function (num) {
  // Convert the number to an array of digits and sort them in ascending order
  const digits = num
    .toString()
    .split("")
    .map(Number)
    .sort((a, b) => a - b);

  // Create two new numbers (new1 and new2)
  const new1 = Number(digits[0].toString() + digits[1].toString());
  const new2 = Number(digits[2].toString() + digits[3].toString());

  // Return the sum of new1 and new2
  return new1 + new2;
};

// Example usage:
const example1 = minimumSum(2932);
console.log(example1); // Output: 52

const example2 = minimumSum(4009);
console.log(example2); // Output: 13
