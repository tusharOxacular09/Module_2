function findPairWithSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
}

// Example usage:
const example1 = [3, 7, 10, 2, 9, 1];
const example2 = [2, 7, 11, 15];

console.log(findPairWithSum(example1, 12));
// Output: [3, 9]

console.log(findPairWithSum(example2, 9));
// Output: [2, 7]
