module.exports = {
    uncurriedSum: function (a, b, c) {
        return a + b + c
    },
    curriedSum3: function (a) {
        return function (b) {
            return function (c) {
                return a + b + c
            }
        }
    },
};