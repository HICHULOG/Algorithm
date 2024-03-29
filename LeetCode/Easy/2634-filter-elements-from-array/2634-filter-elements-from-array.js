var filter = function(arr, fn) {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (fn(item, i)) {
            filteredArr.push(item);
        }
    }
    return filteredArr;
};