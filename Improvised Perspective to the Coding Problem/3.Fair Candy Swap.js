var fairCandySwap = function(aliceSizes, bobSizes) {
    let sumAlice = 0, sumBob = 0;
    
    for (let size of aliceSizes) {
        sumAlice += size;
    }
    
    for (let size of bobSizes) {
        sumBob += size;
    }
    
    let targetSum = (sumAlice + sumBob) / 2;
    
    // Create a hashmap for Bob's candy sizes for efficient lookup
    let bobMap = new Map();
    for (let size of bobSizes) {
        bobMap.set(size, true);
    }
    
    for (let size of aliceSizes) {
        let targetBobSize = targetSum - (sumAlice - size);
        
        if (bobMap.has(targetBobSize)) {
            return [size, targetBobSize];
        }
    }
};
