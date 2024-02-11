function isHappy(n) {
  // Helper function to calculate the sum of squares of digits
  function calculateSumOfSquares(num) {
    let sum = 0;
    while (num > 0) {
      const digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  let seenNumbers = new Set();

  while (n !== 1 && !seenNumbers.has(n)) {
    seenNumbers.add(n);
    n = calculateSumOfSquares(n);
  }

  return n === 1;
}
