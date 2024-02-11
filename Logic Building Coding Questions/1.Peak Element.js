let findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[mid + 1]) {
            // Peak element might be in the left half
            right = mid;
        } else {
            // Peak element might be in the right half
            left = mid + 1;
        }
    }

    // At the end of the loop, left and right will be pointing to the peak element
    return left;
};
