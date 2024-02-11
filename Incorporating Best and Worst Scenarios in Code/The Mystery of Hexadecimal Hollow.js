function maxHex(hexArray) {
  let maxXOR = 0;

  for (let i = 0; i < hexArray.length - 1; i++) {
    for (let j = i + 1; j < hexArray.length; j++) {
      const num1 = parseInt(hexArray[i], 16);
      const num2 = parseInt(hexArray[j], 16);
      const currentXOR = num1 ^ num2;

      if (currentXOR > maxXOR) {
        maxXOR = currentXOR;
      }
    }
  }

  return maxXOR.toString(16).toUpperCase();
}

// Example usage:
const example1 = ["2A", "3B", "4C", "5D", "6E"];
const example2 = ["A0", "C1", "66", "88"];

console.log(maxHex(example1));
// Output: "48"

console.log(maxHex(example2));
// Output: "C8"
