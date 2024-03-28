var expect = function(val) {
    return {
        toBe: function(checkVal) {
            if (val === checkVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(checkVal) {
            if (val !== checkVal) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
};
