function isPalindrome(n) {
  // Convert the positive integer to a string for easy comparison
  let numString = n.toString();

  // Use two pointers, one starting from the beginning and the other from the end
  let start = 0;
  let end = numString.length - 1;

  while (start < end) {
    if (numString[start] !== numString[end]) {
      return false; // If there is a mismatch, it's not a palindrome
    }

    // Move the pointers towards the center
    start++;
    end--;
  }

  return true; // If the loop completes without returning false, it's a palindrome
}

// console.log(isPalindrome(121));
