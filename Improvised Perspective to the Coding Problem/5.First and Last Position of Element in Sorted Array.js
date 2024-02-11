let searchRange = function(nums, target) {
    // Binary search approach

    function findLeftIndex(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let leftIndex = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] >= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }

            if (nums[mid] === target) {
                leftIndex = mid;
            }
        }

        return leftIndex;
    }

    function findRightIndex(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let rightIndex = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }

            if (nums[mid] === target) {
                rightIndex = mid;
            }
        }

        return rightIndex;
    }

    let leftIndex = findLeftIndex(nums, target);
    let rightIndex = findRightIndex(nums, target);

    return [leftIndex, rightIndex];
};
