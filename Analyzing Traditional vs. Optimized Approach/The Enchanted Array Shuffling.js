function enchantedArrayShuffling(originalArray) {
    const sortedArray = [...originalArray].sort((a, b) => a - b);
    const shuffledArray = [];
  
    let left = 0;
    let right = sortedArray.length - 1;
  
    while (left < right) {
      shuffledArray.push(sortedArray[left++]);
      shuffledArray.push(sortedArray[right--]);
    }
  
    // If there is a remaining element at the center of the sorted array
    if (left === right) {
      shuffledArray.push(sortedArray[left]);
    }
  
    return shuffledArray;
  }
  
  // Example usage:
  const example1 = [4, 9, 2, 14, 7];
  const example2 = [5, 1, 8, 3, 10, 2];
  
  console.log(enchantedArrayShuffling(example1));
  // Output: [2, 14, 4, 9, 7]
  
  console.log(enchantedArrayShuffling(example2));
  // Output: [1, 10, 2, 8, 3, 5]
  