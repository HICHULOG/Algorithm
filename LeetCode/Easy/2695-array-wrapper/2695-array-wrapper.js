class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }
    
    valueOf() {
        return this.nums.reduce((a,c) => a + c, 0);
    }
    
    toString() {
        return JSON.stringify(this.nums);
    }
    
};
