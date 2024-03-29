var map = function(arr, fn) {
    let returnedArray = [];
    for (let [index, item] of arr.entries()) {
        returnedArray.push(fn(item, index));
    }
    return returnedArray;
};
