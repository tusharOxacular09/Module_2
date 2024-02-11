// finding the smallest letter greater than the target.
function nextGreatestLetter(letters, target) {
  let letterSet = new Set(letters);

  for (let char of letterSet) {
    if (char > target) {
      return char;
    }
  }

  return letters[0];
}

// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
