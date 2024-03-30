var reduce = function(nums, fn, init) {
    let currentValue = init;
    
    for (let i = 0; i < nums.length; i++){
        if (nums.length === 0) return init;
        currentValue = fn(currentValue,nums[i])
    }
    
    return currentValue;
};