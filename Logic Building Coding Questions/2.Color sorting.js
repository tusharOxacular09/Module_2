let sortColors = function (nums) {
  let redPtr = 0; // Pointer for red color (0)
  let whitePtr = 0; // Pointer for white color (1)
  let bluePtr = nums.length - 1; // Pointer for blue color (2)

  while (whitePtr <= bluePtr) {
    if (nums[whitePtr] === 0) {
      // Swap with redPtr and increment both pointers
      [nums[redPtr], nums[whitePtr]] = [nums[whitePtr], nums[redPtr]];
      redPtr++;
      whitePtr++;
    } else if (nums[whitePtr] === 1) {
      // Increment whitePtr
      whitePtr++;
    } else {
      // Swap with bluePtr and decrement bluePtr
      [nums[whitePtr], nums[bluePtr]] = [nums[bluePtr], nums[whitePtr]];
      bluePtr--;
    }
  }
};
