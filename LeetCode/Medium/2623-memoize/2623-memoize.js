function memoize(fn) {
    const cache = {};
    let callCount = 0;

    return function(...args) {
        const key = JSON.stringify(args);
        if (!(key in cache)) {
            cache[key] = fn(...args);
            callCount++;
        }
        return cache[key];
    };
}