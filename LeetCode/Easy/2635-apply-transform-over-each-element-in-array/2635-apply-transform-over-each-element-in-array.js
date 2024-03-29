var map = function(arr, fn) {
    let returnedArray = [];
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        returnedArray.push(fn(item, i));
    }
    return returnedArray;
};