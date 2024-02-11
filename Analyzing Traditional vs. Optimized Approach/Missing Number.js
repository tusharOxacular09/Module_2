let missingNumber = function(nums) {
    const n = nums.length;
    
    // Calculate the expected sum of numbers from 0 to n
    const expectedSum = (n * (n + 1)) / 2;
    
    // Calculate the actual sum of numbers in the array nums
    const actualSum = nums.reduce((acc, curr) => acc + curr, 0);
    
    // The missing number will be the difference between expected and actual sums
    return expectedSum - actualSum;
};

// Test the function
const nums1 = [3, 0, 1];  // The missing number is 2
console.log(missingNumber(nums1));  // Output should be 2



